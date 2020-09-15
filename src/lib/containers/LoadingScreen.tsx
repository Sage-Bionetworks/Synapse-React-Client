import * as React from 'react'
import { BarLoader } from 'react-spinners'

const loadingScreen = (
  <div className="bar-loader">
    <BarLoader color="#878787" loading={true} height={5}/>
  </div>
)

export default loadingScreen
