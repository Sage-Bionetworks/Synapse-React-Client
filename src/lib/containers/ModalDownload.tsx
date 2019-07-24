import * as React from 'react'
import { QueryBundleRequest } from '../utils/jsonResponses/Table/QueryBundleRequest'
import Form, { UiSchema, IChangeEvent } from 'react-jsonschema-form'
import { JSONSchema6 } from 'json-schema';

export type ModalDownloadState = {
  isLoading: boolean
  step: number
}

export type ModalDownloadProps = {
  queryRequest: QueryBundleRequest
}

const stepOneFormSchema: JSONSchema6 = {
  title: 'Download query results',
  type: 'object',
  properties: {
    'File Type'  : {
      type: "boolean",
      oneOf: [
        {
          "const": true,
          "title": "Comma Separated Values (CSV)"
        },
        {
          "const": false,
          "title": "Tab Separated Values (TSV)"
        }
      ]
    },
    Content : {
      type: "array",
      title: 'Content',
      items: {
        type: 'string',
        enum: ["First line is the columns names.", "Include row metadata (Row Id and Row Version)."],
      },
      "uniqueItems": true
    }
  }
}

const stepOneFormUISchema: UiSchema = {
  'File Type': {
    "ui:widget": "radio"
  },
  Content: {
    'ui:widget': 'checkboxes'
  }
}

const formSchemaArray = [stepOneFormSchema]
const formSchemaUIArray = [stepOneFormUISchema]

export default class ModalDownload extends React.Component<ModalDownloadProps, ModalDownloadState> {

  constructor(props: ModalDownloadProps) {
    super(props)
    this.state = {
      isLoading: false,
      step: 0
    }
  }

  componentDidMount() {
    console.log('mounted')
  }

  handleSubmit = (event: IChangeEvent ) => {
    console.log(event)
  }

  render() {
    return (
      <Form
        schema={formSchemaArray[this.state.step]}
        uiSchema={formSchemaUIArray[this.state.step]}
        onSubmit={this.handleSubmit}
      >
        <button type="submit"> Next </button>
      </Form>
    )
  }

}