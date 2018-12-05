import {COLOR_PALETTE_EVEN, COLOR_PALETTE_ODD} from './colorPalette'

export function getColorPallette (start: number, end: number): {colorPalette: string [], textColors: string []} {
    let colorPalleteSelection = []
    let textColors = []
    let offset = -1

    if (start % 2 == 0) {
        colorPalleteSelection = COLOR_PALETTE_EVEN
        offset = start * 5
    } else {
        colorPalleteSelection = COLOR_PALETTE_ODD
        offset = (start - 1) * 5
    }

    let colorPalette: string []  = []

    for (let i = 0; i < end; i++) {
        let textColor:string = i % 10 < 2 || i % 10 > 7 ? 'white' : 'black'
        let color:  string =  `${colorPalleteSelection[(offset + i) % colorPalleteSelection.length]}`
        colorPalette.push(color)
        textColors.push(textColor)
    }

    return {colorPalette, textColors}
}

export default getColorPallette