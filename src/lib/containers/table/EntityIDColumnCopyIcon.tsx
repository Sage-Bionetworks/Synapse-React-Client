import * as React from 'react'
import { useQueryContext } from '../QueryContext'
import { useSynapseContext } from '../../utils/SynapseContext'
import { InteractiveCopyIdsIcon } from '../InteractiveCopyIdsIcon'
import { displayToast } from '../ToastMessage'
import { QueryResultBundle, Row } from '../../utils/synapseTypes'
import { SynapseSpinner } from '../LoadingScreen'
import { SynapseConstants } from '../../utils'
import { getFullQueryTableResults } from '../../utils/SynapseClient'
import { parseEntityIdAndVersionFromSqlStatement } from '../../utils/functions/sqlFunctions'

const EntityIDColumnCopyIcon = () => {
  const synapseContext = useSynapseContext()
  const queryContext = useQueryContext()
  const [isLoading, setIsLoading] = React.useState(false)
  const [idData, setIdData] = React.useState<QueryResultBundle>()

  /**
   * handle copy IDs to clipboard
   */
  const handleCopyIdsToClipboard = () => {
    setIsLoading(true)

    // ask for all pages of data
    const { getLastQueryRequest } = queryContext
    const queryRequestClone = getLastQueryRequest()
    const { sql: oldSql } = queryRequestClone.query
    const { entityId, versionNumber } =
      parseEntityIdAndVersionFromSqlStatement(oldSql)!
    const versionNumberString = versionNumber ? `.${versionNumber}` : ''
    queryRequestClone.partMask = SynapseConstants.BUNDLE_MASK_QUERY_RESULTS
    queryRequestClone.query = {
      sql: `select id from ${entityId}${versionNumberString}`,
    }
    getFullQueryTableResults(queryRequestClone, synapseContext.accessToken)
      .then((data: QueryResultBundle) => {
        setIdData(data)
      })
      .catch((err: any) => {
        console.error(err)
        displayToast('Unable to query for all IDs', 'danger')
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  React.useEffect(() => {
    if (idData) {
      const { rows } = idData.queryResult!.queryResults
      const synIDs = rows
        .map((row: Row) => {
          return `${row.values[0]}`
        })
        .join('\n')
      // https://caniuse.com/mdn-api_clipboard_writetext
      navigator.clipboard.writeText(synIDs).then(() => {
        displayToast('Successfully copied to clipboard')
        setIdData(undefined)
      })
    }
  }, [idData])

  return isLoading ? (
    <SynapseSpinner size={25} />
  ) : (
    <InteractiveCopyIdsIcon
      onCopy={() => {
        handleCopyIdsToClipboard()
      }}
    />
  )
}

export default EntityIDColumnCopyIcon
