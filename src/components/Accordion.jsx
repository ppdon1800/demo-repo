import React, { useState } from 'react'
import data from './data.js'

function Accordion() {
  let index = 1;
  const [activeIndex, setActiveIndex] = useState(Array(5).fill(0));
  const [multiSelect, setMultiSelect] = useState(false);
  function handleClick(id){
      let arr = [...activeIndex];
      if(multiSelect){
              arr[id] = 1;
              setActiveIndex(arr);
      }else{
        arr.fill(0);
        arr[id] = 1;
        setActiveIndex(arr)
      }
  }
  return (
    <div>
      <button className={`${multiSelect ? 'bg-pink-900' : 'bg-gray-800'}`} onClick={()=>setMultiSelect(!multiSelect)}>Enable Multi Select</button>
      {data.map((item) => {
        return (
          <div className='bg-gray-800 m-1 hover:bg-gray-900' onClick={() => handleClick(item.id)} key={item.id}>
            <h2><span className='font-bold'>Q{index++}:</span>{item.question}</h2>
            <p className={`${activeIndex[item.id] === 1 ? 'block' : 'hidden'}`}><span className='font-bold'>A:</span>{item.answer}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Accordion