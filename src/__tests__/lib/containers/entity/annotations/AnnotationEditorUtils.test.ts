import { AjvError } from '@rjsf/core'
import {
  dropNullishArrayValues,
  getFriendlyPropertyName,
  getTransformErrors,
} from '../../../../../lib/containers/entity/annotations/AnnotationEditorUtils'
import { FILE_ENTITY_CONCRETE_TYPE_VALUE } from '../../../../../lib/utils/synapseTypes'

describe('AnnotationEditorUtils tests', () => {
  describe('dropNullishArrayValues', () => {
    it('will remove an empty array from the formData', () => {
      const formData = {
        array: [],
      }
      const expected = {}
      expect(dropNullishArrayValues(formData)).toEqual(expected)
    })
    it('will remove nullish values from an array', () => {
      const formData = {
        array: [1, null, 2, undefined, 3],
      }
      const expected = { array: [1, 2, 3] }
      expect(dropNullishArrayValues(formData)).toEqual(expected)
    })
    it('will remove an array containing only nullish values from an array', () => {
      const formData = {
        array: [null, undefined],
      }
      const expected = {}
      expect(dropNullishArrayValues(formData)).toEqual(expected)
    })
  })

  describe('getFriendlyPropertyName', () => {
    it('strips the leading period from a schema-defined property', () => {
      const error = {
        property: '.study[0]',
      }

      const expected = 'study[0]'

      expect(getFriendlyPropertyName(error)).toEqual(expected)
    })
    it('parses additionalProperties from an error', () => {
      const error = {
        property: "['myProperty']",
      }

      const expected = 'myProperty'

      expect(getFriendlyPropertyName(error)).toEqual(expected)
    })
  })

  describe('transformErrors', () => {
    it('combines errors caused by an enumeration defined using anyOf', () => {
      const transformErrors = getTransformErrors()
      const errors: AjvError[] = [
        {
          name: 'type',
          property: '.study[0]',
          message: 'should be string',
          params: { type: 'string' },
          stack: '.study[0] should be string',
        },
        {
          name: 'const',
          property: '.study[0]',
          message: 'should be equal to constant',
          params: { allowedValue: 'VMC' },
          stack: '.study[0] should be equal to constant',
        },
        {
          name: 'const',
          property: '.study[0]',
          message: 'should be equal to constant',
          params: { allowedValue: 'WGBS Pilot' },
          stack: '.study[0] should be equal to constant',
        },
        {
          name: 'const',
          property: '.study[0]',
          message: 'should be equal to constant',
          params: { allowedValue: 'Yale-ASD' },
          stack: '.study[0] should be equal to constant',
        },
        {
          name: 'anyOf',
          property: '.study[0]',
          message: 'should match some schema in anyOf',
          params: {},
          stack: '.study[0] should match some schema in anyOf',
        },
      ]
      const expected = expect.arrayContaining([
        expect.objectContaining({
          message: 'should be equal to one of the allowed values',
        }),
      ])

      expect(transformErrors(errors)).toEqual(expected)
    })

    it('returns a custom message when using a key that collides with a reserved property', () => {
      const transformErrors = getTransformErrors(
        FILE_ENTITY_CONCRETE_TYPE_VALUE,
      )
      const errors: AjvError[] = [
        {
          name: 'not',
          property: "['dataFileHandleId']",
          message: 'should NOT be valid',
          params: {},
          stack: "['dataFileHandleId'] should NOT be valid",
        },
      ]

      const expected = expect.arrayContaining([
        expect.objectContaining({
          message:
            '"dataFileHandleId" is a reserved internal key and cannot be used.',
        }),
      ])

      expect(transformErrors(errors)).toEqual(expected)
    })
  })
})
