import React from 'react'
import Video from '../components/Video'
import HomeHeroText from '../components/HomeHeroText'
import HomeBottomText from '../components/HomeBottomText'
import HeroMidText from '../components/HeroMidText'


const Home = () => {
    
  return (
    <>
    
    <div className='h-full w-full fixed'>
        <Video/>
    </div>
    <div className='h-screen w-screen relative flex flex-col justify-between overflow-y-scroll snap-y snap-mandatory '>
      <HomeHeroText/>
      <HeroMidText/>
      <HomeBottomText/>


    </div>
    </>
  )
}

export default Home
