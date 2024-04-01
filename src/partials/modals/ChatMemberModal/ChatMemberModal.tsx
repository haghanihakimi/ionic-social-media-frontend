import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IonModal, IonRippleEffect, IonRouterLink } from '@ionic/react';
import {
    HiOutlineUser as ProfileIcon, HiOutlineSpeakerXMark as MuteIcon,
    HiOutlineNoSymbol as BanIcon, HiOutlineUserMinus as RemoveUserIcon,
} from "react-icons/hi2";
import './ChatMemberModal.css';
import { RootState } from '../../../server/store';
import { toggleChatMemberModal, toggleProfileModal } from '../../../server/store/reducers/modals';

const ChatMemberModal: React.FC = () => {
    const modals = useSelector((state: RootState) => state.modals);
    const dispatch = useDispatch();
    const modal = useRef<HTMLIonModalElement>(null);

    return (
        <>
            <IonModal ref={modal} id='chatMemberModal' isOpen={modals.chatMemberModal} initialBreakpoint={1} breakpoints={[0, 1]}
                onDidDismiss={() => dispatch(toggleChatMemberModal(false))}>
                <div className='w-full relative flex flex-col pt-6'>
                    <button onClickCapture={() => dispatch(toggleChatMemberModal(false))}
                        className='w-full ion-activatable ripple-parent outline-none flex justify-between items-center text-secondary text-left text-sm px-4 py-3 border-b border-slate-100 last:border-none'>
                        <span className='inline-flex flex row items-center gap-2 text-slate-800'>
                            <ProfileIcon className='w-5 h-5 text-slate-500' />
                            View Profile
                        </span>
                        <IonRippleEffect></IonRippleEffect>
                    </button>
                    <button onClickCapture={() => dispatch(toggleChatMemberModal(false))}
                        className='w-full ion-activatable ripple-parent outline-none flex justify-between items-center text-secondary text-left text-sm px-4 py-3 border-b border-slate-100 last:border-none'>
                        <span className='inline-flex flex row items-center gap-2 text-slate-800'>
                            <MuteIcon className='w-5 h-5 text-slate-500' />
                            Mute sara_miller
                        </span>
                        <IonRippleEffect></IonRippleEffect>
                    </button>
                    <button onClickCapture={() => dispatch(toggleChatMemberModal(false))}
                        className='w-full ion-activatable ripple-parent outline-none flex justify-between items-center text-secondary text-left text-sm px-4 py-3 border-b border-slate-100 last:border-none'>
                        <span className='inline-flex flex row items-center gap-2 text-slate-800'>
                            <BanIcon className='w-5 h-5 text-slate-500' />
                            Ban sara_miller
                        </span>
                        <IonRippleEffect></IonRippleEffect>
                    </button>
                    <button onClickCapture={() => dispatch(toggleChatMemberModal(false))}
                        className='w-full ion-activatable ripple-parent outline-none flex justify-between items-center text-secondary text-left text-sm px-4 py-3 border-b border-slate-100 last:border-none'>
                        <span className='inline-flex flex row items-center gap-2 text-slate-800'>
                            <RemoveUserIcon className='w-5 h-5 text-slate-500' />
                            Remove sara_miller
                        </span>
                        <IonRippleEffect></IonRippleEffect>
                    </button>
                </div>
            </IonModal>
        </>
    );
};

export default ChatMemberModal;
