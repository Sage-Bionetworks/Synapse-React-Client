import getSchemaData from './services/getSchemaData'
import { replaceContext, replaceData } from './state/DataState'
import { setLoading } from './state/LoadingState'

interface DataProviderProps {
  url: string
}

export default function DataProvider({ url }: DataProviderProps): null {
  getSchemaData(url).then(data => {
    setLoading(true)
    replaceData(data)
    replaceContext(data)
  })
  return null
}
