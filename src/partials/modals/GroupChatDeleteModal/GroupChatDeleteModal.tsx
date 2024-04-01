import React, { useRef } from 'react';
import { IonHeader, IonRippleEffect, IonModal } from '@ionic/react';
import {
    HiMiniChevronLeft as LeftIcon, HiMiniArrowUturnLeft as UndoIcon,
    HiOutlineShieldCheck as AdminCheckIcon,
} from "react-icons/hi2";
import {
    TbBackslash as BackSlashIcon,
} from "react-icons/tb";
import { MdOutlineFolderDelete as FolderDeleteIcon, } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../server/store';
import { toggleGroupChatDeleteModal } from '../../../server/store/reducers/modals';
import './GroupChatDeleteModal.css';

const GroupChatDeleteModal: React.FC = () => {
    const modals = useSelector((state: RootState) => state.modals);
    const dispatch = useDispatch();
    const modal = useRef<HTMLIonModalElement>(null);

    return (
        <IonModal ref={modal} id='group-chat-admin-moderators'
            isOpen={modals.groupChatDeleteModal.modal}
            onDidDismiss={() => dispatch(toggleGroupChatDeleteModal({ id: 0, modal: false }))}>

            <div className='w-full relative overflow-auto'>
                {/* Heading & toolbar */}
                <IonHeader className='w-full p-0 m-0 sticky top-0 shadow-none relative'>
                    <div className='w-full p-2 bg-slate-50 flex flex-row items-center border-b border-slate-200'>
                        <button onClick={() => dispatch(toggleGroupChatDeleteModal({ id: 0, modal: false }))}
                            className='w-7 h-7 ion-activatable ripple-parent shrink-0 text-slate-100 rounded-full bg-gradient-to-r from-secondary to-primary flex justify-center items-center'>
                            <LeftIcon className='w-5 h-5 text-slate-100 -translate-x-[1px]' />
                            <IonRippleEffect></IonRippleEffect>
                        </button>
                        <span className='px-2 text-sm font-medium text-slate-800'>
                            Delete Group Chat
                        </span>
                    </div>
                </IonHeader>

                {/* contents */}
                <section className='w-full relative px-2'>
                    <p className='px-4 pt-4 pb-0 text-sm text-slate-800'>
                        {`You're about to delete HTML, CSS & JS group chat:`}
                    </p>
                    <ul className='py-2 px-4 text-slate-700 text-sm'>
                        <li className='flex justify-start items-center gap-2 py-1'>
                            <span className='relative w-6 h-6 shrink-0 flex justify-center items-center'>
                                <UndoIcon className='w-4 h-4 text-slate-500' />
                                <BackSlashIcon className='w-5 h-5 absolute top-0 left-0 bottom-0 right-0 m-auto text-slate-500' />
                            </span>
                            {`This action is irreversible.`}
                        </li>
                        <li className='flex justify-start items-center gap-2 py-1 leading-tight'>
                            <span className='relative w-6 h-6 shrink-0 flex justify-center items-center'>
                                <FolderDeleteIcon className='w-5 h-5 text-slate-500' />
                            </span>
                            {`All messages, files/media and members will be removed permanently.`}
                        </li>
                        <li className='flex justify-start items-center gap-2 py-1 leading-tight'>
                            <span className='relative w-6 h-6 shrink-0 flex justify-center items-center'>
                                <AdminCheckIcon className='w-5 h-5 text-slate-500' />
                            </span>
                            {`Other admins must confirm this action.`}
                        </li>
                    </ul>
                    <button className='w-full ion-activatable ripple-parent font-medium text-center mt-2 p-4 text-slate-50 rounded-xl bg-red-500'>
                        Delete Group Chat
                        <IonRippleEffect></IonRippleEffect>
                    </button>
                </section>
            </div>

        </IonModal>
    );
};

export default GroupChatDeleteModal;
