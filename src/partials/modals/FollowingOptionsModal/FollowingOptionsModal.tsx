import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IonHeader, IonToolbar, IonModal, IonRippleEffect } from '@ionic/react';
import {
    HiMiniChevronRight as RightIcon,
} from "react-icons/hi2";
import { RootState } from '../../../server/store';
import { toggleFollowingOptionsModal, toggleIgnoreOptionsModal } from '../../../server/store/reducers/modals';

const FollowingOptionsModal: React.FC = () => {
    const modals = useSelector((state: RootState) => state.modals);
    const dispatch = useDispatch();
    const modal = useRef<HTMLIonModalElement>(null);

    return (
        <>
            <IonModal ref={modal} isOpen={modals.followingOptionsModal} initialBreakpoint={1} breakpoints={[0, 1]}
                onDidDismiss={() => dispatch(toggleFollowingOptionsModal(false))}>
                <IonHeader class='shadow-none border-b border-slate-100'>
                    <IonToolbar class='shadow-none px-4 border-b border-slate-100 flex justify-center items-center'>
                        <div className='w-full flex items-center'>
                            <h4 className='w-full text-sm text-center'>
                                sara_miller
                            </h4>
                        </div>
                    </IonToolbar>
                </IonHeader>
                <div className='w-full relative flex flex-col gap-0'>
                    <button
                        onClick={() => { dispatch(toggleFollowingOptionsModal(false)); }}
                        className="inline-flex p-4 ion-activatable ripple-parent outline-none justify-between items-center cursor-pointer">
                        <span className="text-sm font-medium text-slate-900">
                            Unfollow
                        </span>
                        <IonRippleEffect></IonRippleEffect>
                    </button>
                    <button
                        onClick={() => { dispatch(toggleFollowingOptionsModal(false)); dispatch(toggleIgnoreOptionsModal(true)) }}
                        className="inline-flex p-4 ion-activatable ripple-parent outline-none justify-between items-center cursor-pointer">
                        <span className="text-sm font-medium text-slate-900">
                            Ignore
                        </span>
                        <RightIcon className='w-5 h-5 text-slate-500' />
                        <IonRippleEffect></IonRippleEffect>
                    </button>
                </div>
            </IonModal>
        </>
    );
};

export default FollowingOptionsModal;
