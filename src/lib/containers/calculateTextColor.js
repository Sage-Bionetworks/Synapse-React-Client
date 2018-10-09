export default function calculateTextColor(newR,newG,newB) {
    // https://stackoverflow.com/questions/3942878/how-to-decide-font-color-in-white-or-black-depending-on-background-color
    let rgb = [newR, newG, newB].map(
        c => {
            c = c / 255.0
            if (c <= 0.03928) {
                c = c / 12.92
            } else {
                c = Math.pow(((c+0.055)/1.055), 2.4)
            }
            return c
        }
    )

    let L = 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]

    if (L > 0.179) {
        return "white"
    } else {
        return "black"
    } 
}