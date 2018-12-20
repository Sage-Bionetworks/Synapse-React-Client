import {getColorPallette} from '../../../lib/containers/ColorGradient'
import {COLOR_PALETTE_EVEN, COLOR_PALETTE_ODD} from '../../../lib/containers/colorPalette'

describe('the color gradient calculated is correct', () => {
    
    it ('calculates the odd case ', () => {
        let {colorPalette} = getColorPallette(0,110)
        expect(colorPalette).toEqual(COLOR_PALETTE_EVEN);
    })
    
    it ('calculates the even case ', () => {
        let {colorPalette} = getColorPallette(1,110)
        expect(colorPalette).toEqual(COLOR_PALETTE_ODD)
    })

})