'use client';
import ScrollToTop from "react-scroll-to-top";

const BottomToTop = () => {
    return (
      <ScrollToTop
        className='flex items-center justify-center animate-bounce 1s'
        smooth
        style={{
          backgroundColor: 'white',
        }}
        viewBox="0 0 24 24"
        svgPath="m18 15-6-6-6 6"
      />
    );
  };

  export default BottomToTop;