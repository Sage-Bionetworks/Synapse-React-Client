import React, { useState } from 'react'
import ReactTooltip from 'react-tooltip'
import IconSvg from '../IconSvg'
import { ProgrammaticInstructionsModal } from '../ProgrammaticInstructionsModal'
import { TOOLTIP_DELAY_SHOW } from '../table/SynapseTableConstants'

type DirectProgrammaticDownloadProps = {
  entityId: string
  version?: number
}

function DirectProgrammaticDownload({
  entityId,
  version
}: DirectProgrammaticDownloadProps) {
  const [isShowingModal, setIsShowingModal] = useState<boolean>(false)

  const rCode = `library(synapser)
synLogin('username','password')

# Obtain a pointer and download the data
${entityId} <- synGet(entity='${entityId}'${version ? `, version=${version}` : ''} ) `

  const pythonCode = `import synapseclient

syn = synapseclient.Synapse()
syn.login('synapse_username','password')

# Obtain a pointer and download the data
${entityId} = syn.get(entity='${entityId}'${version ? `, version=${version}` : ''} )

# Get the path to the local copy of the data file
filepath = ${entityId}.path`

  const cliCode = `synapse get ${entityId} ${version ? `--version ${version}` : ''}`

  return (
    <>
      <span
          data-for={`${entityId}-direct-programmatic-download-tooltip`}
          data-tip='Programmatic download options'>
        <ReactTooltip
          delayShow={TOOLTIP_DELAY_SHOW}
          place="left"
          type="dark"
          effect="solid"
          id={`${entityId}-direct-programmatic-download-tooltip`}
        />
        <button className={'btn-download-icon'} onClick={() => setIsShowingModal(true)}>
          <IconSvg options={{ icon: 'code' }} />
        </button>
      </span>
      {isShowingModal && <ProgrammaticInstructionsModal
        show={true}
        onClose={() => setIsShowingModal(false)}
        title='Download Programmatically'
        cliCode={cliCode}
        rCode={rCode}
        pythonCode={pythonCode}
      />}
    </>
  )
}

export default DirectProgrammaticDownload
