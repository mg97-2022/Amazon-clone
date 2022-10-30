import React, { Fragment } from 'react'
import BottomNavbar from './BottomNavbar/BottomNavbar'
import TopNavbar from './TopNavbar/TopNavbar'

function Navbar({home}) {
  return (
    <Fragment>
      <TopNavbar home={home} />
      <BottomNavbar />
    </Fragment>
  )
}

export default Navbar
