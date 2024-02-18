import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IonHeader, IonToolbar, IonModal, IonRippleEffect } from '@ionic/react';
import {
    HiMiniChevronLeft as LeftIcon,
} from "react-icons/hi2";
import './UserProfileModal.css';
import { RootState } from '../../../server/store';
import { toggleUserProfileModal } from '../../../server/store/reducers/modals';

const FollowingModal: React.FC = () => {
    const modals = useSelector((state: RootState) => state.modals);
    const dispatch = useDispatch();
    const modal = useRef<HTMLIonModalElement>(null);

    return (
        <>
            <IonModal ref={modal} isOpen={modals.userProfileModal} initialBreakpoint={1} breakpoints={[0, 1]}
                onDidDismiss={() => dispatch(toggleUserProfileModal(false))}>
                <IonHeader class='shadow-none border-b border-slate-100'>
                    <IonToolbar class='shadow-none px-4 border-b border-slate-100 flex justify-center items-center'>
                        <div className='w-full flex justify-center items-center'>
                            <h4 className='w-full text-sm font-medium text-slate-600 text-center'>
                                sara_miller
                            </h4>
                        </div>
                    </IonToolbar>
                </IonHeader>
                <div className='w-full relative flex flex-col'>
                    <button className='w-full ion-activatable ripple-parent text-slate-800 text-left px-4 py-3 border-b border-slate-100 last:border-none'>
                        Block
                        <IonRippleEffect></IonRippleEffect>
                    </button>
                    <button className='w-full ion-activatable ripple-parent text-slate-800 text-left px-4 py-3 border-b border-slate-100 last:border-none'>
                        About Account
                        <IonRippleEffect></IonRippleEffect>
                    </button>
                    <button className='w-full ion-activatable ripple-parent text-slate-800 text-left px-4 py-3 border-b border-slate-100 last:border-none'>
                        Restrict
                        <IonRippleEffect></IonRippleEffect>
                    </button>
                    <button className='w-full ion-activatable ripple-parent text-slate-800 text-left px-4 py-3 border-b border-slate-100 last:border-none'>
                        Profile Link
                        <IonRippleEffect></IonRippleEffect>
                    </button>
                </div>
            </IonModal>
        </>
    );
};

export default FollowingModal;
