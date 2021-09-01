import {
  getWidgetFromPropertyType,
  guessPropertyType,
  PropertyType,
  transformDataFromPropertyType,
} from '../../../../../lib/containers/entity/annotations/AdditionalPropertiesSchemaField'

describe('AdditionalPropertiesSchemaField unit tests', () => {
  describe('guessPropertyType tests', () => {
    it('should return "string" for string properties', () => {
      const data = ['some string', 'some other string']
      expect(guessPropertyType(data)).toBe(PropertyType.STRING)
    })
    it('should return "integer" for integer properties', () => {
      const data = [-1, 0, 1, 2, 3]
      expect(guessPropertyType(data)).toBe(PropertyType.INTEGER)
    })
    it('should return "float" for float properties', () => {
      const data = [1.1, 2.2, 3.3, 4.4, 5] // not all have to be float
      expect(guessPropertyType(data)).toBe(PropertyType.FLOAT)
    })
    it('should return "float" for float properties with NaN', () => {
      const data = [4.4, 'NaN', 53]
      expect(guessPropertyType(data)).toBe(PropertyType.FLOAT)
    })
    it('should return "boolean" for boolean properties', () => {
      const data = [true, false]
      expect(guessPropertyType(data)).toBe(PropertyType.BOOLEAN)
    })
    it('should return "datetime" for datetime properties', () => {
      const data = ['1970-01-01T00:00:00.000Z', '2021-06-09T19:07:11.453Z']
      expect(guessPropertyType(data)).toBe(PropertyType.DATETIME)
    })
  })
  describe('transformDataFromPropertyType tests', () => {
    it('converts strings to numbers', () => {
      const data = ['1', '2', '3']
      expect(
        transformDataFromPropertyType(data, PropertyType.INTEGER),
      ).toEqual([1, 2, 3])
    })

    it('converts numbers to strings', () => {
      const data = [1, 2, 3]
      expect(transformDataFromPropertyType(data, PropertyType.STRING)).toEqual([
        '1',
        '2',
        '3',
      ])
    })

    it('converts integers to floats', () => {
      const data = [1, 2, 3]
      expect(transformDataFromPropertyType(data, PropertyType.FLOAT)).toEqual([
        '1.0',
        '2.0',
        '3.0',
      ])
    })

    it('converts strings to floats', () => {
      const data = ['abc', '3.4', '4', 'NaN']
      expect(4.0).toEqual(4)
      expect(transformDataFromPropertyType(data, PropertyType.FLOAT)).toEqual([
        'NaN',
        3.4,
        '4.0',
        'NaN',
      ])
    })

    it('converts booleans to strings', () => {
      const data = [true, false]
      expect(transformDataFromPropertyType(data, PropertyType.STRING)).toEqual([
        'true',
        'false',
      ])
    })

    it('converts strings to datetimes', () => {
      // Mostly just ensuring that these aren't modified
      const data = ['1970-01-01T00:00:00.000Z', '2021-06-09T19:07:11.453Z']
      expect(
        transformDataFromPropertyType(data, PropertyType.DATETIME),
      ).toEqual(['1970-01-01T00:00:00.000Z', '2021-06-09T19:07:11.453Z'])
    })
  })

  describe('getWidgetFromPropertyType tests', () => {
    it('gets TextWidget for integer', () => {
      expect(getWidgetFromPropertyType(PropertyType.INTEGER)).toBe('TextWidget')
    })

    it('gets TextWidget for float', () => {
      expect(getWidgetFromPropertyType(PropertyType.FLOAT)).toBe('TextWidget')
    })

    it('gets DateTimeWidget for datetime', () => {
      expect(getWidgetFromPropertyType(PropertyType.DATETIME)).toBe(
        'DateTimeWidget',
      )
    })

    it('gets CheckboxWidget for boolean', () => {
      expect(getWidgetFromPropertyType(PropertyType.BOOLEAN)).toBe(
        'CheckboxWidget',
      )
    })

    it('gets TextWidget for string', () => {
      expect(getWidgetFromPropertyType(PropertyType.STRING)).toBe('TextWidget')
    })
  })
})
