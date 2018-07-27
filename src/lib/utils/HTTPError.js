export default class HTTPError extends Error {
    constructor(message, ...params) {
        super(...params)
        this.message = message
        this.name = 'HTTP'
    }
}