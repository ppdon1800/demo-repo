import React from 'react'

function TabManager({tabs}) {
  return (
    <div>
        {tabs.map((tab) => (
            <button onClick={()=>console.log("clicked")}>{tab.name}</button>
        ))}
    </div>
  )
}

export default TabManager