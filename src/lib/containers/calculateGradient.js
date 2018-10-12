export default function calculateTextColor(RGB, index) {
    let r = RGB[0]
    let g = RGB[1]
    let b = RGB[2]
    let newR = r * (1.3 - (1.0 / (index + 1))) // to invert do x_data.length - index
    let newG = g * (1.3 - (1.0 / (index + 1)))
    let newB = b * (1.3 - (1.0 / (index + 1)))
    return {newR,newG,newB}
}