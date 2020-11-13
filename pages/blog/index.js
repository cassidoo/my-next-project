import Head from 'next/head'
import Link from 'next/link'

function Home() {
  return (
    <>
      <Head>
        <title>My Blog!</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>Welcome, blog reader!</div>
      <Link href="/">
        <a>Go back home</a>
      </Link>
    </>
  )
}

export default Home
