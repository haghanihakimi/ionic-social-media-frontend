import React, { useEffect, useRef, useState } from 'react';
import { BiSolidVideos as VideosIcon } from "react-icons/bi";
import { BsGrid3X3Gap as GridsIcon } from "react-icons/bs";
import ProfileImagePosts from './images-texts/profile-posts';
import ProfileVideoPosts from './videos/profile-video-posts';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { IonRippleEffect } from '@ionic/react';
import './index.css';
import UnderlinedTabs from '../../partials/tabs/underlined-tabs/UnderlinedTabs';

const ProfilePostsIndex: React.FC = () => {
    const [postCategory, setPostCategory] = useState<string>('images');
    const [swiper, setSwiper] = useState<any>(null);
    const selectedTab = useRef<null | HTMLDivElement>(null);

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
        <div id='profile-posts' className='w-full min-h-[300px] relative pt-2'>
            <div ref={selectedTab} className='w-full relative pt-2 px-8 border-t border-slate-200 flex flex-row items-center justify-center gap-0'>
                <button onClick={() => { handleButtonClick(0); setPostCategory('images'); }}
                    className={`w-10 h-8 ion-activatable ripple-parent relative outline-none flex justify-center items-center text-primary ${postCategory === "images" ? 'selected' : ''}`}>
                    <GridsIcon className={`w-5 h-5 shrink-0 transition duration-200 ${postCategory === 'images' ? 'text-primary' : 'text-slate-800'}`} />
                    <IonRippleEffect></IonRippleEffect>
                    {
                        postCategory === 'images' ?
                            <span className='w-full h-0.5 absolute bottom-0 left-0 bg-primary rounded-tr-full rounded-tl-full'>&nbsp;</span> : ''
                    }
                </button>

                <button onClick={() => { handleButtonClick(1); setPostCategory('videos'); }}
                    className={`w-10 h-8 ion-activatable ripple-parent relative outline-none flex justify-center items-center text-primary ${postCategory === "videos" ? 'selected' : ''}`}>
                    <VideosIcon className={`w-5 h-5 shrink-0 transition duration-200 ${postCategory === 'videos' ? 'text-primary' : 'text-slate-800'}`} />
                    <IonRippleEffect></IonRippleEffect>
                    {
                        postCategory === 'videos' ?
                            <span className='w-full h-0.5 absolute bottom-0 left-0 bg-primary rounded-tr-full rounded-tl-full'>&nbsp;</span> : ''
                    }
                </button>
            </div>
            <Swiper className="mySwiper" onSwiper={(swiper: object) => { setSwiper(swiper) }}
                autoHeight observer observeParents onSlideChange={handleSlideChange} id='posts-slider'>
                <SwiperSlide>
                    <div className='w-full relative' id='guest-profile-img-posts'>
                        <ProfileImagePosts />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full relative' id='guest-profile-videos-posts'>
                        <ProfileVideoPosts category={postCategory} />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default ProfilePostsIndex;
