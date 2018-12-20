import "isomorphic-fetch" // polyfill for fetch
import 'raf/polyfill'     // polyfill for requestAnimationFrame
import {configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

configure({ adapter: new Adapter() });

// Line below is used because plotly has a dependency on mapbox-gl
// which requires a browser env and doesn't provide support for headless
// js testing, so we shim the function below. 
// View - https://github.com/mapbox/mapbox-gl-js/issues/3436
window.URL.createObjectURL = function () {}

// TODO: Mock synapse api calls possibly, instead of individually
// in each test file
