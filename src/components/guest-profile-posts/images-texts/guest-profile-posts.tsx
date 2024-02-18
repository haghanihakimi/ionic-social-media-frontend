import React, { useEffect, useState } from 'react';

const GuestProfileImagePosts: React.FC = () => {
  const [parentWidth, setParentWidth] = useState<string>('');

  useEffect(() => {
    const updateParentWidth = () => {
      const width = parseInt(((window.innerWidth - 4) / 4).toFixed(0), 10);
      setParentWidth(`${width}px`);
    };

    updateParentWidth();

    window.addEventListener('resize', updateParentWidth);

    return () => {
      window.removeEventListener('resize', updateParentWidth);
    };
  }, []);

  return (
    <div id='guest-posts' className='w-full'>
      <div className='w-full flex gap-0 flex-row flex-wrap overflow-auto overflow-x-hidden'>
        <div className="bg-green-200 w-full flex flex-row items-center justify-start gap-[1px] flex-wrap">
          <div className='block bg-gray-300' style={{ height: parentWidth, width: parentWidth }}>
            &nbsp;
          </div>
          <div className='block bg-gray-300' style={{ height: parentWidth, width: parentWidth }}>
            &nbsp;
          </div>
          <div className='block bg-gray-300' style={{ height: parentWidth, width: parentWidth }}>
            &nbsp;
          </div>
          <div className='block bg-gray-300' style={{ height: parentWidth, width: parentWidth }}>
            &nbsp;
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestProfileImagePosts;
