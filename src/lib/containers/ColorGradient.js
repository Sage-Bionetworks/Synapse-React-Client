const COLOR_PALETTE = [
    'rgba(91,176,181', // aqua
    'rgba(64,123,160', // marine
    'rgba(201,66,129', // magenta
    'rgba(71,51,125', // purple
    'rgba(222,154,31', // yellow
    'rgba(16,148,136', // green-aqua
    'rgba(60,74,99', // grayish
    'rgba(212,109,30', // dim gold
    'rgba(88,161,88', // green
    'rgba(81,113,192', // off blue
    'rgba(178,36,42'  // red
]

const OPACITY_WHEEL = [
    1,
    0.8,
    0.6,
    0.4,
    0.2,
    0.2,
    0.4,
    0.6,
    0.8,
    1
]

export default class ColorGradient {
    constructor(colorWheelStart) {
        this.colorJump = colorWheelStart
        this.index = 0
    }

    getColor() {
        let opacityIndex = OPACITY_WHEEL[this.index % 10]
        if ((this.index % 10) === OPACITY_WHEEL.length / 2) {
            this.colorJump += 1
            this.colorJump = this.colorJump % COLOR_PALETTE.length
        }
        this.index += 1
        return `${COLOR_PALETTE[this.colorJump]},${opacityIndex})`
    }

}