import React, { useEffect, useState } from 'react';
import { IonPage, IonContent, IonHeader, IonToolbar, IonRippleEffect } from '@ionic/react';
import {
    HiMiniChevronLeft as LeftIcon, HiOutlineUserGroup as GroupIcon,
    HiOutlinePencil as PencilIcon
} from "react-icons/hi2";
import { useHistory } from "react-router-dom";
import ProfileImagePartial from '../../partials/profile-image/ProfileImage';
import './ChatGroupMemberList.css';
import { longPress } from '../../server/plugins';
import { useDispatch, useSelector } from 'react-redux';
import { toggleChatMemberModal } from '../../server/store/reducers/modals';
import { RootState } from '../../server/store';
import ChatMemberModal from '../../partials/modals/ChatMemberModal/ChatMemberModal';

const ChatGroupMemberListLayout: React.FC = () => {
    const history = useHistory();
    const modals = useSelector((state: RootState) => state.modals);
    const dispatch = useDispatch();
    const { startLongPress, cancelLongPress } = longPress();

    const showMemberModal = () => {
        dispatch(toggleChatMemberModal(true));
    }

    return (
        <IonPage id='chat-group-members-list'>

            <div className='w-full relative pb-[73px] pt-14 select-none'>

                {/* Heading & toolbar */}
                <IonHeader class='shadow-none fixed top-0'>
                    <IonToolbar class='shadow-none border-b border-slate-0 bg-slate-100 bg-opacity-90 backdrop-blur-2xl'>
                        <div className='w-full flex flex-row justify-between items-center gap-4 px-4'>
                            <div className='w-auto flex flex-row items-center justify-between gap-4'>
                                <button onClick={() => history.goBack()}
                                    className='w-7 h-7 shrink-0 ion-activatable ripple-parent text-slate-100 rounded-full bg-gradient-to-r from-secondary to-primary flex justify-center items-center'>
                                    <LeftIcon className='w-5 h-5 text-slate-100 -translate-x-[1px]' />
                                    <IonRippleEffect></IonRippleEffect>
                                </button>
                            </div>
                            <input type='text' placeholder='Search members...'
                                className='w-full p-2 text-sm text-slate-900 outline-none border-b-2 bg-transparent transition duration-200 focus:border-primary' />
                        </div>
                    </IonToolbar>
                </IonHeader>

                {/* members list */}
                <div className='w-full flex flex-col gap-1 p-2 relative'
                    onTouchStart={() => startLongPress(showMemberModal)}
                    onTouchEnd={cancelLongPress} onTouchMove={cancelLongPress}>
                    <div className='w-full relative text-secondary ion-activatable ripple-parent flex flex-row items-center justify-between border border-slate-300 rounded-xl bg-slate-200 p-2'>
                        {/* profile image & name */}
                        <div className='w-auto relative flex flex-row items-center gap-2'>
                            <div className='w-auto rounded-full shrink-0'>
                                <ProfileImagePartial image='https://images.unsplash.com/photo-1531853749260-4447dc77f7e8?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                    width={38} height={38} link='#' />
                            </div>
                            <h4 className='flex flex-col gap-0 text-sm text-slate-900 leading-none'>
                                <span>Sarah Miller</span>
                                <span className='text-xs text-slate-600'>sara_miller</span>
                            </h4>
                        </div>

                        <IonRippleEffect></IonRippleEffect>
                    </div>
                </div>

                {
                    modals.chatMemberModal ? <ChatMemberModal /> : ''
                }

            </div>

        </IonPage>
    );
};

export default ChatGroupMemberListLayout;
