import * as React from 'react'

type BookmarksProps = {
  footnotes: string
}

class Bookmarks extends React.Component<BookmarksProps, {}> {

  private bookmarkRef: React.RefObject<HTMLInputElement>

  constructor(props: BookmarksProps) {
    super(props)
    this.bookmarkRef = React.createRef()
    this.transformProps = this.transformProps.bind(this)
  }

  public componentDidMount(): void {
    this.transformProps()
  }

  public transformProps(): void {
        // find all links in the footnotes_html-- each of which contains a "text=[\d]"
    const copyFootnotes: string = String(this.props.footnotes)
    const linkOccurences: RegExpMatchArray | null = copyFootnotes.match(/text=\[.\]/g)
    if (!linkOccurences) {
      return
    }
    const linksFormatted = linkOccurences
            .map((element) => {
                // grab only the [\d] pieces of the text
                return element.substring(element.indexOf('['), element.indexOf(']') + 1)
            })
            .map((element, index) => {
                // here bookmark is used so that the references can target this anchor tag
              return `<span><span class="BookmarkWidget"><a id="bookmark${index}">${element}</a></span></span>`
            })
        // now all of the links are prepared to be inserted back into the original string
        // all link occurences have a single location in the original string-- we go through and then
        // match of the link occurences to the spot it belongs into the html
    let i: number = 0
    const matches = copyFootnotes.replace(
            /(<span data-widgetparams=.*>)&lt;Synapse widget&gt;(<\/span>)/g,
            // replace using a function where p1,p2 correspond to the matched groups from above
            // specifically removing the Synapse widget text and then putting instead of the anchor tag with the link
            // formatted text from above
            (match, p1, p2, original) => {
              const text = [p1, linksFormatted[i], p2].join('')
              i += 1
              return text
            }
        )
    // create the dom element for this view and append to the ref
    const bookmarkFragment = document.createRange().createContextualFragment(matches)
    // TS doesn't like possibly null values, bang operator ! will assert this is okay.
    this.bookmarkRef.current!.appendChild(bookmarkFragment)
  }

  public render() {
    return (
            <React.Fragment>
                <hr />
                <div ref={this.bookmarkRef} />
            </React.Fragment>
    )
  }
}

export default Bookmarks
