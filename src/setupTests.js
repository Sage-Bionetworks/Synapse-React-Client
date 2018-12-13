
import "isomorphic-fetch" // polyfill for fetch
import 'raf/polyfill'     // polyfill for requestAnimationFrame

// Line below is used because plotly has a dependency on mapbox-gl
// which requires a browser env and doesn't provide support for headless
// js testing, so we shim the function below.
window.URL.createObjectURL = function () {}