import * as React from 'react'

export type TwitterFeedProps = {
  href: string
}

/**
 * Deprecated, UI clashes with rest of site.
 */
export default class TwitterFeed extends React.Component<TwitterFeedProps> {
  constructor(props: TwitterFeedProps) {
    super(props)
  }

  componentDidMount() {
    if (typeof (window as any).twttr !== 'undefined') {
      ;(window as any).twttr.widgets.load(
        document.getElementById(this.props.href),
      )
    }
  }

  render() {
    return (
      <div>
        <a
          id={this.props.href}
          className="twitter-timeline"
          data-height="600"
          data-theme="light"
          href={this.props.href}
        ></a>
      </div>
    )
  }
}
