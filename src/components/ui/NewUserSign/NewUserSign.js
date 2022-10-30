import React from 'react'
import { Link } from 'react-router-dom'
import classes from './NewUserSign.module.css'

function NewUserSign() {
  return (
    <div className={classes.new}>
    <p>New customer?</p>
    <Link to="/signup">Start here.</Link>
  </div>
  )
}

export default NewUserSign
