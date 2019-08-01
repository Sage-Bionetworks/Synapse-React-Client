import * as React from 'react'

export type TwitterFeedProps = {
  href: string
}

export default class TwitterFeed extends React.Component<TwitterFeedProps> {
  componentDidMount() {
    if (typeof (window as any).twttr !== 'undefined') {
			(window as any).twttr.widgets.load(document.getElementById(this.props.href));
		}
  }

  render() {
    return <a id={this.props.href} className="twitter-timeline" data-height="600" data-theme="dark" href={this.props.href}></a>
  }
}
