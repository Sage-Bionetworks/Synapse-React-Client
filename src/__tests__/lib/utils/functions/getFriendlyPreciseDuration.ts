import {
  getFriendlyPreciseDuration,
} from '../../../../lib/utils/functions/getFriendlyPreciseDuration'

describe('getFriendlyPreciseDuration', () => {
  it('should get the friendly version of the given time/units', () => {
    expect(getFriendlyPreciseDuration(undefined, 'week')).toBe('')
    expect(getFriendlyPreciseDuration('', 'second')).toBe('')
    expect(getFriendlyPreciseDuration('80', 'second')).toBe('1 minute 20 seconds')
    expect(getFriendlyPreciseDuration('60', 'minute')).toBe('1 hour')
    expect(getFriendlyPreciseDuration('25', 'hour')).toBe('1 day 1 hour')
    expect(getFriendlyPreciseDuration('400', 'day')).toBe('1 year 1 month 4 days')
    expect(getFriendlyPreciseDuration('4', 'week')).toBe('28 days')
    expect(getFriendlyPreciseDuration('6', 'week')).toBe('1 month 11 days')
    expect(getFriendlyPreciseDuration('13', 'month')).toBe('1 year 1 month')
  })
})

