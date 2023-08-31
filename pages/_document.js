import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="FOSSCell NITC - The FOSS Club of National Institute of Technology Calicut" />
        <meta name="keywords" content="fosscell, FOSSCell NITC, FOSS Club, NIT Calicut, Open Source, Free Software" />
        <meta name="author" content="FOSSCell NITC" />
        
        {/* Open Graph meta tags for social sharing */}
        <meta property="og:title" content="FOSSCell NITC" />
        <meta property="og:description" content="FOSSCell NITC - The FOSS Club of National Institute of Technology Calicut" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.fosscell.org" /> 
        <meta property="og:image" content="https://media.licdn.com/dms/image/C560BAQHbrWXB_tEx3g/company-logo_200_200/0/1644006253063?e=1701302400&v=beta&t=5-hx8RMnPx04lwNQ7_xs-7hdR-1kajRrxN-b1vTUzy0" /> {/* Replace with your og:image URL */}
        <meta property="og:image:alt" content="FOSSCell NITC Logo" />
        
        {/* Twitter card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FOSSCell NITC" />
        <meta name="twitter:description" content="FOSSCell NITC - The FOSS Club of National Institute of Technology Calicut" />
        <meta name="twitter:image" content="https://media.licdn.com/dms/image/C560BAQHbrWXB_tEx3g/company-logo_200_200/0/1644006253063?e=1701302400&v=beta&t=5-hx8RMnPx04lwNQ7_xs-7hdR-1kajRrxN-b1vTUzy0" /> {/* Replace with your Twitter card image URL */}
        
        <title>FOSSCell NITC</title>
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
