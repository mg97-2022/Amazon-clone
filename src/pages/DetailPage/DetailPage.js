import React from 'react'
import TopNavbar from '../../components/Navbar/TopNavbar/TopNavbar'
import Footer from '../../components/Footer/Footer'
import ProductDetails from './ProductDetails/ProductDetails'
import classes from './DetailPage.module.css'

function DetailPage() {
  return (
    <div className={classes.detail_page}>
      <TopNavbar />
      <ProductDetails />
      <Footer />
    </div>
  )
}

export default DetailPage
