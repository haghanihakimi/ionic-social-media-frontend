import React, { useEffect } from 'react';
import { PostProps } from '../../../server/props';

const GuestProfileVideoPosts: React.FC<PostProps> = (PostProps) => {
  const { category } = PostProps;

  useEffect(() => {
    if (category === 'videos') {
      // run loading data for videos category
    }
  }, [category])

  return (
    <div id="w-full p-4 relative bg-white">
      Videos ONLY
    </div>
  );
};

export default GuestProfileVideoPosts;
