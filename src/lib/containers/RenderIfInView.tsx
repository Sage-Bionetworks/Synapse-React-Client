import * as React from 'react'
import VisibilityObserver from './VisibilityObserver'

export default class RenderIfInView extends React.Component<
  React.PropsWithChildren<unknown>
> {
  public render() {
    return <VisibilityObserver renderInView={this.getChildren} />
  }

  private getChildren = () => {
    return <>{this.props.children}</>
  }
}
