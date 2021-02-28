/* eslint-disable space-before-function-paren */
/* eslint-disable jsx-quotes */
import React from 'react'
import Helmet from 'react-helmet'
import { Navbar } from '../components'

const INDEX_PAGE = () => {
  return (
    <article>
      <Helmet title="Home" />
      <Navbar />
    </article>
  )
}

export default INDEX_PAGE

// {loggedIn && (
//   <div>
//     <Navbar />
//   </div>
// )}
// {!loggedIn && (
//   <div>
//     <Link href="/login">Login</Link>
//     <p>or</p>
//     <Link href="/signup">Sign Up</Link>
//   </div>
// )}
