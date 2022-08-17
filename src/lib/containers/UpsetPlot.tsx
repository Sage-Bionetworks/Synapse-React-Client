/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useState, useEffect } from 'react'
import UpSetJS, {
  extractSets,
  generateCombinations,
  ISetLike,
  UpSetFontSizes,
  ISetCombinations,
  ISets,
} from '@upsetjs/react'
import { QueryBundleRequest } from '../utils/synapseTypes'
import { SynapseConstants, SynapseClient } from '../utils'
import { SizeMe } from 'react-sizeme'
import getColorPalette from './ColorGradient'
import { parseEntityIdFromSqlStatement } from '../utils/functions/sqlFunctions'
import { ErrorBanner } from './ErrorBanner'
import loadingScreen from './LoadingScreen'
import { Button } from 'react-bootstrap'
import { useSynapseContext } from '../utils/SynapseContext'

export type UpsetPlotProps = {
  sql: string // first column should contain values, second column should contain a single set value.  ie. SELECT distinct individualID, assay FROM syn20821313
  rgbIndex: number // color plot based on portal
  maxBarCount?: number // will show all if not set
  setName?: string // instead of "Set Size"
  combinationName?: string // instead of "Intersection Size"
  height?: number
  summaryLinkText?: string // text for home page link below chart
  summaryLink?: string // url for home page link below chart
}

export type UpsetPlotData = {
  sets: ISets<any>
  combinations: ISetCombinations<any>
}
/**
 * Upset plot.  See https://medium.com/@sgratzl/upset-js-javascript-tutorial-1b84bfd6896d
 * Currently this is driven by a Synapse Table/View, but we may want to alter it to read in the data from a flat file instead.
 */
const UpsetPlot: React.FunctionComponent<UpsetPlotProps> = ({
  sql,
  rgbIndex,
  maxBarCount,
  setName,
  combinationName,
  height = 700,
  summaryLinkText,
  summaryLink,
}) => {
  const { accessToken } = useSynapseContext()
  const [isLoading, setIsLoading] = useState<boolean>()
  const [data, setData] = useState<UpsetPlotData>()
  const [error, setError] = useState<string>()
  const [selection, setSelection] = useState(null as ISetLike<any> | null)

  const { colorPalette } = getColorPalette(rgbIndex, 2)
  const updateFontSizes: UpSetFontSizes = {
    setLabel: '14px',
  }

  useEffect(() => {
    let isCancelled: boolean = false
    const getPlotData = async () => {
      setIsLoading(true)
      try {
        const entityId = parseEntityIdFromSqlStatement(sql)
        const partMask = SynapseConstants.BUNDLE_MASK_QUERY_RESULTS
        const queryRequest: QueryBundleRequest = {
          partMask,
          concreteType:
            'org.sagebionetworks.repo.model.table.QueryBundleRequest',
          entityId,
          query: {
            sql,
          },
        }
        const { queryResult } = await SynapseClient.getFullQueryTableResults(
          queryRequest,
          accessToken,
        )
        // transform query data into plot data, and store.
        // collect all values for each key
        const keyValuesMap = {}
        // keyValuesMap looks like { 'A': {name: 'A', sets: ['S1', 'S2'] }, 'B': { name: 'B', sets: ['S1'] }, ... }
        // It's a little redudant, but makes the next step much easier.

        const caseInsensitiveSetNames = {}
        // caseInsensitiveSetNames looks like { 'RNASEQ': 'rnaSeq', 'NOMe-SEQ': 'NOMe-seq'}.

        for (const row of queryResult?.queryResults.rows ?? []) {
          for (let j = 1; j < row.values.length; j += 1) {
            const rowValues: string[] = row.values as string[]
            if (rowValues.some(value => value === null)) {
              console.warn('Row has null value(s) when no nulls expected')
            }

            const key = rowValues[0]
            let newValue = rowValues[j]
            keyValuesMap[key] = keyValuesMap[key] || {}
            keyValuesMap[key].name = key

            keyValuesMap[key].sets = keyValuesMap[key].sets || []
            const found = keyValuesMap[key].sets.find((v: any) => v == newValue)
            if (!found && newValue) {
              if (caseInsensitiveSetNames[newValue.toUpperCase()]) {
                newValue = caseInsensitiveSetNames[newValue.toUpperCase()]
              } else {
                caseInsensitiveSetNames[newValue.toUpperCase()] = newValue
              }
              keyValuesMap[key].sets.push(newValue)
            }
          }
        }
        // now create the expected elems set
        const elems: any[] = Object.values(keyValuesMap)
        // elems looks like [{ name: 'A', sets: ['S1', 'S2'] }, { name: 'B', sets: ['S1'] }, ...]
        const sets = extractSets(elems)
        // PORTALS-1673: sort by assay name
        const sortedSets = (sets as any).sort(
          (a: { name: string }, b: { name: string }) => {
            return ('' + b.name).localeCompare(a.name)
          },
        )

        const combinations = generateCombinations(sortedSets, {
          type: 'intersection',
          min: 1,
          limit: maxBarCount,
          order: 'cardinality:desc',
        })
        if (!isCancelled) {
          setData({ sets, combinations })
          setIsLoading(false)
        }
      } catch (err) {
        if (!isCancelled) {
          setIsLoading(false)
          let errorMessage = err['reason']
          if (!errorMessage) {
            console.error(err)
            errorMessage = 'Error retrieving data'
          }
          setError(errorMessage)
        }
      }
    }
    getPlotData()
    return () => {
      isCancelled = true
    }
  }, [sql, accessToken])

  return (
    <>
      {isLoading && loadingScreen}
      {!isLoading && data && (
        <SizeMe>
          {({ size }) => (
            <div className="UpsetPlot bootstrap-4-backport">
              <UpSetJS
                sets={data.sets}
                combinations={data.combinations}
                width={size.width!}
                height={height}
                onHover={setSelection}
                // onClick={setSelection}
                selection={selection}
                color={colorPalette[0]}
                selectionColor={colorPalette[0]}
                hasSelectionOpacity={0.3}
                // alternatingBackgroundColor={false}
                setName={setName?.toUpperCase()}
                combinationName={combinationName?.toUpperCase()}
                fontFamily="Lato, sans-serif"
                fontSizes={updateFontSizes}
                exportButtons={false}
                notMemberColor="transparent"
              />
              {summaryLink && summaryLinkText && (
                <div className="UpsetPlot__summary">
                  <Button
                    variant="secondary"
                    size="lg"
                    className="pill"
                    href={summaryLink}
                  >
                    {summaryLinkText}
                  </Button>
                </div>
              )}
            </div>
          )}
        </SizeMe>
      )}
      <ErrorBanner error={error} />
    </>
  )
}

export default UpsetPlot
