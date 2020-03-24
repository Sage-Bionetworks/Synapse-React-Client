import { DownloadList } from '../synapseTypes'

export const DOWNLOAD_LIST_CHANGE_EVENT = 'DOWNLOAD_LIST_UPDATED_EVENT'

export const dispatchDownloadListChangeEvent = (
  downloadList: DownloadList | undefined,
) => {
  const downloadEvent = new CustomEvent(DOWNLOAD_LIST_CHANGE_EVENT, {
    detail: downloadList,
  })
  console.log('dispatched event')
  document.dispatchEvent(downloadEvent)
}
