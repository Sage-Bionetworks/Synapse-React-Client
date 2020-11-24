import { getSchemaData } from './services/getSchemaData'
import { replaceData, resetDepsData, stateData } from './state/DataState'

interface DataProviderProps {
  url: string
}

export default function DataProvider({ url }: DataProviderProps): null {
  getSchemaData(url).then(data => {
    replaceData(data)
    resetDepsData({ data: stateData() })
  })
  return null
}
