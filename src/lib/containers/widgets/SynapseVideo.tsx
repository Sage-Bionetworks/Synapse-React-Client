import * as React from 'react'
import { useEffect, useState } from 'react'
import { getEntity, getFiles, isSignedIn } from '../../utils/SynapseClient'
import {
  FileEntity,
  FileHandleAssociateType,
  FileHandleAssociation,
  BatchFileRequest,
  BatchFileResult,
} from '../../utils/synapseTypes'
import { SynapseConstants } from '../../utils/'

export type Props = {
  params: any
}

export default function SynapseVideo({ params }: Props) {
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

        getEntity<FileEntity>(videoKey).then((data: FileEntity) => {
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

      getFiles(request)
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
  }, [video, params, videoHeight, videoWidth])

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
  return (
    <div>
      {isSignedIn() ? (
        <RenderVideo />
      ) : (
        <p>
          You will need to
          <button
            className={`${SynapseConstants.SRC_SIGN_IN_CLASS} sign-in-btn default
                `}
          >
            Sign in
          </button>
          in for access to that resource.
        </p>
      )}
    </div>
  )
}
