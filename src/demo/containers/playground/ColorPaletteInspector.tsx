import React, { useState } from 'react'
import {
  COLOR_PALETTE_EVEN,
  COLOR_PALETTE_ODD,
} from '../../../lib/utils/functions/colorPalette'

type DivColorInputProps = {
  initialColor: string
}

const DivWithColorInput: React.FunctionComponent<DivColorInputProps> = ({
  initialColor,
}) => {
  const [color, setColor] = useState(initialColor)

  return (
    <div style={{ background: color, width: '100%', height: '100px' }}>
      <input value={color} onChange={event => setColor(event.target.value)} />
    </div>
  )
}

const ColorPaletteInspector: React.FunctionComponent = () => {
  return (
    <div>
      <h2>Color Palette Odd</h2>
      <div>
        {COLOR_PALETTE_ODD.map(color => {
          return (
            <DivWithColorInput
              key={color}
              initialColor={color}
            ></DivWithColorInput>
          )
        })}
      </div>
      <h2>Color Palette Even</h2>
      <div>
        {COLOR_PALETTE_EVEN.map(color => {
          return (
            <DivWithColorInput
              key={color}
              initialColor={color}
            ></DivWithColorInput>
          )
        })}
      </div>
    </div>
  )
}

export default ColorPaletteInspector
