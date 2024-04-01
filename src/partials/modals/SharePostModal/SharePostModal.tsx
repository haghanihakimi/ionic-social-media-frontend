import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IonModal, IonHeader, IonContent, IonToolbar } from '@ionic/react';
import {
    HiMagnifyingGlass as SearchIcon
} from "react-icons/hi2";
import { RootState } from '../../../server/store';
import { toggleSharePostModal } from '../../../server/store/reducers/modals';
import './SharePostModal.css';

const SharePostModal: React.FC = () => {
    const modal = useRef<HTMLIonModalElement>(null);
    const modals = useSelector((state: RootState) => state.modals);
    const dispatch = useDispatch();

    return (
        <>
            <IonModal id="eventInviteesModal" ref={modal} isOpen={modals.sharePostModal.modal}
                initialBreakpoint={0.5} breakpoints={[0, 0.5, 1]}
                onDidDismiss={() => dispatch(toggleSharePostModal({ postId: 0, modal: false }))}>
                <IonToolbar class='bg-slate-50 bg-opacity-90 backdrop-blur-lg shadow-none px-4 border-b border-slate-200 flex justify-center items-center leading-none'>
                    <span className='p-0 m-0'>&nbsp;</span>
                    {/* serach box */}
                    <div className='w-full relative flex justify-center items-center top-0 z-10 mb-4'>
                        <input type='text' placeholder='Search...' defaultValue={'sarah m'}
                            className='w-full py-2 pr-2 pl-9 rounded-lg text-sm text-slate-900 bg-slate-100 outline-none ring-8 ring-transparent transition duration-200 focus:ring-2 focus:ring-secondary border border-slate-300 peer' />
                        <SearchIcon className='w-6 h-6 text-slate-900 absolute top-0 left-2 bottom-0 my-auto transition duration-200 peer-focus:text-secondary' />
                    </div>
                </IonToolbar>
                <IonContent fullscreen className='w-full relative'>
                    <div className='w-full relative flex flex-col gap-1 px-2 pt-0 pb-2'>
                        {/* comments rows */}
                        <div className='w-full py-2 flex flex-row items-center justify-between'>
                            {/* profile image and comment */}
                            <div className='w-full flex flex-row justify-between items-center gap-1'>
                                {/* image */}
                                <img src='https://images.unsplash.com/photo-1531853749260-4447dc77f7e8?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                    className='w-8 h-8 rounded-full object-cover' />
                                {/* name & comment */}
                                <div className='flex flex-col leading-none w-full pl-1'>
                                    <h4 className='flex flex-row items-center gap-2 text-sm text-slate-800 font-medium'>
                                        Sarah Miller
                                    </h4>
                                    <span className='text-xs text-slate-500 leading-none'>
                                        {`sarah_miller`}
                                    </span>
                                </div>
                                {/* reaction */}
                                <button className='w-fit px-2 py-1.5 text-sm text-primary font-medium flex justify-center items-center rounded-xl'>
                                    Share
                                </button>
                            </div>
                        </div>
                    </div>
                </IonContent>
            </IonModal>
        </>
    );
};

export default SharePostModal;
