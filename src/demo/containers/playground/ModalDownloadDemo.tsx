import * as React from 'react'
import ModalDownload from '../../../lib/containers/ModalDownload'

type State = {
  showModal: boolean
}

class ModalDownloadDemo extends React.Component<{}, State> {

  constructor(props: any) {
    super(props)
    this.state = {
      showModal: false
    }
  }

  onClose = () => {
    this.setState({
      showModal: false
    })
  }

  onOpen = () => {
    this.setState({
      showModal: true
    })
  }

  render () {
    return (
      <div className="container">
        <button onClick={this.onOpen} className="btn btn-primary" > Show ModalDownload </button>
        {
          this.state.showModal
          &&
          <ModalDownload
            sql={'SELECT * from syn18941147'}
            entityId={'syn18941147'}
            onClose={this.onClose}
          />
        }
      </div>
    )
  }
}

export default ModalDownloadDemo