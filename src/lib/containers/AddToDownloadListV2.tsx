import React from 'react'
import { addFileToDownloadListV2, getEntity } from '../utils/SynapseClient'
import IconSvg from './IconSvg'
import { useSynapseContext } from '../utils/SynapseContext'
import { displayToast } from './ToastMessage'
import { useQueryClient } from 'react-query'
import { Tooltip } from '@mui/material'

export type AddToDownloadListV2Props = {
  entityId: string
  entityVersionNumber?: number
}

const AddToDownloadListV2: React.FunctionComponent<
  AddToDownloadListV2Props
> = props => {
  const { entityId, entityVersionNumber } = props
  const { accessToken } = useSynapseContext()
  const queryClient = useQueryClient()
  if (!accessToken) {
    return <></>
  }
  const addToDownloadListV2 = async () => {
    try {
      await addFileToDownloadListV2(entityId, entityVersionNumber, accessToken)
      // PORTALS-2222: Invalidate to load the accurate results
      queryClient.invalidateQueries(['downloadliststatsv2'])
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
      <Tooltip
        title="Add this file to your Download Cart"
        placement="right"
        enterNextDelay={300}
      >
        <a
          data-testid="AddToDownloadListV2"
          onClick={addToDownloadListV2}
          className="ignoreLink"
        >
          <IconSvg options={{ icon: 'addToCart' }} />
        </a>
      </Tooltip>
    </>
  )
}

export default AddToDownloadListV2
