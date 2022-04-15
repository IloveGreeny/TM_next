import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Card from "./card";
import Link from "next/link";






function Home() {
  return (
    <header className="flex justify-between p-5">
        <div className="flex items-center space-x-5">
            <Link href="/">
                <img className="w-44 object-contain cursor-pointer" src="" alt=""/>
            </Link>
        </div>
        <div className="flex items-center space-x-5 text-blue-600">
            <Link href="/">
                <h3 className="cursor-pointer">Home</h3>
            </Link>
            <Link href="card">
                <h3 className="cursor-pointer">Cards</h3>
            </Link>
            <h3 className="border px-4 py-1 rounded-full border-blue-600">Get Started</h3>
        </div>
    </header>
  )
}

export default Home
