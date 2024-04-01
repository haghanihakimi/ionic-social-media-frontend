import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IonHeader, IonToolbar, IonModal, IonRippleEffect } from '@ionic/react';
import './ChatOptionsModal.css';
import { RootState } from '../../../server/store';
import { toggleChatOptionsModal } from '../../../server/store/reducers/modals';
import {
    HiMiniChevronRight as RightIcon, HiOutlineShieldCheck as GuardIcon,
    HiOutlineArchiveBoxXMark as DeleteIcon, HiOutlineSpeakerXMark as MuteIcon
} from "react-icons/hi2";

const ChatOptionsModal: React.FC = () => {
    const modals = useSelector((state: RootState) => state.modals);
    const dispatch = useDispatch();
    const modal = useRef<HTMLIonModalElement>(null);

    return (
        <>
            <IonModal ref={modal} id='chatOptionsModal' isOpen={modals.chatOptionsModal} initialBreakpoint={1} breakpoints={[0, 1]}
                onDidDismiss={() => dispatch(toggleChatOptionsModal(false))}>
                <IonToolbar class='shadow-none px-4 border-b border-slate-200 flex justify-center items-center'>
                    <div className='w-full flex items-center'>
                        <h4 className='block w-full text-center pt-2'>
                            Chat Options
                        </h4>
                    </div>
                </IonToolbar>
                <div className='w-full relative flex flex-col gap-0'>
                    <button
                        className='w-full ion-activatable ripple-parent outline-none flex justify-between items-center text-secondary text-left text-sm px-4 py-3'>
                        <span className='inline-flex flex row items-center gap-2 text-slate-800'>
                            <GuardIcon className='w-5 h-5 text-slate-500' />
                            Lock Chat
                        </span>
                        {/* <RightIcon className='w-5 h-5 text-slate-500' /> */}
                        <IonRippleEffect></IonRippleEffect>
                    </button>
                    <button
                        className='w-full ion-activatable ripple-parent outline-none flex justify-between items-center text-secondary text-left text-sm px-4 py-3'>
                        <span className='inline-flex flex row items-center gap-2 text-slate-800'>
                            <DeleteIcon className='w-5 h-5 text-slate-500' />
                            Delete Chat
                        </span>
                        {/* <RightIcon className='w-5 h-5 text-slate-500' /> */}
                        <IonRippleEffect></IonRippleEffect>
                    </button>
                    <button
                        className='w-full ion-activatable ripple-parent outline-none flex justify-between items-center text-secondary text-left text-sm px-4 py-3'>
                        <span className='inline-flex flex row items-center gap-2 text-slate-800'>
                            <MuteIcon className='w-5 h-5 text-slate-500' />
                            Mute Chat
                        </span>
                        {/* <RightIcon className='w-5 h-5 text-slate-500' /> */}
                        <IonRippleEffect></IonRippleEffect>
                    </button>
                </div>
            </IonModal>
        </>
    );
};

export default ChatOptionsModal;
