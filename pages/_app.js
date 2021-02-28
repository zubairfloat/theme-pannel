/* eslint-disable space-before-function-paren */
import React from 'react'
import App, { Container } from 'next/app'
import Helmet from 'react-helmet'
import Router from 'next/router'
import NProgress from 'nprogress'
import 'bootstrap/dist/css/bootstrap.min.css'

// DO NOT REMOVE - import root styles (done here to)
import './index.css'

export default class AppWrapper extends App {
  // ENV: SSR
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps }
  }
  /*
  Page load - add NProgress bar
  Special thanks to this example:
  https: //phuongnq.me/2018-02-02-use-nprogress-with-nextjs/
  */
  componentWillMount() {
    if (Router && NProgress) {
      Router.onRouteChangeStart = () => NProgress.start()
      Router.onRouteChangeComplete = () => NProgress.done()
      Router.onRouteChangeError = () => NProgress.done()
    }
  }
  // navItems = [
  //   <NavItem
  //     key="index"
  //     href="/"
  //     as="/"
  //     primaryText="Home"
  //     rightIcon={<FontIcon>home</FontIcon>}
  //   />,
  // ]
  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    )
  }
}
