export class GenericError extends Error {
  constructor(name, message) {
    super(message);
    this.name = name;
  }
}
