import { IonRippleEffect, IonRouterLink } from '@ionic/react';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Haptics } from '@capacitor/haptics';
import { Capacitor } from '@capacitor/core';
import { toggleChatOptionsModal } from '../../server/store/reducers/modals';
import { ChatsList } from '../../server/types/chats-list-types';
import { RootState } from '../../server/store';
import ChatOptionsModal from '../../partials/modals/ChatOptionsModal/ChatOptionsModal';
import './ChatsList.css';
import ProfileImagePartial from '../../partials/profile-image/ProfileImage';
import { letterizeNumbers, longPress } from '../../server/plugins';

const ChatsListComp: React.FC = () => {
    const modals = useSelector((state: RootState) => state.modals);
    const [chatInfo, setChatInfo] = useState<ChatsList>({
        chatId: 0,
        locked: false,
        muted: false,
    });
    const dispatch = useDispatch();
    const { startLongPress, cancelLongPress } = longPress();


    const toggleChatOptions = async () => {
        if (Capacitor.isNativePlatform()) {
            await Haptics.vibrate({ duration: 25 });
        }
        dispatch(toggleChatOptionsModal(true));
    }

    return (
        <div className='w-full flex flex-col gap-2 px-2 py-2'>

            {/* Rows */}
            <div onTouchStart={() => {
                startLongPress(toggleChatOptions); setChatInfo(prevState => ({
                    ...prevState,
                    chatId: 1,
                    locked: true,
                    muted: true
                }))
            }}
                onTouchEnd={cancelLongPress} onTouchMove={cancelLongPress}
                className='w-full ion-activatable ripple-parent text-secondary flex flex-row items-center justify-between gap-2 p-2 rounded-xl'>
                {/* image and name */}
                <div className='w-auto flex flex-row items-center gap-2 overflow-hidden'>
                    <ProfileImagePartial image='https://images.unsplash.com/photo-1531853749260-4447dc77f7e8?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' width={36} height={36} link='/chat/1' isStory />
                    <IonRouterLink routerDirection='forward' routerLink='/chat/1'>
                        <h3 className='flex flex-col text-sm text-slate-900 font-medium'>
                            <span>Sarah Miller</span>
                            <span className='text-xs text-slate-700 truncate text-nowrap'>
                                {`Can't wait to try it out! Can't wait to try it out! Can't wait to try it out! Can't wait to try it out! Can't wait to try it out!`}
                            </span>
                        </h3>
                    </IonRouterLink>
                </div>

                {/* notif counter */}
                <IonRouterLink routerDirection='forward' routerLink='/chat/1'>
                    <div className='flex flex-col gap-1 shrink-0 justify-center items-center'>
                        <span className='w-[18px] h-[18px] text-[10px] bg-primary text-slate-200 shrink-0 rounded-full flex justify-center items-center'>
                            {letterizeNumbers(24, 9)}
                        </span>
                        <span className='w-auto text-[11px] text-slate-500 shrink-0 rounded-full flex justify-center items-center'>
                            20:30
                        </span>
                    </div>
                </IonRouterLink>
                <IonRippleEffect></IonRippleEffect>
            </div>


            {/* Modals */}
            {
                modals.chatOptionsModal ? <ChatOptionsModal /> : ''
            }

        </div>
    );
};

export default ChatsListComp;