import React, { useState } from 'react'
import {
  QueryBundleRequest,
  QueryResultBundle,
} from '../../../utils/synapseTypes'
import { TransformSqlWithFacetsRequest } from '../../../utils/synapseTypes/Table/TransformSqlWithFacetsRequest'
import useDeepCompareEffect from 'use-deep-compare-effect'
import { getTransformSqlWithFacetsRequest } from '../../../utils/SynapseClient'
import { Modal, ModalBody } from 'react-bootstrap'
import ModalHeader from 'react-bootstrap/ModalHeader'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faQuestionCircle)

type ProgrammaticOptionsProps = {
  queryBundleRequest: QueryBundleRequest
  queryResultBundle: QueryResultBundle
  onHide: Function
}

function ProgrammaticOptions({
  queryBundleRequest,
  queryResultBundle,
  onHide,
}: ProgrammaticOptionsProps) {
  const [generatedSql, setGeneratedSql] = useState('')

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
        setGeneratedSql(res.transformedSql)
      } catch (e) {
        console.error('Error on getTransformSqlWithFacetsRequest ', e)
      }
    }
    getData()
  }, [queryBundleRequest, queryResultBundle])

  return (
    <Modal
      animation={false}
      centered={true}
      show={true}
      onHide={() => onHide()}
      className="ProgrammaticOptions"
    >
      <ModalHeader closeButton>
        <span style={{ color: '#515359', fontSize: '1.5em' }}>
          Download Options
        </span>
      </ModalHeader>
      <ModalBody>
        <p className="ProgrammaticOptions__commandline">
          Command Line Instructions
        </p>
        <p>
          Synapse is built on a number of RESTful web APIs that allow users to
          interact with the system via a number of clients. The
          <a
            className="ProgrammaticOptions__docslink"
            href="https://docs.synapse.org/articles/api_documentation.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Synapse API documentation
          </a>
          is available online.
        </p>
        <div className="ProgrammaticOptions__cli">
          <p> synapse get -q "{generatedSql}" </p>
        </div>
      </ModalBody>
    </Modal>
  )
}

export default ProgrammaticOptions
