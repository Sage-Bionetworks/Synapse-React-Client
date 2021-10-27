import moment, { DurationInputArg1, DurationInputArg2 } from "moment"

const getPart = (n: number, unitDescriptor: string) => {
  if (n > 0) {
    return `${n} ${unitDescriptor}${n > 1 ? 's' : ''} `
  }
  return ''
}

/**
 * Return a "humanized" version of the given time, where the time given is in timeUnits.
 * moment.humanize() precision is unsatisfactory for our purposes.
 */
export const getFriendlyPreciseDuration = (time: DurationInputArg1, timeUnits: DurationInputArg2):string => {
  const duration = moment.duration(time, timeUnits)
  const years = duration.years()
  const months = duration.months() % 12
  const days = duration.days() % 31
  const hours = duration.hours() % 24
  const minutes = duration.minutes() % 60
  const seconds = duration.seconds() % 60
  return `${getPart(years, 'year')}${getPart(months, 'month')}${getPart(days, 'day')}${getPart(hours, 'hour')}${getPart(minutes, 'minute')}${getPart(seconds, 'second')}`.trim()
}
