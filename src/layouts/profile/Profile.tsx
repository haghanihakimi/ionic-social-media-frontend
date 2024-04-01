import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IonPage, IonContent, IonRippleEffect, IonHeader, IonToolbar, IonRouterLink } from '@ionic/react';
import {
    HiMiniEllipsisVertical as MenuIcon,
} from "react-icons/hi2";
import './Profile.css';
import ProfilePostsIndex from '../../components/profile-posts/index';
import ProfileModal from '../../partials/modals/ProfileModal/ProfileModal';
import { toggleProfileModal } from '../../server/store/reducers/modals';
import { RootState } from '../../server/store';
import { letterizeNumbers } from '../../server/plugins';

const ProfileLayout: React.FC = () => {
    const dispatch = useDispatch();
    const modals = useSelector((state: RootState) => state.modals)

    return (
        <IonPage id='profile-container'>
            <IonContent fullscreen>

                <div className='w-full relative pb-[73px] pt-14'>
                    {/* back button */}
                    <IonHeader class='shadow-none fixed top-0'>
                        <IonToolbar class='shadow-none border-b border-slate-0 bg-slate-100 bg-opacity-90 backdrop-blur-2xl'>
                            <div className='w-full flex justify-end items-center px-4'>
                                {/* <button onClick={() => history.goBack()}
                                    className='w-7 h-7 ion-activatable ripple-parent text-slate-100 rounded-full bg-gradient-to-r from-secondary to-primary flex justify-center items-center'>
                                    <LeftIcon className='w-5 h-5 text-slate-100 -translate-x-[1px]' />
                                    <IonRippleEffect></IonRippleEffect>
                                </button> */}
                                <button onClick={() => dispatch(toggleProfileModal(true))}
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
                            {letterizeNumbers(6)}
                            <span className='text-xs font-medium'>
                                Posts
                            </span>
                        </h4>
                        <h4 className='inline-flex w-fit p-2 font-bold text-slate-800 flex-col justify-center text-center'>
                            {letterizeNumbers(124903)}
                            <span className='text-xs font-medium'>
                                Followers
                            </span>
                        </h4>
                        <h4 className='inline-flex w-fit p-2 font-bold text-slate-800 flex-col justify-center text-center'>
                            {letterizeNumbers(24)}
                            <span className='text-xs font-medium'>
                                Following
                            </span>
                        </h4>
                    </div>

                    {/* Edit Profile button */}
                    <div className='w-full px-8 mt-2'>
                        <IonRouterLink routerDirection='forward' routerLink='/profile'>
                            <button type='button' className='w-full ion-activatable ripple-parent outline-none px-2 py-4 bg-gradient-to-r from-secondary to-primary text-sm font-medium rounded-xl text-slate-100'>
                                <span className='text-slate-100'>
                                    Edit Profile
                                </span>
                                <IonRippleEffect></IonRippleEffect>
                            </button>
                        </IonRouterLink>
                    </div>

                    {/* post categories can be image + text and videos */}
                    <ProfilePostsIndex />



                    {/* modals and external popups */}
                    <ProfileModal />
                </div>

            </IonContent>
        </IonPage>
    );
};

export default ProfileLayout;
