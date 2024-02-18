import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IonHeader, IonToolbar, IonModal, IonRippleEffect } from '@ionic/react';
import {
    HiMiniChevronLeft as LeftIcon,
} from "react-icons/hi2";
import './RestrictOptionsModal.css';
import { RootState } from '../../../server/store';
import { toggleRestrictOptionsModal, toggleUserProfileModal } from '../../../server/store/reducers/modals';

const RestrictOptionsModal: React.FC = () => {
    const modals = useSelector((state: RootState) => state.modals);
    const dispatch = useDispatch();
    const modal = useRef<HTMLIonModalElement>(null);

    return (
        <>
            <IonModal ref={modal} isOpen={modals.restrictOptionsModal} initialBreakpoint={1} breakpoints={[0, 1]}
                onDidDismiss={() => dispatch(toggleRestrictOptionsModal(false))}>
                <IonHeader class='shadow-none border-b border-slate-100'>
                    <IonToolbar class='shadow-none px-4 border-b border-slate-100 flex justify-center items-center'>
                        <div className='w-full flex items-center'>
                            <button className='w-8 h-8 shrink-0 flex justify-center items-center rounded'
                                onClick={() => { dispatch(toggleRestrictOptionsModal(false)); dispatch(toggleUserProfileModal(true)); }}>
                                <LeftIcon className='w-6 h-6 text-blue-600' />
                            </button>
                            <h4 className='block w-fit translate-x-16'>
                                {`user won't see:`}
                            </h4>
                        </div>
                    </IonToolbar>
                </IonHeader>
                <div className='w-full relative flex flex-col gap-0'>
                    <label className="inline-flex p-4 ion-activatable ripple-parent outline-none justify-between items-center cursor-pointer">
                        <input type="checkbox" value="Posts" name='posts' className="sr-only peer hidden invisible" />
                        <span className="text-sm font-medium text-slate-900">
                            Posts
                        </span>
                        <div className="relative w-9 h-5 bg-gray-300 border border-slate-400 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-slate-400 after:content-[''] after:absolute after:top-0 after:bottom-0 after:my-auto after:-start-[3px] after:bg-white after:border-gray-400 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        <IonRippleEffect></IonRippleEffect>
                    </label>
                    <label className="inline-flex p-4 ion-activatable ripple-parent outline-none justify-between items-center cursor-pointer">
                        <input type="checkbox" value="Stories" name='stories' className="sr-only peer hidden invisible" />
                        <span className="text-sm font-medium text-slate-900">
                            Stories
                        </span>
                        <div className="relative w-9 h-5 bg-gray-300 border border-slate-400 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-slate-400 after:content-[''] after:absolute after:top-0 after:bottom-0 after:my-auto after:-start-[3px] after:bg-white after:border-gray-400 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        <IonRippleEffect></IonRippleEffect>
                    </label>
                </div>
            </IonModal>
        </>
    );
};

export default RestrictOptionsModal;
