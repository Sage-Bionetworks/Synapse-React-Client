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
          type={SynapseConstants.CSBC_STUDY}
          sql={`SELECT * FROM syn18483791 WHERE ( ( "is.study" = 'TRUE' ) )`}
          unitDescription="studies"
        />
    )
  }
}
