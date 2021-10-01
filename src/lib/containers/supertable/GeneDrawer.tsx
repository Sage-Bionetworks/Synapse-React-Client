import * as React from 'react'
import CloseSharpIcon from '@material-ui/icons/CloseSharp';
import { Chip } from '@material-ui/core'
import GeneTabPanel from './GeneTabPanel'

export type GeneDrawerProps = {
  geneId: string
  onHideCallback: () => void
}


const GeneDrawer: React.FC<GeneDrawerProps> = (props) => {
  const { geneId, onHideCallback } = props

  return (<div className={"drawer-content"}>
    <div className={"drawer-close-btn"}>
      <CloseSharpIcon onClick={onHideCallback}>Close Drawer</CloseSharpIcon>
    </div>

    <div className={"drawer-category"}>GENE</div>
    <div className={"drawer-title"}>
      <h1>{geneId}</h1>
      <Chip className={"gene-nominated-chip"} label="Nominated" color="primary" />
    </div>
    <div className={"drawer-short-desc"}>chondroadherin like</div>
    <GeneTabPanel />
  </div>)
}

export default GeneDrawer
