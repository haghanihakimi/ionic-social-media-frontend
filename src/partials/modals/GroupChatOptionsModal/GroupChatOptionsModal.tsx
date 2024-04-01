import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IonHeader, IonToolbar, IonModal, IonRippleEffect, IonRouterLink } from '@ionic/react';
import {
    HiOutlineLockClosed as LockIcon, HiOutlinePencil as PencilIcon,
    HiMiniChevronRight as RightIcon, HiOutlineBellSlash as MuteNotificationsIcon,
    HiOutlineShieldExclamation as AdminIcon, HiOutlineShare as ShareIcon,
} from "react-icons/hi2";
import { MdOutlinePermMedia as MediaIcon } from "react-icons/md";
import './GroupChatOptionsModal.css';
import { RootState } from '../../../server/store';
import { toggleGroupChatOptionsModal } from '../../../server/store/reducers/modals';

const GroupChatOptionsModal: React.FC = () => {
    const modals = useSelector((state: RootState) => state.modals);
    const dispatch = useDispatch();
    const modal = useRef<HTMLIonModalElement>(null);

    return (
        <>
            <IonModal ref={modal} id='group-chat-options-modal' isOpen={modals.groupChatOptionsModal} initialBreakpoint={1} breakpoints={[0, 1]}
                onDidDismiss={() => dispatch(toggleGroupChatOptionsModal(false))}>
                <IonToolbar class='shadow-none px-4 border-b border-slate-200 flex justify-center items-center'>
                    <div className='w-full flex items-center'>
                        <h4 className='block w-full text-center'>
                            HTML, CSS & JS Group
                        </h4>
                    </div>
                </IonToolbar>
                <div className='w-full relative flex flex-col gap-0'>
                    <label className="inline-flex p-4 text-secondary ion-activatable ripple-parent outline-none justify-between items-center cursor-pointer">
                        <input type="checkbox" value="Posts" name='posts' className="sr-only peer hidden invisible" />
                        <span className='inline-flex flex row items-center gap-2 text-sm text-slate-800'>
                            <MuteNotificationsIcon className='w-5 h-5 text-slate-500' />
                            Mute Notifications
                        </span>
                        <div className="relative w-9 h-5 bg-gray-300 border border-slate-400 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-slate-400 after:content-[''] after:absolute after:top-0 after:bottom-0 after:my-auto after:-start-[3px] after:bg-white after:border-gray-400 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-secondary peer-checked:to-primary"></div>
                        <IonRippleEffect></IonRippleEffect>
                    </label>
                    <label className="inline-flex p-4 text-secondary ion-activatable ripple-parent outline-none justify-between items-center cursor-pointer">
                        <input type="checkbox" value="Stories" name='stories' className="sr-only peer hidden invisible" />
                        <span className='inline-flex flex row items-center gap-2 text-sm text-slate-800'>
                            <LockIcon className='w-5 h-5 text-slate-500' />
                            Private Group
                        </span>
                        <div className="relative w-9 h-5 bg-gray-300 border border-slate-400 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-slate-400 after:content-[''] after:absolute after:top-0 after:bottom-0 after:my-auto after:-start-[3px] after:bg-white after:border-gray-400 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-secondary peer-checked:to-primary"></div>
                        <IonRippleEffect></IonRippleEffect>
                    </label>
                    <button
                        className='w-full ion-activatable ripple-parent outline-none flex justify-between items-center text-secondary text-left text-sm p-4'>
                        <span className='text-sm inline-flex flex row items-center gap-2 text-slate-800'>
                            <ShareIcon className='w-5 h-5 text-slate-500' />
                            Group Link
                        </span>
                        <IonRippleEffect></IonRippleEffect>
                    </button>
                    <IonRouterLink routerDirection='forward' routerLink='/group/chat/media/1'>
                        <button onClick={() => dispatch(toggleGroupChatOptionsModal(false))}
                            className='w-full ion-activatable ripple-parent outline-none flex justify-between items-center text-secondary text-left text-sm p-4'>
                            <span className='text-sm inline-flex flex row items-center gap-2 text-slate-800'>
                                <MediaIcon className='w-5 h-5 text-slate-500' />
                                Files &amp; Media
                            </span>
                            <RightIcon className='w-5 h-5 text-slate-500' />
                            <IonRippleEffect></IonRippleEffect>
                        </button>
                    </IonRouterLink>
                    <IonRouterLink routerDirection='forward' routerLink='/group/chat/admin/console/1'>
                        <button onClick={() => dispatch(toggleGroupChatOptionsModal(false))}
                            className='w-full ion-activatable ripple-parent outline-none flex justify-between items-center text-secondary text-left text-sm p-4'>
                            <span className='text-sm inline-flex flex row items-center gap-2 text-slate-800'>
                                <AdminIcon className='w-5 h-5 text-slate-500' />
                                Admin
                            </span>
                            <RightIcon className='w-5 h-5 text-slate-500' />
                            <IonRippleEffect></IonRippleEffect>
                        </button>
                    </IonRouterLink>
                </div>
            </IonModal>
        </>
    );
};

export default GroupChatOptionsModal;
