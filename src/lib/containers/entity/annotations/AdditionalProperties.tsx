import React, { useEffect } from 'react'
import { useState } from 'react'
import {
  AnnotationsValue,
  AnnotationsValueType,
} from '../../../utils/synapseTypes'
import { Col, Form, Row } from 'react-bootstrap'

export type AdditionalPropertiesProps = {
  annotations: { [key: string]: AnnotationsValue }
  setAnnotations: React.Dispatch<
    React.SetStateAction<{
      [key: string]: AnnotationsValue
    }>
  >
}

/**
 * react-jsonschema-form supports 'additionalProperties', but isn't compatible with
 * specifying the AnnotationType (which is Synapse-specific). This component allows
 * users to add annotations with a specified Synapse AnnotationType
 */
export const AdditionalProperties: React.FC<AdditionalPropertiesProps> = ({
  annotations,
  setAnnotations,
}: AdditionalPropertiesProps) => {
  return (
    <>
      <div>
        {Object.entries(annotations).map(([key, value]) => {
          return (
            <AdditionalProperty
              key={key}
              annotationsKey={key}
              annotationsValue={value}
            ></AdditionalProperty>
          )
        })}
      </div>
      <button
        onClick={() => {
          setAnnotations(annos => {
            return {
              ...annos,
              newKey: { type: AnnotationsValueType.STRING, value: [''] },
            }
          })
        }}
      >
        +
      </button>
    </>
  )
}

type AdditionalPropertyProps = {
  annotationsKey?: string
  setAnnotationsKey?: (newKey: string) => void
  annotationsValue?: AnnotationsValue
}

/**
 * An individual property or field
 */
const AdditionalProperty: React.FC<AdditionalPropertyProps> = ({
  annotationsKey,
  setAnnotationsKey,
  annotationsValue,
}: AdditionalPropertyProps) => {
  const [key, setKey] = useState(annotationsKey ?? '')
  const [type, setType] = useState(
    annotationsValue?.type ?? AnnotationsValueType.STRING,
  )
  const [value, setValue] = useState<string[] | number[]>(
    annotationsValue?.value ?? [''],
  )

  useEffect(() => {
    if (setAnnotationsKey) {
      setAnnotationsKey(key)
    }
  }, [key])

  return (
    <div>
      {/* For each value after the first, we need a new row. The key is only in the first row */}
      <div>
        <Form.Group>
          <Form.Label>Key</Form.Label>
          <Form.Control value={key} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Type</Form.Label>
          <Form.Control
            as="select"
            value={type}
            onChange={e => setType(e.target.value)}
          >
            {Object.keys(AnnotationsValueType).map(type => {
              return <option key={type}>{type}</option>
            })}
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Value</Form.Label>
          <Form.Control
            as="select"
            value={value[0]}
            onChange={e =>
              setValue(value => {
                value[0] = e.target.value
              })
            }
          >
            {Object.keys(AnnotationsValueType).map(type => {
              return <option key={type}>{type}</option>
            })}
          </Form.Control>
        </Form.Group>
        {/**
         * If it's multivalued, remove the row.
         * If it's not, remove the kety
         */}
        <div>Multivalued</div>
        <div
          onClick={() => {
            setValue(valueArray => {
              if (
                type === AnnotationsValueType.STRING ||
                type === AnnotationsValueType.TIMESTAMP_MS
              ) {
                return (valueArray as string[]).concat('')
              } else {
                return (valueArray as number[]).concat(0)
              }
            })
          }}
        >
          Add Button
        </div>
      </div>
      {value.map((value, index) => {
        return (
          <Form.Group key={`${index}`}>
            <Form.Label>Value</Form.Label>
            <Form.Control value={value}></Form.Control>
          </Form.Group>
        )
      })}
    </div>
  )
}
