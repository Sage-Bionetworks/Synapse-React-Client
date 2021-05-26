import { SynapseClientError } from './SynapseClient'

export function toError(clientError: SynapseClientError): Error {
  return new Error(clientError.reason)
}

export function isSynapseClientError(
  error: string | Error | SynapseClientError,
): error is SynapseClientError {
  return (error as any).status !== undefined
}

export function isError(
  error: string | Error | SynapseClientError,
): error is Error {
  return (error as any).message !== undefined
}
