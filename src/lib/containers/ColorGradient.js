const COLOR_PALETTE = [
    'rgba(91,176,181',   // turquoise
    'rgba(64,123,160',   // blueberry
    'rgba(201,66,129',   // rose
    'rgba(71,51,125',    // royal
    'rgba(222,154,31',   // butterscotch
    'rgba(16,148,136',   // powder
    'rgba(60,74,99',     // slate
    'rgba(212,109,30',   // apricot
    'rgba(88,161,88',    // fern
    'rgba(81,113,192',   // lavender
    'rgba(178,36,42'     // apple
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
        this.originalColor = colorWheelStart
        this.colorJump = colorWheelStart
        this.index = 0
    }

    getOriginalColor() {
        return `${COLOR_PALETTE[this.originalColor]},100)`
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