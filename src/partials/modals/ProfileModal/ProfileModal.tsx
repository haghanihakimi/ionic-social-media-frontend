import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IonModal, IonRippleEffect, IonRouterLink } from '@ionic/react';
import {
    HiMiniChevronRight as RightIcon, HiOutlineCog6Tooth as SettingsIcon,
    HiOutlineHeart as HeartIcon, HiOutlineCalendarDays as CalendarIcon,
    HiOutlineUserGroup as GroupsIcon, HiNoSymbol as BlockIcon,
    HiArrowRightOnRectangle as SignoutIcon,
} from "react-icons/hi2";
import './ProfileModal.css';
import { RootState } from '../../../server/store';
import { toggleProfileModal } from '../../../server/store/reducers/modals';

const ProfileModal: React.FC = () => {
    const modals = useSelector((state: RootState) => state.modals);
    const dispatch = useDispatch();
    const modal = useRef<HTMLIonModalElement>(null);

    return (
        <>
            <IonModal ref={modal} id='profileModal' isOpen={modals.profileModal} initialBreakpoint={1} breakpoints={[0, 1]}
                onDidDismiss={() => dispatch(toggleProfileModal(false))}>
                <div className='w-full relative flex flex-col pt-6'>
                    <IonRouterLink routerDirection='forward' routerLink='/settings' className='border-b border-slate-100 last:border-none'>
                        <button onClickCapture={() => dispatch(toggleProfileModal(false))}
                            className='w-full ion-activatable ripple-parent outline-none flex justify-between items-center text-secondary text-left text-sm px-4 py-3'>
                            <span className='inline-flex flex row items-center gap-2 text-slate-800'>
                                <SettingsIcon className='w-5 h-5 text-slate-500' />
                                Settings
                            </span>
                            <RightIcon className='w-5 h-5 text-slate-500' />
                            <IonRippleEffect></IonRippleEffect>
                        </button>
                    </IonRouterLink>
                    <IonRouterLink routerDirection='forward' routerLink='/groups' className='border-b border-slate-100 last:border-none'>
                        <button onClickCapture={() => dispatch(toggleProfileModal(false))}
                            className='w-full ion-activatable ripple-parent outline-none flex justify-between items-center text-secondary text-left text-sm px-4 py-3'>
                            <span className='inline-flex flex row items-center gap-2 text-slate-800'>
                                <GroupsIcon className='w-5 h-5 text-slate-500' />
                                Groups
                            </span>
                            <RightIcon className='w-5 h-5 text-slate-500' />
                            <IonRippleEffect></IonRippleEffect>
                        </button>
                    </IonRouterLink>
                    <IonRouterLink routerDirection='forward' routerLink='/blocking' className='border-b border-slate-100 last:border-none'>
                        <button onClickCapture={() => dispatch(toggleProfileModal(false))}
                            className='w-full ion-activatable ripple-parent outline-none flex justify-between items-center text-secondary text-left text-sm px-4 py-3'>
                            <span className='inline-flex flex row items-center gap-2 text-slate-800'>
                                <BlockIcon className='w-5 h-5 text-slate-500' />
                                Block List
                            </span>
                            <RightIcon className='w-5 h-5 text-slate-500' />
                            <IonRippleEffect></IonRippleEffect>
                        </button>
                    </IonRouterLink>
                    <IonRouterLink routerDirection='forward' routerLink='/events' className='border-b border-slate-100 last:border-none'>
                        <button onClickCapture={() => dispatch(toggleProfileModal(false))}
                            className='w-full ion-activatable ripple-parent outline-none flex justify-between items-center text-secondary text-left text-sm px-4 py-3'>
                            <span className='inline-flex flex row items-center gap-2 text-slate-800'>
                                <CalendarIcon className='w-5 h-5 text-slate-500' />
                                Events
                            </span>
                            <RightIcon className='w-5 h-5 text-slate-500' />
                            <IonRippleEffect></IonRippleEffect>
                        </button>
                    </IonRouterLink>
                    <IonRouterLink routerDirection='forward' routerLink='/favorites' className='border-b border-slate-100 last:border-none'>
                        <button onClickCapture={() => dispatch(toggleProfileModal(false))}
                            className='w-full ion-activatable ripple-parent outline-none flex justify-between items-center text-secondary text-left text-sm px-4 py-3'>
                            <span className='inline-flex flex row items-center gap-2 text-slate-800'>
                                <HeartIcon className='w-5 h-5 text-slate-500' />
                                Favorites
                            </span>
                            <RightIcon className='w-5 h-5 text-slate-500' />
                            <IonRippleEffect></IonRippleEffect>
                        </button>
                    </IonRouterLink>
                    <IonRouterLink routerDirection='forward' routerLink='/login' className='border-b border-slate-100 last:border-none'>
                        <button onClickCapture={() => dispatch(toggleProfileModal(false))}
                            className='w-full ion-activatable ripple-parent outline-none flex justify-between items-center text-secondary text-left text-sm px-4 py-3'>
                            <span className='inline-flex flex row items-center gap-2 text-slate-800'>
                                <SignoutIcon className='w-5 h-5 text-slate-500' />
                                Sign Out
                            </span>
                            <IonRippleEffect></IonRippleEffect>
                        </button>
                    </IonRouterLink>
                </div>
            </IonModal>
        </>
    );
};

export default ProfileModal;
