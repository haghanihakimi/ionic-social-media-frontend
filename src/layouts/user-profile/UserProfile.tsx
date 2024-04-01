import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IonPage, IonContent, IonRippleEffect, IonHeader, IonToolbar } from '@ionic/react';
import {
    HiMiniChevronDown as BottomIcon, HiMiniChevronLeft as LeftIcon,
    HiMiniEllipsisVertical as MenuIcon,
} from "react-icons/hi2";
import { useHistory } from "react-router-dom";
import './UserProfile.css';
import IgnoreOptionsModal from '../../partials/modals/IgnoreOptionsModal/IgnoreOptionsModal';
import UserProfileModal from '../../partials/modals/UserProfileModal/UserProfileModal';
import FollowingOptionsModal from '../../partials/modals/FollowingOptionsModal/FollowingOptionsModal';
import BlockAlert from '../../partials/alerts/block-alert/block-alert';
import AboutAccount from '../../partials/alerts/about-account/about-account';
import RestrictOptionsModal from '../../partials/modals/RestrictOptionsModal/RestrictOptionsModal';
import GuestProfilePostsIndex from '../../components/guest-profile-posts';
import { toggleFollowingOptionsModal, toggleUserProfileModal } from '../../server/store/reducers/modals';
import { RootState } from '../../server/store';
import { letterizeNumbers } from '../../server/plugins';

const UserProfile: React.FC = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const modals = useSelector((state: RootState) => state.modals);
    const alerts = useSelector((state: RootState) => state.alerts);

    return (
        <IonPage id='profile-container'>
            <IonContent fullscreen>

                <div className='w-full relative pb-[73px] pt-14'>
                    {/* back button */}
                    <IonHeader class='shadow-none fixed top-0'>
                        <IonToolbar class='shadow-none border-b border-slate-0 bg-slate-100 bg-opacity-90 backdrop-blur-2xl'>
                            <div className='w-full flex justify-between items-center px-4'>
                                <button onClick={() => history.goBack()}
                                    className='w-8 h-8 ion-activatable ripple-parent text-slate-100 rounded-full bg-gradient-to-r from-secondary to-primary flex justify-center items-center'>
                                    <LeftIcon className='w-5 h-5 text-slate-100 -translate-x-[1px]' />
                                    <IonRippleEffect></IonRippleEffect>
                                </button>
                                <button onClick={() => dispatch(toggleUserProfileModal(true))}
                                    className='w-8 h-8 ion-activatable ripple-parent text-primary rounded-full flex justify-center items-center'>
                                    <MenuIcon className='w-5 h-5 text-primary' />
                                    <IonRippleEffect></IonRippleEffect>
                                </button>
                            </div>
                        </IonToolbar>
                    </IonHeader>

                    {/* profile image */}
                    <div className='w-full flex justify-center items-center mt-2 rounded-xl'>
                        <img className='w-24 h-24 object-cover shadow-md rounded-xl' decoding='async'
                            src="https://images.unsplash.com/photo-1531853749260-4447dc77f7e8?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />
                    </div>

                    {/* profile name/username */}
                    <div className='w-full mt-3 relative'>
                        <h2 className='max-w-[200px] mx-auto truncat text-lg font-bold text-slate-900 text-center flex flex-col'>
                            Sarah Miller
                            <span className='text-slate-500 text-sm -translate-y-1 font-medium'>
                                sara_miller
                            </span>
                        </h2>
                    </div>

                    {/* profile follower info */}
                    <div className='w-full flex flex-row gap-4 relative px-8 justify-center items-center mt-2'>
                        <h4 className='inline-flex w-fit p-2 font-bold text-slate-800 flex-col justify-center text-center'>
                            {letterizeNumbers(3)}
                            <span className='text-xs font-medium'>
                                Posts
                            </span>
                        </h4>
                        <h4 className='inline-flex w-fit p-2 font-bold text-slate-800 flex-col justify-center text-center'>
                            {letterizeNumbers(364542)}
                            <span className='text-xs font-medium'>
                                Followers
                            </span>
                        </h4>
                        <h4 className='inline-flex w-fit p-2 font-bold text-slate-800 flex-col justify-center text-center'>
                            {letterizeNumbers(124)}
                            <span className='text-xs font-medium'>
                                Following
                            </span>
                        </h4>
                    </div>

                    {/* follow button */}
                    {/* <div className='w-full px-8 mt-2'>
                    <button type='button' className='w-full ion-activatable ripple-parent outline-none px-2 py-4 bg-gradient-to-r from-secondary to-primary text-sm font-medium rounded-xl text-slate-100'>
                        <span className='text-slate-100'>Follow</span>
                        <IonRippleEffect></IonRippleEffect>
                    </button>
                </div> */}

                    {/* following button */}
                    <div className='w-full px-8 mt-2 relative'>
                        <button type='button' onClick={() => dispatch(toggleFollowingOptionsModal(true))}
                            className='w-full ion-activatable ripple-parent outline-none px-2 py-4 bg-gradient-to-r from-secondary to-primary text-sm font-medium rounded-xl text-slate-100 flex flex-row items-center justify-center gap-1'>
                            <span className='text-slate-100'>Following</span>
                            <BottomIcon className='w-4 h-4 text-slate-100 font-medium' />
                            <IonRippleEffect></IonRippleEffect>
                        </button>
                    </div>

                    {/* post categories can be image + text and videos */}
                    <GuestProfilePostsIndex />



                    {/* modals and external popups */}
                    {
                        modals.followingOptionsModal ? <FollowingOptionsModal /> : ''
                    }
                    {
                        modals.ignoreOptionsModal ? <IgnoreOptionsModal /> : ''
                    }
                    {
                        modals.userProfileModal ? <UserProfileModal /> : ''
                    }
                    {
                        alerts.blockAlert ? <BlockAlert /> : ''
                    }
                    {
                        alerts.aboutAccount ? <AboutAccount /> : ''
                    }
                    {
                        modals.restrictOptionsModal ? <RestrictOptionsModal /> : ''
                    }

                </div>

            </IonContent>
        </IonPage>
    );
};

export default UserProfile;
