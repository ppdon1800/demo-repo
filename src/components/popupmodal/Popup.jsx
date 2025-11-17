import React from 'react'

function Popup({header,footer,id,body,isOpen,setIsOpen}) {
  if (!isOpen) return null

  return (
    <div id={id} className='bg-amber-200 flex flex-col fixed top-1/10 left-1/4'>
      <button onClick={()=>setIsOpen(false)} className=' bg-red-600 left-0'>Close</button>
      <div>
        {
          header ? header : <h1>Header</h1>
        }
        {
          body ? body : <h1>Body</h1>
        }
        {
          footer ? footer : <h1>Footer</h1>
        }
      </div>
    </div>
  )
}

export default Popup