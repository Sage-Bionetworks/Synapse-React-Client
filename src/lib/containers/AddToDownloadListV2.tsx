import React from 'react'
import { addFileToDownloadListV2, getEntity } from '../utils/SynapseClient'
import IconSvg from './IconSvg'
import { useSynapseContext } from '../utils/SynapseContext'
import { displayToast } from './ToastMessage'
import ReactTooltip from 'react-tooltip'
import { useGetDownloadListStatistics } from '../utils/hooks/SynapseAPI/useGetDownloadListStatistics'

export type AddToDownloadListV2Props = {
  entityId: string
  entityVersionNumber?: number
}

const AddToDownloadListV2: React.FunctionComponent<
  AddToDownloadListV2Props
> = props => {
  const { entityId, entityVersionNumber } = props
  const { accessToken } = useSynapseContext()
  const { refetch } = useGetDownloadListStatistics({
    enabled: !!accessToken,
  })

  if (!accessToken) {
    return <></>
  }
  const addToDownloadListV2 = async () => {
    try {
      const response = await addFileToDownloadListV2(
        entityId,
        entityVersionNumber,
        accessToken,
      )
      // PORTALS-2222: refetch download statistics after items have been added
      if (response.numberOfFilesAdded > 0) {
        refetch()
      }
      const entity = await getEntity(
        accessToken,
        entityId,
        entityVersionNumber ? entityVersionNumber?.toString() : undefined,
      )
      displayToast(
        `${entity.name} was successfully added to your Download Cart.`,
        'success',
      )
    } catch (e) {
      displayToast(
        `Unable to add the file to your Download Cart. ${e}`,
        'danger',
      )
    }
  }

  return (
    <>
      <a
        data-testid="AddToDownloadListV2"
        data-tip="Add this file to your Download Cart"
        data-for={`${entityId}_${entityVersionNumber}_download-list-v2-button`}
        onClick={addToDownloadListV2}
        className="ignoreLink"
      >
        <ReactTooltip
          delayShow={300}
          place="right"
          type="dark"
          effect="solid"
          id={`${entityId}_${entityVersionNumber}_download-list-v2-button`}
        />
        <IconSvg options={{ icon: 'addToCart' }} />
      </a>
    </>
  )
}

export default AddToDownloadListV2
