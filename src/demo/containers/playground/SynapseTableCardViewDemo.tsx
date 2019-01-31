import * as React from 'react'
import SynapseTableCardViewWrapper from '../../../lib/containers/SynapseTableCardViewWrapper'

export default class SynapseTableCardViewDemo extends React.Component {

  constructor(props: any) {
    super(props)
    this.state = {}
  }

  render() {
    return (
        <SynapseTableCardViewWrapper
          type="study"
          sql="SELECT * FROM syn16787123"
          unitDescription="studies"
        />
    )
  }
}
