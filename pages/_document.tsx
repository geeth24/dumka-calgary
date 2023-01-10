import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/pot.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
        <link rel="apple-touch-icon" href="/pot.png" />
        <meta property="og:title" content="Dumka Calgary" />
        <meta name="image" property="og:image" content="/logo.png" />
        <meta name="author" content="Dumka Calgary" />
        <meta
          property="og:description"
          content="Immerse Yourself In A Sensory Spice Experience And Awaken Your Tastebuds With Our Modern Indian Menu, Showcasing The Very Best Of Indias Exotic Flavors."
        />
        <meta property="og:url" content="https://dumkacalgary.com" />
      </Head>
      <body className="bg-[#FFF5EC]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
