import * as React from 'react'
import '../style/App.scss'
import '../style/DemoStyle.scss'
import '@fortawesome/fontawesome-free/css/all.css'
import {
  COLOR_PALETTE_EVEN,
  COLOR_PALETTE_ODD,
} from 'lib/utils/functions/colorPalette'

export const TokenContext = React.createContext('')

export default class App extends React.Component {
  constructor(props: any) {
    super(props)
  }

  public render(): JSX.Element {
    return (
      <div>
        <h2>Color Palette Even</h2>
        <div>
          {COLOR_PALETTE_EVEN.map(color => {
            return (
              <div
                key={color}
                style={{ background: color, width: '100%', height: '100px' }}
              >
                {color}
              </div>
            )
          })}
        </div>
        <h2>Color Palette Odd</h2>
        <div>
          {COLOR_PALETTE_ODD.map(color => {
            return (
              <div
                key={color}
                style={{ background: color, width: '100%', height: '100px' }}
              >
                {color}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
