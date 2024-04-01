import React, { useEffect, useRef, useState } from 'react';
import { BiSolidVideos as VideosIcon } from "react-icons/bi";
import { BsGrid3X3Gap as GridsIcon } from "react-icons/bs";
import GuestProfileImagePosts from '../../components/guest-profile-posts/images-texts/guest-profile-posts';
import GuestProfileVideoPosts from '../../components/guest-profile-posts/videos/guest-profile-posts';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { IonRippleEffect } from '@ionic/react';

const GuestProfilePostsIndex: React.FC = () => {
    const [postCategory, setPostCategory] = useState<string>('images');
    const [swiper, setSwiper] = useState<any>(null);
    const selectedTab = useRef<null | HTMLDivElement>(null);

    const toggleCategorySlide = (index: number) => {
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
        <div className='w-full min-h-[300px] relative pt-2'>
            <div ref={selectedTab} className='w-full pt-2 px-8 border-t border-slate-200 flex flex-row items-center justify-center gap-0 overflow-hidden relative'>
                <button onClick={() => { toggleCategorySlide(0); setPostCategory('images'); }}
                    className={`w-10 h-8 ion-activatable ripple-parent relative outline-none flex justify-center items-center text-primary`}>
                    <GridsIcon className={`w-5 h-5 shrink-0 transition duration-200 ${postCategory === 'images' ? 'text-primary' : 'text-slate-800'}`} />
                    <IonRippleEffect></IonRippleEffect>
                    {
                        postCategory === 'images' ?
                        <span className='w-full h-0.5 absolute bottom-0 left-0 bg-primary rounded-tr-full rounded-tl-full'>&nbsp;</span> : ''
                    }
                </button>

                <button onClick={() => { toggleCategorySlide(1); setPostCategory('videos'); }}
                    className={`w-10 h-8 ion-activatable ripple-parent relative outline-none flex justify-center items-center text-primary ${postCategory === 'videos' ? 'selected' : ''}`}>
                    <VideosIcon className={`w-5 h-5 shrink-0 transition duration-200 ${postCategory === 'videos' ? 'text-primary' : 'text-slate-800'}`} />
                    <IonRippleEffect></IonRippleEffect>
                    {
                        postCategory === 'videos' ?
                        <span className='w-full h-0.5 absolute bottom-0 left-0 bg-primary rounded-tr-full rounded-tl-full'>&nbsp;</span> : ''
                    }
                </button>
            </div>
            <Swiper className="mySwiper" onSwiper={(swiper: object) => { setSwiper(swiper) }}
                autoHeight observer observeParents onSlideChange={handleSlideChange}>
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
