import { Moment } from 'moment'
import { SynapseClient } from '..'

export function formatDate(time: Moment): string {
  if (SynapseClient.getUseUtcTimeFromCookie()) {
    return time.utc().format('M/D/YYYY h:mm A') + ' UTC'
  } else {
    return time.format('M/D/YYYY h:mm A')
  }
}
