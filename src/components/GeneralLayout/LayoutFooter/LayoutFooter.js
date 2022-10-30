import React from 'react'
import classes from './LayoutFooter.module.css'

function LayoutFooter() {
  return (
    <footer className={classes.footer}>
      <div>
        <span>conditions of use</span>
        <span>Privacy notice</span>
        <span>Help</span>
      </div>
      <p>&copy; 1996-2022, Amazon.com, Inc. or its affiliates</p>
    </footer>
  )
}

export default LayoutFooter
