//import { useState } from 'react'
import Accordion from './components/Accordion.jsx'
import ImgSlider from './components/ImgSlider.jsx'
import LoadMore from './components/loadmore/LoadMore.jsx'
import Qrcode from './components/Qrcode.jsx'
import RandomColor from './components/RandomColor.jsx'
import ScrollIndicator from './components/scrollIndicator.jsx'
import Star from './components/Star.jsx'
import TabManager from './components/tabs/TabManager.jsx'


function App() {

  return (
    <div className='items-center justify-center p-10 text-white h-screen gap-2'>
      {/* <Star totalStars={10}/>
      <Accordion />
      <RandomColor /> */}

      {
        // <ImgSlider/>
      }
      {/* <LoadMore/> */}
      {/* <Qrcode/> */}
      {/* <ScrollIndicator/> */}

      <TabManager tabs={[{name:'ImageSlider',component:<ImgSlider/>},{name:'Accordion',component:<Accordion/>},{name:'RandomColor',component:<RandomColor/>}]} />
    </div>
  )
}

export default App
