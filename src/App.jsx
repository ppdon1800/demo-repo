//import { useState } from 'react'
import Accordion from './components/Accordion.jsx'
import ImgSlider from './components/ImgSlider.jsx'
import LoadMore from './components/loadmore/LoadMore.jsx'
import Qrcode from './components/Qrcode.jsx'
import RandomColor from './components/RandomColor.jsx'
import ScrollIndicator from './components/scrollIndicator.jsx'
import Star from './components/Star.jsx'


function App() {

  return (
    <div className='items-center justify-center p-10 text-white h-screen gap-2'>
      {/* <Star totalStars={10}/>
      <Accordion />
      <RandomColor /> */}

      {
        // <ImgSlider/>
      }
      <LoadMore/>
      {/* <Qrcode/> */}
      <ScrollIndicator/>
    </div>
  )
}

export default App
