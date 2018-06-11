export default class HTTPError extends Error {
    constructor(code, message, extras) {
        super(message);
        this.statusCode = code;
    }
}
