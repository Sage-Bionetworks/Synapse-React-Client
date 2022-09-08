import React, { useMemo, useState } from 'react'
import {
  QueryBundleRequest,
  QueryResultBundle,
} from '../../../utils/synapseTypes'
import { TransformSqlWithFacetsRequest } from '../../../utils/synapseTypes/Table/TransformSqlWithFacetsRequest'
import useDeepCompareEffect from 'use-deep-compare-effect'
import { getTransformSqlWithFacetsRequest } from '../../../utils/SynapseClient'
import { ProgrammaticInstructionsModal } from '../../ProgrammaticInstructionsModal'

type ProgrammaticOptionsProps = {
  queryBundleRequest: QueryBundleRequest
  queryResultBundle: QueryResultBundle
  onHide: () => void
}

function ProgrammaticTableDownload({
  queryBundleRequest,
  queryResultBundle,
  onHide,
}: ProgrammaticOptionsProps) {
  const [generatedSql, setGeneratedSql] = useState('')
  useDeepCompareEffect(() => {
    const getData = async () => {
      const { query } = queryBundleRequest
      const { sql, selectedFacets = [], additionalFilters = [] } = query
      const { columnModels } = queryResultBundle
      if (!columnModels) {
        console.error(
          'Column Models must be included to complete transform sql request',
        )
      }
      const transformSqlWithFacetsRequest: TransformSqlWithFacetsRequest = {
        concreteType:
          'org.sagebionetworks.repo.model.table.TransformSqlWithFacetsRequest',
        sqlToTransform: sql,
        selectedFacets,
        additionalFilters,
        schema: columnModels!,
      }

      try {
        const res = await getTransformSqlWithFacetsRequest(
          transformSqlWithFacetsRequest,
        )
        // SWC-5686: The ID column is required by the client, and this column may not have been selected!
        // Change the SQL to "SELECT * ..."
        const indexOfFrom = res.transformedSql.toUpperCase().indexOf('FROM SYN')
        const selectStarTransformedSql = `SELECT * ${res.transformedSql.substring(
          indexOfFrom,
        )}`
        setGeneratedSql(selectStarTransformedSql)
      } catch (e) {
        console.error('Error on getTransformSqlWithFacetsRequest ', e)
      }
    }
    getData()
  }, [queryBundleRequest, queryResultBundle])

  // Replace quotation marks with escaped quotations. For CLI, also escape backticks.
  const commandLineSql = useMemo(
    () => generatedSql.replace(/(["`])/g, '\\$1'),
    [generatedSql],
  )

  const clientSql = useMemo(
    () => generatedSql.replace(/"/g, '\\"'),
    [generatedSql],
  )

  return (
    <ProgrammaticInstructionsModal
      show={true}
      onClose={onHide}
      title="Download Programmatically"
      cliNotes={
        <>
          This command line code will download Synapse files AND file
          annotations to your working directory.
        </>
      }
      cliCode={`synapse get -q "${commandLineSql}"`}
      rNotes={
        <>
          This R code will download file annotations only. Use{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://help.synapse.org/docs/Get-Started-with-Downloading-Data.2004254837.html#GetStartedwithDownloadingData-DownloadingFiles"
          >
            synGet{'()'}
          </a>{' '}
          to loop over the list of Synapse IDs from the file annotations to
          download files.
        </>
      }
      rCode={`query ${'<-'} synTableQuery("${clientSql}")${'\n'}read.table(query$filepath, sep = ",")`}
      pythonNotes={
        <>
          This Python code will download file annotations only. Use{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://help.synapse.org/docs/Get-Started-with-Downloading-Data.2004254837.html#GetStartedwithDownloadingData-DownloadingFiles"
          >
            syn.get
          </a>{' '}
          to loop over the list of Synapse IDs from the file annotations to
          download files.
        </>
      }
      pythonCode={`query = syn.tableQuery("${clientSql}")${'\n'}query.asDataFrame()`}
    />
  )
}

export default ProgrammaticTableDownload
