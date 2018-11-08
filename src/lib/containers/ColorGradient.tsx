const COLOR_PALETTE: string [] = [
    'rgba(91,176,181',
    'rgba(64,123,160',
    'rgba(201,66,129',
    'rgba(71,51,125',
    'rgba(222,154,31',
    'rgba(16,148,136',
    'rgba(60,74,99',
    'rgba(212,109,30',
    'rgba(88,161,88',
    'rgba(81,113,192',
    'rgba(178,36,42'
]

const OPACITY_WHEEL: number [] = [1, 0.8, 0.6, 0.4, 0.2, 0.2, 0.4, 0.6, 0.8, 1]

export default class ColorGradient {

    private originalColor : number
    private colorJump : number
    private index : number

    constructor(colorWheelStart: number) {
        this.originalColor = colorWheelStart
        this.colorJump = colorWheelStart
        this.index = 0
    }

    getOriginalColor(): string {
        return `${COLOR_PALETTE[this.originalColor]},100)`
    }

    getTextColor(): string {
        // dark, dark, light, light, light, light, light, light, dark, dark
        return this.index % 10 < 2 || this.index % 10 > 7 ? 'white' : 'black'
    }

    getColor(): string {
        let opacityIndex = OPACITY_WHEEL[this.index % 10]
        if (this.index % 10 === OPACITY_WHEEL.length / 2) {
            this.colorJump += 1
            this.colorJump = this.colorJump % COLOR_PALETTE.length
        }
        this.index += 1
        return `${COLOR_PALETTE[this.colorJump]},${opacityIndex})`
    }
}
