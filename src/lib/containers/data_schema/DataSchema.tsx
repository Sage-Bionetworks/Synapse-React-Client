import React, { ReactElement } from 'react'
import { Provider } from 'hooks-for-redux'
import DataSchemaViewer from './DataSchemaViewer'
import DataProvider from './DataProvider'

import './DataSchema.scss'

export interface DataSchemaProps {
  title: string
  url: string
}

export default function DataSchema({
  title,
  url,
}: DataSchemaProps): ReactElement {
  return (
    <Provider>
      <DataProvider url={url} />
      <DataSchemaViewer title={title} />
    </Provider>
  )
}
