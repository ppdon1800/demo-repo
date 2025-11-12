import React from 'react'

function RandomColor() {
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  const [bgColor, setBgColor] = React.useState(getRandomColor());

  return (
    <div onClick={()=>setBgColor(getRandomColor())} className='w-screen h-screen flex items-center justify-center ' style={{ background: `linear-gradient(60deg, ${bgColor} ,${getRandomColor()})` }}>
        <h1 className='text-xl font-bold'>{bgColor}</h1>
    </div>
  )
}

export default RandomColor