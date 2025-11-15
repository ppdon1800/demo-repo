import React from 'react'

function TabManager({tabs}) {
    const [activeTab, setActiveTab] = React.useState(0);
  return (
    <div>
        {tabs.map((tab,i) => (
            <button onClick={()=>setActiveTab(i)}>{tab.name}</button>
        ))}
        {
            tabs[activeTab].component
        }
    </div>
  )
}

export default TabManager