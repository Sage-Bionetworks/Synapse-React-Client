import {COLOR_PALETTE_EVEN, COLOR_PALETTE_ODD} from './colorPalette'

export default class ColorGradient {

    private originalColor : number
    private offset : number
    private index : number
    private colorPallete : string []

    constructor(colorWheelStart: number) {
        // Since we precompute each color and the color schema
        // goes from high -> low -> low -> high -> . 
        // then there are two different color
        this.index = 0
        if (colorWheelStart % 2 == 0) {
            this.colorPallete = COLOR_PALETTE_EVEN
            this.originalColor = colorWheelStart * 5
            this.offset = colorWheelStart * 5
        } else {
            this.colorPallete = COLOR_PALETTE_ODD
            this.originalColor = (colorWheelStart - 1) * 5
            this.offset = (colorWheelStart - 1) * 5
        }
    }

    getOriginalColor(): string {
        return `${this.colorPallete[this.originalColor]}`
    }

    getTextColor(): string {
        // dark, dark, light, light, light, light, light, light, dark, dark
        return this.index % 10 < 2 || this.index % 10 > 7 ? 'white' : 'black'
    }

    getColor(): string {
        let color:  string =  `${this.colorPallete[this.offset +(this.index % this.colorPallete.length)]}`
        this.index += 1
        return color
    }
}
