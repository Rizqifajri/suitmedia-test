import React from 'react';

const Wavy = () => {
  return (
      <div className='absolute -bottom-72 left-0 right-0 z-10'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className='w-full h-auto'
        >
          <path fill="#ffff" fillOpacity="1" d="M0,128L1440,32L1440,320L0,320Z"></path>
        </svg>
      </div>
  );
}

export default Wavy;
