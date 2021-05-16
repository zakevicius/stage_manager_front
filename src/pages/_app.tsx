import { Fragment, useEffect } from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'

import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { SnackbarProvider } from 'notistack'

import theme from '../theme/theme'

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles)
    }
  }, [])

  return (
    <Fragment>
      <Head>
        <title>{'CG Stages'}</title>
        <meta
          content="minimum-scale=1, initial-scale=1, width=device-width"
          name="viewport"
        />
        <meta content="noindex,follow" key="robots" name="robots" />
        <meta content="noindex,follow" key="googlebot" name="googlebot" />
      </Head>
      <ThemeProvider theme={theme}>
        <SnackbarProvider>
          <CssBaseline />
          <Component {...pageProps} />
        </SnackbarProvider>
      </ThemeProvider>
    </Fragment>
  )
}
