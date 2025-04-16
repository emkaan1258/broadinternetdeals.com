import Head from 'next/head'

export default function NoIndexMeta() {
  return (
    <Head>
      <meta name="robots" content="noindex,nofollow,noarchive" />
      <meta name="googlebot" content="noindex,nofollow,noarchive" />
      <meta name="bingbot" content="noindex,nofollow,noarchive" />
    </Head>
  )
}
