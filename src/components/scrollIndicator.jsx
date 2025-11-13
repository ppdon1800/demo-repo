import React from 'react'

function ScrollIndicator() {
  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setWidth(scrolled);
    };

    // initialize
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div className='w-full h-2 fixed top-0 left-0 bg-amber-50 z-50'>
      <div
        className='h-2 bg-green-500'
        style={{ width: `${width}%`, transition: 'width 120ms linear' }}
      />
    </div>
  );
}

export default ScrollIndicator