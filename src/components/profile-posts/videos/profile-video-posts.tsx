import React, { useEffect } from 'react';
import { PostProps } from '../../../server/props';
import { BiSolidVideos as VideosIcon } from "react-icons/bi";

const ProfileVideoPosts: React.FC<PostProps> = (PostProps) => {
  const { category } = PostProps;

  useEffect(() => {
    if (category === 'videos') {
      // run loading data for videos category
    }
  }, [category])

  return (
    <div id="w-full p-4 relative bg-white">
      <h4 className='w-full min-h-[160px] text-center flex flex-col gap-2 justify-center items-center'>
        <VideosIcon className='w-8 h-8 text-slate-600' />
        <span className='block max-w-[180px] text-slate-600'>
        When you post videos, they will appear here.
        </span>
      </h4>
    </div>
  );
};

export default ProfileVideoPosts;
