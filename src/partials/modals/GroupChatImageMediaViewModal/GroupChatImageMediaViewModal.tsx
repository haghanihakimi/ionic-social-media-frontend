import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IonToolbar, IonModal, IonHeader, IonRippleEffect } from '@ionic/react';
import {
    HiMiniChevronLeft as LeftIcon
} from "react-icons/hi2";
import './GroupChatImageMediaViewModal.css';
import { RootState } from '../../../server/store';
import { toggleGroupChatMediaImageView } from '../../../server/store/reducers/modals';

const GroupChatImageMediaViewModal: React.FC = () => {
    const modals = useSelector((state: RootState) => state.modals);
    const dispatch = useDispatch();
    const modal = useRef<HTMLIonModalElement>(null);

    return (
        <>
            <IonModal ref={modal} id='group-chat-media-image-view'
                isOpen={modals.groupChatMediaImageView.modal}
                onDidDismiss={() => dispatch(toggleGroupChatMediaImageView({ id: 0, modal: false }))}>
                <div className='w-full h-screen flex flex-col overflow-auto'>
                    <IonHeader className='w-full p-0 m-0 sticky top-0 shadow-none relative'>
                        <div className='w-full p-2 bg-slate-50 flex flex-row items-center border-b border-slate-200'>
                            <button onClick={() => dispatch(toggleGroupChatMediaImageView({ id: 0, modal: false }))}
                                className='w-7 h-7 ion-activatable ripple-parent text-slate-100 rounded-full bg-gradient-to-r from-secondary to-primary flex justify-center items-center'>
                                <LeftIcon className='w-5 h-5 text-slate-100 -translate-x-[1px]' />
                                <IonRippleEffect></IonRippleEffect>
                            </button>
                            <span className='px-2 text-sm font-medium text-slate-800'>
                                Admins &amp; Moderators
                            </span>
                        </div>
                    </IonHeader>
                    <div className='w-full my-auto relative flex flex-col gap-0'>
                        <img src='https://images.unsplash.com/photo-1709983967481-d738b90bd395?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                            className='w-full h-full object-contain relative rounded' />
                    </div>
                </div>
            </IonModal>
        </>
    );
};

export default GroupChatImageMediaViewModal;
