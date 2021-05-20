import Cookie from 'universal-cookie'
import { Moment } from 'moment'
import { DATETIME_UTC_COOKIE_KEY } from '../SynapseConstants'

export function formatDate(time: Moment): string {
  const cookies = new Cookie()
  if (cookies.get(DATETIME_UTC_COOKIE_KEY) === 'true') {
    return time.utc().format('M/D/YYYY h:mm A') + ' UTC'
  } else {
    return time.format('M/D/YYYY h:mm A')
  }
}
