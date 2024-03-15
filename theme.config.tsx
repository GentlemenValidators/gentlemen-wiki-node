import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span><b>GentlemenValidators</b></span>,
  project: {
    link: 'https://github.com/GentlemenValidators/node-docs',
  },
  chat: {
    link: 'https://t.me/gentlemenvalidators',
  },
  docsRepositoryBase: 'https://github.com/GentlemenValidators/node-docs',
  footer: {
    text: 'GentlemenValidators Wiki',
  },
   useNextSeoProps() {
        return {
          titleTemplate: '%s | GentlemenValidators Wiki'
        }
      },

      head: (
        <>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta property="og:title" content="GentlemenValidators Wiki" />
          <meta property="og:description" content="GentlemenValidators Wiki" />

          <meta name="title" content="GentlemenValidators Wiki" />
          
        </>
      )
}

export default config
