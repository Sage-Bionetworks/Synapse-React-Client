import React from 'react'
import {
  AddBatchOfFilesToDownloadListResponse,
} from '../utils/synapseTypes/DownloadListV2/AddBatchOfFilesToDownloadListResponse'
import {
  addFileToDownloadListV2,
} from '../utils/SynapseClient'
import IconSvg from './IconSvg'

export type AddToDownloadListV2Props = {
  token?: string
  entityId: string
  entityVersionNumber?: number
}

const AddToDownloadListV2: React.FunctionComponent<AddToDownloadListV2Props> = (props) => {

  const {token, entityId, entityVersionNumber} = props
  const addToDownloadListV2 = async () => {
    try {
      const result:AddBatchOfFilesToDownloadListResponse = await addFileToDownloadListV2(entityId, entityVersionNumber, token)
      if (result.numberOfFilesAdded === 1)
        console.log(`Successfully added ${entityId} (version=${entityVersionNumber}) to the Download List v2`)
      else
        console.log(`Adding to the Download List v2 resulted in ${result.numberOfFilesAdded} files being added.`)
    } catch (e) {
      console.log("Failed to add to the Download List v2: ", e)
    }
  }

  return (
    <span className="SRC-primary-text-color">
      <button className={"btn-download-icon"} onClick={addToDownloadListV2}>
        <IconSvg options={{icon: "addToCart"}} />
      </button>
    </span>
  )
}

export default AddToDownloadListV2