import React, { useState } from 'react'
import {
  QueryBundleRequest,
  QueryResultBundle,
} from '../../../utils/synapseTypes'
import { TransformSqlWithFacetsRequest } from '../../../utils/synapseTypes/Table/TransformSqlWithFacetsRequest'
import useDeepCompareEffect from 'use-deep-compare-effect'
import { getTransformSqlWithFacetsRequest } from '../../../utils/SynapseClient'
import { Modal, ModalBody, Button } from 'react-bootstrap'
import ModalHeader from 'react-bootstrap/ModalHeader'

export enum ProgrammaticOptionsTabs {
  COMMAND_LINE = "Command Line",
  R = "R",
  PYTHON = "Python",
}


type ProgrammaticOptionsProps = {
  queryBundleRequest: QueryBundleRequest
  queryResultBundle: QueryResultBundle
  onHide: () => void
}

function ProgrammaticOptions({
  queryBundleRequest,
  queryResultBundle,
  onHide,
}: ProgrammaticOptionsProps) {
  const [generatedSql, setGeneratedSql] = useState('')
  const [currentTab, setCurrentTab] = useState<ProgrammaticOptionsTabs>(ProgrammaticOptionsTabs.COMMAND_LINE)
  useDeepCompareEffect(() => {
    const getData = async () => {
      const { query } = queryBundleRequest
      const { sql, selectedFacets = [] } = query
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
        schema: columnModels!,
      }

      try {
        const res = await getTransformSqlWithFacetsRequest(
          transformSqlWithFacetsRequest,
        )
        // SWC-5686: The ID column is required by the client, and this column may not have been selected!
        // Change the SQL to "SELECT * ..."
        const indexOfFrom = res.transformedSql.toUpperCase().indexOf('FROM SYN')
        const selectStarTransformedSql = `SELECT * ${res.transformedSql.substring(indexOfFrom)}`
        setGeneratedSql(selectStarTransformedSql.replace(/"/g, '\\"'))
      } catch (e) {
        console.error('Error on getTransformSqlWithFacetsRequest ', e)
      }
    }
    getData()
  }, [queryBundleRequest, queryResultBundle])

  const installationInstructions = <p>Installation instructions are available at our
    <a
      className="ProgrammaticOptions__docslink"
      href="https://help.synapse.org/docs/Installing-Synapse-API-Clients.1985249668.html"
      target="_blank"
      rel="noopener noreferrer"
    >
      {' '}
      Synapse API Documentation Site
    </a>.</p>

  return (
    <Modal
      animation={false}
      show={true}
      onHide={() => onHide()}
      className="bootstrap-4-backport ProgrammaticOptions"
      size="lg"
    >
      <ModalHeader closeButton>
        <Modal.Title>Download Programmatically</Modal.Title>
      </ModalHeader>
      <ModalBody>
        <div className="Tabs">
          {Object.keys(ProgrammaticOptionsTabs).map((keyName: string) => {
            return (
              <div
                className="Tab"
                role="tab"
                key={keyName}
                onClick={e => {
                  e.stopPropagation()
                  setCurrentTab(ProgrammaticOptionsTabs[keyName])
                }}
                aria-selected={ProgrammaticOptionsTabs[keyName] === currentTab}
              >
                {ProgrammaticOptionsTabs[keyName]}
              </div>
            )
          })}
        </div>
        <div className="TabContent">
          {currentTab === ProgrammaticOptionsTabs.COMMAND_LINE && (
            <>
              <p>
                This command line code will download Synapse files AND file annotations to your working directory.
              </p>
              {installationInstructions}
              <pre> synapse get -q "{generatedSql}" </pre>
            </>)}
          {currentTab === ProgrammaticOptionsTabs.R && (
            <>
              <p>
                This R code will download file annotations only. Use synGet{'()'} to loop over the list of Synapse IDs from the file annotations to download files.
              </p>
              {installationInstructions}
              <pre>
                query {'<-'} synTableQuery("{generatedSql}"){'\n'}
                read.table(query$filepath, sep = ",")
              </pre>
            </>)}
          {currentTab === ProgrammaticOptionsTabs.PYTHON && (
            <>
              <p>
                This Python code will download file annotations only. Use syn.get to loop over the list of Synapse IDs from the file annotations to download files.
              </p>
              {installationInstructions}
              <pre>
                  query = syn.tableQuery("{generatedSql}"){'\n'}
                  query.asDataFrame()
              </pre>
            </>)}
        </div>
      </ModalBody>
      <Modal.Footer>
        <div className="ButtonContainer">
          <div className="Spacer" />
          <Button
            variant="primary"
            onClick={() => onHide()}
          >
            Got it
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  )
}

export default ProgrammaticOptions
