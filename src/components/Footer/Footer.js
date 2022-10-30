import React from 'react'
import FooterSign from './FooterSign/FooterSign'
import FooterToTop from './FooterToTop/FooterToTop'
import FooterSecond from './FooterSecond/FooterSecond'
import FooterFirst from './FooterFirst/FooterFirst'
import { useSelector } from 'react-redux'

function Footer() {
  const userToken = useSelector(state=> state.user.userToken)
  return (
    <footer>
      {userToken === '' && <FooterSign />}
      <FooterToTop />
      <FooterFirst />
      <FooterSecond />
    </footer>
  )
}

export default Footer
