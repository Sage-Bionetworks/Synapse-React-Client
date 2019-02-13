import * as React from 'react'
import CardContainerLogic from '../../../lib/containers/CardContainerLogic'

export default class CardContainerLogicDemo extends React.Component {

  constructor(props: any) {
    super(props)
    this.state = {}
  }

  render() {
    return (
        <CardContainerLogic
          type="study"
          sql="SELECT * FROM syn16787123"
          unitDescription="studies"
          filter="diseaseFocus"
        />
    )
  }
}
