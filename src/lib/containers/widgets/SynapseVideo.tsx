import * as React from 'react'
import { useEffect, useState } from 'react'

export type Props = {
  params: any
  wikiId?: string
  synapseId?: string
  token?: string
}

export default function SynapseVideo({
  params,
  wikiId,
  synapseId,
  token,
}: Props) {
  const [video, setVideo] = useState<string>()
  const [videoWidth, setVideoWidth] = useState<string>()
  const [videoHeight, setVideoHeight] = useState<string>()

  useEffect(() => {
    const getVideoId = () => {
      if (params.videoId)
        setVideo(`https://www.youtube.com/embed/${params.videoId}`)
      if (params.vimeoId)
        setVideo(`https://player.vimeo.com/video/${params.vimeoId}`)
      if (params.oggSynapseId) setVideo(params.oggSynapseId)
      if (params.webmSynapseId) setVideo(params.webmSynapseId)
    }
    const getVideoSize = () => {
      if (params.videoHeight) setVideoHeight('100')
      if (params.videoWidth) setVideoWidth('100')
    }
    getVideoId()
    getVideoSize()
  }, [video, params])

  return (
    <div>
      <iframe
        title="video frame"
        src={video}
        width={`${videoWidth}`}
        height={videoHeight}
      ></iframe>
    </div>
  )
}
