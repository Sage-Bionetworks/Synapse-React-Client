import React, { useEffect, useMemo, useState } from 'react'
import { QueryBundleRequest } from '../../../utils/synapseTypes'
import { ProgrammaticInstructionsModal } from '../../ProgrammaticInstructionsModal'
import { useGetQueryResultBundleWithAsyncStatus } from '../../../utils/hooks/SynapseAPI'
import { SynapseConstants } from '../../../utils'

export type ProgrammaticOptionsProps = {
  queryBundleRequest: QueryBundleRequest
  onHide: () => void
}

function ProgrammaticOptions({
  queryBundleRequest,
  onHide,
}: ProgrammaticOptionsProps) {
  const [generatedSql, setGeneratedSql] = useState('...')

  const {
    data: asyncJobStatus,
    isLoading: queryIsLoading,
    isPreviousData: newQueryIsFetching,
  } = useGetQueryResultBundleWithAsyncStatus(
    {
      ...queryBundleRequest,
      partMask: SynapseConstants.BUNDLE_MASK_COMBINED_SQL,
    },
    {
      keepPreviousData: true,
      useErrorBoundary: true,
    },
  )

  const combinedSql = asyncJobStatus?.responseBody?.combinedSql
  const isLoadingNewBundle = queryIsLoading || newQueryIsFetching

  useEffect(() => {
    if (combinedSql && !isLoadingNewBundle) {
      // SWC-5686: The ID column is required by the client, and this column may not have been selected!
      // Change the SQL to "SELECT * ..."
      const indexOfFrom = combinedSql.toUpperCase().indexOf('FROM SYN')
      const selectStarTransformedSql = `SELECT * ${combinedSql.substring(
        indexOfFrom,
      )}`
      setGeneratedSql(selectStarTransformedSql)
    }
  }, [combinedSql, isLoadingNewBundle])

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

export default ProgrammaticOptions
