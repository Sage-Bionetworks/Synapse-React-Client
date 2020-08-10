import React, { useState, useEffect } from 'react'
import UpSetJS, { extractSets, generateCombinations } from '@upsetjs/react'
import { QueryBundleRequest } from 'lib/utils/synapseTypes'
import { SynapseConstants, SynapseClient } from 'lib/utils'

export type UpsetPlotProps = {
  entityId: string, // table/view entity ID
  sql: string, // first column should contain values, second column should contain a single set value.  ie. SELECT distinct individualID, assay FROM syn20821313
  token?: string
}

const UpsetPlot: React.FunctionComponent<UpsetPlotProps> = ({
  entityId,
  sql,
  token
}) => {
  const [isLoading, setIsLoading] = useState<boolean>()
  const [sets, setSets] = useState<any>()
  const [combinations, setCombinations] = useState<any>()

  useEffect(() => {
    const getPlotData = async () => {
      setIsLoading(true)
  
      const partMask = SynapseConstants.BUNDLE_MASK_QUERY_RESULTS
  
      const queryRequest: QueryBundleRequest = {
        partMask,
        concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
        entityId,
        query: {
          sql
        },
      }
  
      const {
        queryResult
      } = await SynapseClient.getFullQueryTableResults(
        queryRequest,
        token,
        1000  
      )
      // transform query data into plot data, and store.
      // collect all values for each key
      const keyValuesMap={}
      for (const row of queryResult.queryResults.rows) {
        for (let j = 1; j < row.values.length; j += 1) {
          const rowValues: any = row.values
          const key = rowValues[0]
          const newValue = rowValues[j]
          keyValuesMap[key] = keyValuesMap[key] || {}
          keyValuesMap[key].name = key

          keyValuesMap[key].sets = keyValuesMap[key].sets || []
          keyValuesMap[key].sets.push(newValue)
        }
      }
      // now create the expected elems set
      const elems:any[] = Object.values(keyValuesMap)
      
      // const elems:any[] = Array.from(keyValuesMap, (v) => ({ name:v[0], sets:v[1] }));
        // { name: 'A', sets: ['S1', 'S2'] },
        // { name: 'B', sets: ['S1'] },
      const sets = extractSets(elems);
      const combinations = generateCombinations(sets);
  
      setSets(sets)
      setCombinations(combinations)
      setIsLoading(false)
    }
    getPlotData()
  }, [entityId, sql, token])

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {!isLoading && sets && combinations && <UpSetJS sets={sets} combinations={combinations} width={1200} height={500} />}
    </>
  )
}

export default UpsetPlot
