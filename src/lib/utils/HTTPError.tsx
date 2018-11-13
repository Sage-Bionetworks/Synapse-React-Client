export default class HTTPError extends Error {
    constructor(message: string, ...params: any) {
        super(...params)
        this.message = message
        this.name = 'HTTP'
    }
}
