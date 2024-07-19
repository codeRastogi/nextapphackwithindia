import Event from '@/components/(main)/event'
import Intro from '@/components/(main)/intro'
import Info from '@/components/(main)/info'
import Header from '@/components/header'
import React from 'react'
import Theme from '@/components/(main)/theme'
import History from '@/components/(main)/history'
import TechStack from '@/components/(main)/techstack'
import Timeline from '@/components/(main)/timeline'

function page() {
  return (
    <div className="w-full h-full">
      <div className="via-black bg-gradient-to-tl from-gradient-start to-gradient-start">
        <Header />
        <Intro />
      </div>
      <Event />
      <Info />
      <Theme />
      <TechStack />
      <Timeline />
      <History />
    </div>
  )
}

export default page