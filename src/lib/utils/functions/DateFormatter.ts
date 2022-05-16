import { Moment } from 'moment'
import { SynapseClient } from '..'

export function formatDate(
  time: Moment,
  pattern: string = 'M/D/YYYY h:mm A',
): string {
  if (SynapseClient.getUseUtcTimeFromCookie()) {
    return time.utc().format(pattern) + ' UTC'
  } else {
    return time.format(pattern)
  }
}
