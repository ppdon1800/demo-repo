import React from 'react'
import Popup from './Popup.jsx'

function PopupTest() {
    const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div>
        <button onClick={()=>setIsOpen(true)}>Open</button>
        <Popup isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  )
}

export default PopupTest