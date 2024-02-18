import React, { useState } from 'react';
import { BiSolidVideos as VideosIcon } from "react-icons/bi";
import { BsGrid3X3Gap as GridsIcon } from "react-icons/bs";
import GuestProfileImagePosts from '../../components/guest-profile-posts/images-texts/guest-profile-posts';
import GuestProfileVideoPosts from '../../components/guest-profile-posts/videos/guest-profile-posts';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { IonRippleEffect } from '@ionic/react';

const GuestProfilePostsIndex: React.FC = () => {
    const [postCategory, setPostCategory] = useState<string>('images');
    const [swiper, setSwiper] = useState<any>(null);

    const handleButtonClick = (index: number) => {
        if (swiper !== null) {
            swiper.slideTo(index);
        }
    };

    const handleSlideChange = () => {
        if (swiper !== null) {
            switch (swiper.activeIndex) {
                case 0:
                    setPostCategory('images')
                    break;
                case 1:
                    setPostCategory('videos')
                    break;
            }
        }
    };

    return (
        <div className='w-full min-h-[300px] relative py-2'>
            <div className='w-full py-2 px-8 border-t border-slate-300 flex flex-row items-center justify-center gap-4 overflow-hidden relative'>
                <button onClick={() => { handleButtonClick(0); setPostCategory('images'); }}
                    className='w-8 h-8 ion-activatable ripple-parent rounded relative outline-none flex justify-center items-center text-blue-500'>
                    <GridsIcon className={`w-5 h-5 shrink-0 transition duration-200 ${postCategory === 'images' ? 'text-blue-600' : 'text-slate-800'}`} />
                    <IonRippleEffect></IonRippleEffect>
                </button>

                <button onClick={() => { handleButtonClick(1); setPostCategory('videos'); }}
                    className='w-8 h-8 ion-activatable ripple-parent rounded relative outline-none flex justify-center items-center text-blue-500'>
                    <VideosIcon className={`w-5 h-5 shrink-0 transition duration-200 ${postCategory === 'videos' ? 'text-blue-600' : 'text-slate-800'}`} />
                    <IonRippleEffect></IonRippleEffect>
                </button>
            </div>
            <Swiper className="mySwiper" onSwiper={(swiper: object) => { setSwiper(swiper) }}
            onSlideChange={handleSlideChange}>
                <SwiperSlide>
                    <GuestProfileImagePosts />
                </SwiperSlide>
                <SwiperSlide>
                    <GuestProfileVideoPosts category={postCategory} />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default GuestProfilePostsIndex;
