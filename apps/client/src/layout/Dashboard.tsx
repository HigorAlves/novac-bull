import React from 'react'

import Head from 'next/head'

interface IProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: IProps) {
  return (
    <span className='dashboard'>
      <Head>
        <title>Dashboard - Novac Bull</title>
      </Head>

      <h1>Area logada</h1>

      <main className='text-gray-400 bg-gray-900 body-font h-screen pt-6'>
        {children}
      </main>
    </span>
  )
}
