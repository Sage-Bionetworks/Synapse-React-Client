import * as React from 'react'
import CardContainerLogic from '../../../lib/containers/CardContainerLogic'
import { SynapseConstants } from 'src/lib'

export default class CardContainerLogicDemo extends React.Component {

  constructor(props: any) {
    super(props)
    this.state = {}
  }

  render() {
    return (
        <CardContainerLogic
          type={SynapseConstants.CSBC_PROJECT}
          sql="SELECT * FROM syn10142562"
          unitDescription="studies"
        />
    )
  }
}
