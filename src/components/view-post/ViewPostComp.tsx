import React from 'react';
import { IonRippleEffect, IonHeader, IonToolbar, IonRouterLink } from '@ionic/react';
import { useLongPress } from '@reactuses/core';
import {
    HiMiniChevronLeft as LeftIcon, HiMiniUserPlus as FollowIcon,
    HiOutlineEllipsisHorizontal as OptionsIcon, HiOutlineHeart as HeartOutlineIcon,
    HiMiniHeart as HeartFillIcon, HiOutlineChatBubbleOvalLeft as CommentOutlineIcon,
} from "react-icons/hi2";
import {
    BsBookmarkHeart as BookmarkOutlineIcon, BsFillBookmarkHeartFill as BookmarkFillIcon,
} from "react-icons/bs";
import { Haptics } from '@capacitor/haptics';
import { Capacitor } from '@capacitor/core';
import { PiShareFat as ShareOutlineIcon } from "react-icons/pi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/pagination';
import './ViewPostComp.css';
import { useDispatch } from 'react-redux';
import { toggleCreateFavCatModal, togglePostCommentsModal, toggleSharePostModal, toggleViewPostProfileModal } from '../../server/store/reducers/modals';
import ProfileImagePartial from '../../partials/profile-image/ProfileImage';
import { longPress } from '../../server/plugins';

const ViewPostComp: React.FC = () => {
    const dispatch = useDispatch();
    const { startLongPress, cancelLongPress } = longPress();

    const longPressEvent = async () => {
        if (Capacitor.isNativePlatform()) {
            await Haptics.vibrate({ duration: 25 });
        }
        dispatch(toggleCreateFavCatModal(true));
    }

    return (
        <>
            <div id='postUserHeader' className='shadow-none relative'>
                <div className='shadow-none border-t border-slate-200 bg-slate-100 bg-opacity-90 backdrop-blur-2xl'>
                    <div className='w-full flex justify-between items-center p-2'>
                        <div className='w-auto relative flex flex-row gap-2 justify-start items-center'>
                            <ProfileImagePartial image='https://images.unsplash.com/photo-1531853749260-4447dc77f7e8'
                                width={32} height={32} link='/' isStory />
                            <IonRouterLink routerLink='/' routerDirection='forward'>
                                <p className='relative flex flex-col leading-none'>
                                    <span className='text-slate-800 text-sm font-medium'>
                                        Sarah Miller
                                    </span>
                                    <span className='text-slate-500 text-[11px] font-normal'>
                                        sara_miller
                                    </span>
                                </p>
                            </IonRouterLink>
                        </div>
                        <div className='w-fit relative flex flex-row gap-1 items-center justify-center'>
                            <button
                                className='w-8 h-8 ion-activatable ripple-parent text-primary rounded-full flex justify-center items-center'>
                                <FollowIcon className='w-6 h-6 text-primary' />
                                <IonRippleEffect></IonRippleEffect>
                            </button>
                            <button onClick={() => dispatch(toggleViewPostProfileModal({ profileId: 1, firstname: 'Sarah', lastname: 'Miller', username: 'sara_miller', modal: true }))}
                                className='w-8 h-8 ion-activatable ripple-parent text-primary rounded-full flex justify-center items-center'>
                                <OptionsIcon className='w-6 h-6 text-primary' />
                                <IonRippleEffect></IonRippleEffect>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* post view contents */}
            <div className='w-full relative mb-8 last:mb-2'>
                {/* post image slider and controls */}
                <div className='w-full relative flex flex-col gap-0'>
                    <Swiper id='view-posts-slider' className="mySwiper bg-slate-900"
                        autoHeight observer observeParents modules={[Pagination]}
                        pagination={{
                            dynamicBullets: true,
                            clickable: true,
                        }}>
                        <SwiperSlide>
                            <img src='https://images.unsplash.com/photo-1496692052106-d37cb66ab80c?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                className='w-full h-auto relative object-contain' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src='https://images.unsplash.com/photo-1509514026798-53d40bf1aa09?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                className='w-full h-auto relative object-contain' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src='https://images.unsplash.com/photo-1549989317-6f14743af1bf?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                className='w-full h-auto relative object-contain' />
                        </SwiperSlide>
                    </Swiper>
                    {/* controls */}
                    <div className='w-full flex flex-row items-center justify-between p-2'>
                        {/* like, comment & share */}
                        <div className='w-fit flex flex-row items-center gap-0'>
                            <button className='w-auto h-auto leading-none flex flex-col justify-center items-center bg-transparent text-[11px] text-secondary'>
                                <HeartOutlineIcon className='w-6 h-6 text-primary shrink-0' />
                                <span className='block px-1'>960K</span>
                            </button>
                            <button onClick={async () => {
                                if (Capacitor.isNativePlatform()) await Haptics.vibrate({ duration: 15 });
                                dispatch(togglePostCommentsModal({ postId: 1, modal: true }));
                            }}
                                className='w-auto h-auto leading-none flex flex-col justify-center items-center bg-transparent text-[11px] text-secondary'>
                                <CommentOutlineIcon className='w-6 h-6 text-primary shrink-0' />
                                <span className='block px-1'>245K</span>
                            </button>
                            <button onClick={async () => {
                                if (Capacitor.isNativePlatform()) await Haptics.vibrate({ duration: 15 });
                                dispatch(toggleSharePostModal({ postId: 1, modal: true }))
                            }}
                                className='w-auto h-auto leading-none flex flex-col justify-center items-center bg-transparent text-[11px] text-secondary'>
                                <ShareOutlineIcon className='w-6 h-6 text-primary shrink-0' />
                                <span className='block px-1'>240K</span>
                            </button>
                        </div>
                        {/* mark favorite */}
                        <button onTouchStart={() => startLongPress(longPressEvent)}
                            onTouchEnd={cancelLongPress} onTouchMove={cancelLongPress}
                            className='w-8 h-8 flex justify-center items-center bg-transparent'>
                            <BookmarkOutlineIcon className='w-[21px] h-[21px] text-primary' />
                        </button>
                    </div>
                </div>
                {/* post description */}
                <div className='w-full flex flex-col gap-0 relative'>
                    <p className='text-sm text-slate-800 px-2 font-normal'>
                        {`At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.`}
                        <span className='text-xs text-slate-600'>&nbsp;{`(25min)`}&nbsp;</span>
                    </p>
                </div>
            </div>
        </>
    );
};

export default ViewPostComp;
