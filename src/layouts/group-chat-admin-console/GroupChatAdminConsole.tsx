import { IonHeader, IonImg, IonPage, IonRippleEffect, IonRouterLink } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import {
    HiMiniChevronLeft as LeftIcon, HiOutlinePencil as PencilIcon,
    HiMiniChevronRight as RightIcon, HiOutlineTrash as TrashIcon,
} from "react-icons/hi2";
import { 
    MdOutlineAdminPanelSettings as AdminIcon,
} from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../server/store';
import GroupChatNameImageModal from '../../partials/modals/GroupChatNameImageModal/GroupChatNameImageModal';
import { toggleGroupChatAdminModeratorsModal, toggleGroupChatDeleteModal, toggleGroupChatNameImageModal } from '../../server/store/reducers/modals';
import GroupChatAdminModeratorsModal from '../../partials/modals/GroupChatAdminModeratorsModal/GroupChatAdminModeratorsModal';
import GroupChatDeleteModal from '../../partials/modals/GroupChatDeleteModal/GroupChatDeleteModal';

const GroupChatAdminConsoleLayout: React.FC = () => {
    const history = useHistory();
    const modals = useSelector((state: RootState) => state.modals);
    const dispatch = useDispatch();

    return (
        <IonPage>
            <div id='group-chat-media-container' className='w-full h-screen relative bg-slate-50 overflow-auto'>
                {/* header */}
                <IonHeader className='w-full p-0 m-0 sticky top-0 shadow-none relative'>
                    <div className='w-full p-2 bg-slate-50 flex flex-row items-center border-b border-slate-200'>
                        <button onClick={() => history.goBack()}
                            className='w-7 h-7 ion-activatable ripple-parent text-slate-100 rounded-full bg-gradient-to-r from-secondary to-primary flex justify-center items-center'>
                            <LeftIcon className='w-5 h-5 text-slate-100 -translate-x-[1px]' />
                            <IonRippleEffect></IonRippleEffect>
                        </button>
                        <span className='px-2 text-sm font-medium text-slate-800'>
                            Admin Console
                        </span>
                    </div>
                </IonHeader>

                {/* messages received and sent rows */}
                <div className='w-full flex flex-row items-center justify-start flex-wrap'>
                    <button onClick={() => dispatch(toggleGroupChatNameImageModal({id: 1, name: 'Group 1', description: 'group description', image: 'https://rb.gy/oitydy', modal: true}))}
                        className='w-full ion-activatable ripple-parent outline-none flex justify-between items-center text-secondary text-left px-2 py-3 border-b border-slate-200 last:border-none'>
                        <span className='inline-flex flex row items-center gap-2 text-slate-800'>
                            <PencilIcon className='w-5 h-5 text-slate-500' />
                            Group Name &amp; Image
                        </span>
                        <RightIcon className='w-5 h-5 text-slate-500' />
                        <IonRippleEffect></IonRippleEffect>
                    </button>
                    <button onClick={() => dispatch(toggleGroupChatAdminModeratorsModal({id: 1, modal: true}))}
                        className='w-full ion-activatable ripple-parent outline-none flex justify-between items-center text-secondary text-left px-2 py-3 border-b border-slate-200 last:border-none'>
                        <span className='inline-flex flex row items-center gap-2 text-slate-800'>
                            <AdminIcon className='w-5 h-5 text-slate-500' />
                            Admin &amp; Moderators
                        </span>
                        <RightIcon className='w-5 h-5 text-slate-500' />
                        <IonRippleEffect></IonRippleEffect>
                    </button>
                    <button onClick={() => dispatch(toggleGroupChatDeleteModal({id: 1, modal: true}))}
                        className='w-full ion-activatable ripple-parent outline-none flex justify-between items-center text-secondary text-left px-2 py-3 border-b border-slate-200 last:border-none'>
                        <span className='inline-flex flex row items-center gap-2 text-slate-800'>
                            <TrashIcon className='w-5 h-5 text-slate-500' />
                            Delete Group
                        </span>
                        <RightIcon className='w-5 h-5 text-slate-500' />
                        <IonRippleEffect></IonRippleEffect>
                    </button>
                </div>

                {
                    modals.groupChatNameImageModal.modal ? 
                    <GroupChatNameImageModal /> : ''
                }
                {
                    modals.groupChatAdminModeratorsModal.modal ? 
                    <GroupChatAdminModeratorsModal /> : ''
                }
                {
                    modals.groupChatDeleteModal.modal ? <GroupChatDeleteModal /> : ''
                }
            </div>
        </IonPage>
    );
};

export default GroupChatAdminConsoleLayout;