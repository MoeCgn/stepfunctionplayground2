import jsonata from 'jsonata';

const defaults = {
  plugins: []
}

const jsonataMiddleware = (opts = {}) => {
  const options = { ...defaults, ...opts }

  const jsonataMiddlewareAfter = async (request) => {

    const input = request.event.input || {};

    if (request.event.query){
      const {event: {query}} = request;
      const expression = jsonata(query);

      for (const plugin of options.plugins) {
        if (query.includes(plugin.name)) {
          expression.registerFunction(plugin.name, plugin.implementation, plugin.signature);
        }
      }

      input['_config'] = request.event.config || {};

      request.response = await expression.evaluate(input)
    }
  }

  return {
    after: jsonataMiddlewareAfter
  }

}

export default jsonataMiddleware
