import {COLOR_PALETTE_EVEN, COLOR_PALETTE_ODD} from './colorPalette'

export function getColorPallette (start: number, end: number): {colorPallete: string [], textColors: string []} {
    let colorPallete = []
    let textColors = []
    let offset = -1

    if (start % 2 == 0) {
        colorPallete = COLOR_PALETTE_EVEN
        offset = start * 5
    } else {
        colorPallete = COLOR_PALETTE_ODD
        offset = (start - 1) * 5
    }

    for (let i = 0; i < end; i++) {
        let textColor:string = i % 10 < 2 || i % 10 > 7 ? 'white' : 'black'
        let color:  string =  `${colorPallete[offset +(i % colorPallete.length)]}`
        colorPallete.push(color)
        textColors.push(textColor)
    }

    return {colorPallete, textColors}
}

export default getColorPallette