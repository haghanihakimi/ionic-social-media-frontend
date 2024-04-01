import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IonHeader, IonToolbar, IonModal, IonRippleEffect } from '@ionic/react';
import {
    HiMiniChevronRight as RightIcon,
} from "react-icons/hi2";
import './UserProfileModal.css';
import { RootState } from '../../../server/store';
import { toggleRestrictOptionsModal, toggleUserProfileModal } from '../../../server/store/reducers/modals';
import { toggleAboutAccount, toggleBlockAlert } from '../../../server/store/reducers/alerts';

const FollowingModal: React.FC = () => {
    const modals = useSelector((state: RootState) => state.modals);
    const dispatch = useDispatch();
    const modal = useRef<HTMLIonModalElement>(null);

    return (
        <>
            <IonModal ref={modal} id='userProfileModal' isOpen={modals.userProfileModal} initialBreakpoint={1} breakpoints={[0, 1]}
                onDidDismiss={() => dispatch(toggleUserProfileModal(false))}>
                <IonToolbar class='shadow-none px-4 border-b border-slate-200 flex justify-center items-center'>
                    <div className='w-full flex justify-center items-center outline-none'>
                        <h4 className='w-full text-sm font-medium text-slate-600 text-center outline-none'>
                            sara_miller
                        </h4>
                    </div>
                </IonToolbar>
                <div className='w-full relative flex flex-col'>
                    <button onClick={() => { dispatch(toggleBlockAlert(true)); dispatch(toggleUserProfileModal(false)) }}
                        className='w-full ion-activatable ripple-parent outline-none text-secondary text-left text-sm px-4 py-3 border-b border-slate-100 last:border-none'>
                        <span className='text-slate-800'>Block</span>
                        <IonRippleEffect></IonRippleEffect>
                    </button>
                    <button
                        onClick={() => { dispatch(toggleAboutAccount(true)); dispatch(toggleUserProfileModal(false)) }}
                        className='w-full ion-activatable ripple-parent outline-none text-secondary text-left text-sm px-4 py-3 border-b border-slate-100 last:border-none'>
                        <span className='text-slate-800'>
                            About Account
                        </span>
                        <IonRippleEffect></IonRippleEffect>
                    </button>
                    <button
                        onClick={() => { dispatch(toggleRestrictOptionsModal(true)); dispatch(toggleUserProfileModal(false)) }}
                        className='w-full ion-activatable ripple-parent outline-none flex justify-between items-center text-slate-800 text-left text-sm px-4 py-3 border-b border-slate-100 last:border-none'>
                        <span className='text-slate-800'>
                            Restrict
                        </span>
                        <RightIcon className='w-5 h-5 text-slate-500' />
                        <IonRippleEffect></IonRippleEffect>
                    </button>
                    <button className='w-full ion-activatable ripple-parent outline-none text-secondary text-left text-sm px-4 py-3 border-b border-slate-100 last:border-none'>
                        <span className='text-slate-800'>
                            Profile Link
                        </span>
                        <IonRippleEffect></IonRippleEffect>
                    </button>
                </div>
            </IonModal>
        </>
    );
};

export default FollowingModal;
