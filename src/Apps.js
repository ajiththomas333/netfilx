import React from 'react'
import NavBar from './components/navBar'
import { action,originals } from './urls'
import './app.css'
import Banner from './components/banner/Banner'
import Rowpost from './components/rowpost/rowpost'
function Apps() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <Rowpost  url={originals}title='netflix originals'/>
      <Rowpost  url={action} title='action'isSmall/>
    </div>
  )
}

export default Apps
