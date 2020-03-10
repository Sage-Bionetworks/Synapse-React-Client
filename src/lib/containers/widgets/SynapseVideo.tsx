import * as React from 'react'
import { useEffect, useState } from 'react'
import { getEntity, getFiles } from '../../utils/SynapseClient'
import {
  FileEntity,
  FileHandleAssociateType,
  FileHandleAssociation,
  BatchFileRequest,
  BatchFileResult,
} from '../../utils/synapseTypes'

export type Props = {
  params: any
  token?: string
}

export default function SynapseVideo({ params, token }: Props) {
  const [video, setVideo] = useState<string>()
  const [videoUrl, setVideoUrl] = useState<string>()

  const videoWidth = params.width ?? ''
  const videoHeight = params.height ?? ''
  useEffect(() => {
    const getVideo = () => {
      if (params.videoId)
        setVideo(`https://www.youtube.com/embed/${params.videoId}`)
      else if (params.vimeoId)
        setVideo(`https://player.vimeo.com/video/${params.vimeoId}`)
      else {
        const videoKey =
          params.oggSynapseId || params.mp4SynapseId || params.webmSynapseId

        getEntity<FileEntity>(token, videoKey).then((data: FileEntity) => {
          const fileHandleAssociationList: FileHandleAssociation[] = [
            {
              associateObjectId: videoKey,
              associateObjectType: FileHandleAssociateType.FileEntity,
              fileHandleId: data.dataFileHandleId,
            },
          ]
          getSynapseFiles(fileHandleAssociationList, data.dataFileHandleId)
        })
      }
    }

    const getSynapseFiles = (
      fileHandleAssociationList: FileHandleAssociation[],
      id: string,
    ) => {
      const request: BatchFileRequest = {
        includeFileHandles: false,
        includePreSignedURLs: true,
        includePreviewPreSignedURLs: false,
        requestedFiles: fileHandleAssociationList,
      }

      getFiles(request, token)
        .then((data: BatchFileResult) => {
          const { preSignedURL } = data.requestedFiles.filter(
            el => el.fileHandleId === id,
          )[0]
          setVideoUrl(preSignedURL)
        })
        .catch(err => {
          console.error('Error on getting video ', err)
        })
    }
    getVideo()
  }, [video, params, token, videoHeight, videoWidth])

  const RenderVideo = () => {
    return (
      <div>
        {videoUrl ? (
          <video
            controls
            src={videoUrl}
            width={videoWidth}
            height={videoHeight}
          >
            It does not support the HTML5 Video element.
          </video>
        ) : (
          <iframe
            title="video frame"
            src={video}
            width={videoWidth}
            height={videoHeight}
          ></iframe>
        )}
      </div>
    )
  }
  console.log('3')
  return (
    <div>
      {token ? (
        <RenderVideo />
      ) : (
        <p>You will need to sign in for access to that resource.</p>
      )}
    </div>
  )
}
