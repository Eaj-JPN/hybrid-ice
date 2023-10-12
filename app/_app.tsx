import localFont from 'next/font/local'
import type { AppProps } from 'next/app'

const Blair = localFont({
    src: [
        {
            path: '../fonts/BlairMedium.otf',
            style: 'normal'
        },
        {
            path: '../fonts/BlairLight.otf',
            style: 'light'
        }
    ]
})

export default function MyFonts ({ Component, pageProps } : AppProps) {
    return (
    <main className={Blair.className}>
        <Component {...pageProps} />
      </main>
    )
  }