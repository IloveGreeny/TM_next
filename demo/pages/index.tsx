import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from "../componerts/Header";

function Home () {
  return (
    <div className="">
      <Head>
        <title>WebPage</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

        <Header />
    </div>
  )
}

export default Home
