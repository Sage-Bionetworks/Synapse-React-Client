import moment, { DurationInputArg1, DurationInputArg2 } from "moment"

const getPart = (n: number, unitDescriptor: string) => {
  if (n > 0) {
    return `${n} ${unitDescriptor}${n > 1 ? 's' : ''} `
  }
  return ''
}

export const getFriendlyPreciseDuration = (time: DurationInputArg1, timeUnits: DurationInputArg2):string => {
  const duration = moment.duration(time, timeUnits)
  const years = duration.years()
  const months = duration.months()
  const days = duration.days()
  const hours = duration.hours()
  const minutes = duration.minutes()
  const seconds = duration.seconds()
  const milliseconds = duration.milliseconds()
  return `${getPart(years, 'year')}${getPart(months, 'month')}${getPart(days, 'day')}${getPart(hours, 'hour')}${getPart(minutes, 'minute')}${getPart(seconds, 'second')}${getPart(milliseconds, 'millisecond')}`
}
