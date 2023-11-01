import './tailwind.css'
import '@mantine/core/styles.css'

import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react'
import { ColorSchemeScript, MantineProvider } from '@mantine/core'

const Root = () => {

  return (
    <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <Meta />
      <Links />
      <ColorSchemeScript forceColorScheme="dark" />
    </head>
    <body>
    <MantineProvider forceColorScheme="dark">
      <Outlet />
      <ScrollRestoration />
      <LiveReload />
      <Scripts />
    </MantineProvider>
    </body>
    </html>
  )
}

export default Root
