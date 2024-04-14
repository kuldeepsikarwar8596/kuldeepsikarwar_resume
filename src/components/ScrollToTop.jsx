import React, { useState, useEffect } from 'react';

function ScrollToTop() {

  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div
          className="fixed bottom-4 right-4 bg-orange-500 text-white p-2 rounded-full cursor-pointer shadow-md "
          onClick={scrollToTop}
          
        >
          <img src="GoToTop.svg" alt="" />
        </div>
      )}
    </>
  );
}

export default ScrollToTop;
