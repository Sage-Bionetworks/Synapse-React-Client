import { getSchemaData } from './services/getSchemaData'
import { replaceContext, replaceData } from './state/DataState'

interface DataProviderProps {
  url: string
}

export default function DataProvider({ url }: DataProviderProps): null {
  getSchemaData(url).then(data => {
    replaceData(data)
    replaceContext(data)
  })
  return null
}
