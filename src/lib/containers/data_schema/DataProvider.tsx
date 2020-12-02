import { getSchemaData } from './services/getSchemaData'
import { replaceData } from './state/DataState'

interface DataProviderProps {
  url: string
}

export default function DataProvider({ url }: DataProviderProps): null {
  getSchemaData(url).then(data => replaceData(data))
  return null
}
