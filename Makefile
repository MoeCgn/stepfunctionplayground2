.PHONY: test

test:
	./node_modules/.bin/jest

clean: clean-transpile
	@echo "# Clean node_modules"
	rm -rf node_modules layers/nodejs/node_modules

install: clean
	@echo "# install dependencies"
	yarn install --production=false
	cd layers/nodejs && yarn install --production=true

exclude-type-script-typings: install
	@echo "# Exclude TypeScript typings"
	npx del-cli \
    "layers/nodejs/node_modules/**/@types/**" \
    "layers/nodejs/node_modules/**/*.d.ts" \
    "layers/nodejs/node_modules/**/.yarn-integrity" \
    "layers/nodejs/node_modules/**/.bin"

clean-transpile:
	@echo "# Clean transpiled mjs"
	npx del-cli "functions/schemas/**/*.json.mjs"

transpile: clean-transpile
	@echo "# transpiling schemas to mjs"
	@for file in functions/schemas/*/*.json ; do \
		ajv validate $$file --valid --strict true --coerce-types array --all-errors true --use-defaults empty ; \
		ajv transpile $$file --strict true --coerce-types array --all-errors true --use-defaults empty -o $$file.mjs ; \
	done

required-parameters:
ifndef stage
	$(error stage is not set)
endif

create-changeset-all: required-parameters
	@echo "# 🚀 Creating changeset for '${stage}'"
	export STAGE="${stage}"; sls deploy --stage ${stage} --param="changeset"
	@echo "# changeset deployment done"

deploy-all: required-parameters
	@echo "# 🚀 Deploying to '${stage}'"
	sls deploy --stage ${stage}
	@echo "# Deployment done"

remove-all: required-parameters
	@echo "# 💥 remove '${stage}'"
	sls remove --stage ${stage}
	@echo "# remove done"

deploy-function: required-parameters
ifndef functionName
	$(error functionName is not set)
endif
	@echo "# 🚀 Deploying function '${functionName}' to stage '${stage}'"
	sls deploy function --stage ${stage} --function ${functionName}
	@echo "# Deployment done"

