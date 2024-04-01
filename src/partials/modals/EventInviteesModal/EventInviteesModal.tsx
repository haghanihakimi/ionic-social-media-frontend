import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IonModal, IonHeader, IonContent, IonToolbar } from '@ionic/react';
import {
    HiMagnifyingGlass as SearchIcon, HiMiniCheck as CheckIcon,
} from "react-icons/hi2";
import { RootState } from '../../../server/store';
import { toggleEventInviteesList } from '../../../server/store/reducers/modals';

const EventInviteesListModal: React.FC = () => {
    const modal = useRef<HTMLIonModalElement>(null);
    const modals = useSelector((state: RootState) => state.modals);
    const dispatch = useDispatch();
    const page = useRef(null);

    return (
        <>
            <IonModal id="eventInviteesModal" ref={modal} isOpen={modals.eventInviteesList.modal}
                initialBreakpoint={0.75} breakpoints={[0, 0.75, 1]}
                onDidDismiss={() => dispatch(toggleEventInviteesList(false))}>
                <IonToolbar class='shadow-none px-4 border-b border-slate-200 flex justify-center items-center'>
                    <div className='w-full flex items-center shrink-0 pt-4'>
                        <h4 className='w-full text-sm text-center shrink-0'>
                            Event Invitees
                        </h4>
                    </div>
                    {/* Search bar/box */}
                    <div className='w-full sticky top-0 p-2 bg-white'>
                        <input type='text' placeholder='Search followers...' defaultValue={'sarah m'}
                            className='w-full py-2 pr-2 pl-9 rounded-lg text-sm text-slate-900 bg-slate-100 outline-none ring-8 ring-transparent transition duration-200 focus:ring-2 focus:ring-secondary border border-slate-300 peer' />
                        <SearchIcon className='w-5 h-5 text-slate-900 absolute top-0 left-4 bottom-0 my-auto transition duration-200 peer-focus:text-secondary' />
                    </div>
                </IonToolbar>
                <IonContent fullscreen className='w-full relative'>
                    <div className='w-full relative flex flex-col gap-1 p-2'>

                        {/* list */}
                        <div className='w-full p-2 flex flex-row items-center justify-between bg-slate-200 rounded-xl border border-slate-300'>
                            {/* profile image/name */}
                            <div className='w-auto relative flex justify-between items-center gap-3'>
                                <img src='https://images.unsplash.com/photo-1531853749260-4447dc77f7e8?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                    className='w-12 h-12 rounded-full object-cover' decoding='async' />
                                <p className='flex flex-col gap-0'>
                                    <span className='text-sm font-medium text-slate-800'>Sarah Miller</span>
                                    <span className='text-xs text-slate-500'>
                                        sara_miller
                                    </span>
                                </p>
                            </div>

                            {/* check icon */}
                            <span className='w-6 h-6 border border-slate-400 rounded-full inline-flex justify-center items-center'>
                                <CheckIcon className='w-5 h-5 text-primary' />
                            </span>
                        </div>

                    </div>
                </IonContent>
            </IonModal>
        </>
    );
};

export default EventInviteesListModal;
