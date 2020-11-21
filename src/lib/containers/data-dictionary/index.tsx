import React, { ReactElement } from 'react'
import { Provider } from 'hooks-for-redux'
import DataDictionaryViewer from './DataDictionaryViewer'
import DataProvider from './DataProvider'

import './DataDictionary.scss'

export interface DataDictionaryProps {
  title: string
  url: string
}

export default function DataDictionary({
  title,
  url,
}: DataDictionaryProps): ReactElement {
  return (
    <Provider>
      <DataProvider url={url} />
      <DataDictionaryViewer title={title} />
    </Provider>
  )
}
