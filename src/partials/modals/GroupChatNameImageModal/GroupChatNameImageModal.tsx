import React, { useRef, useState } from 'react';
import { IonPage, IonContent, IonHeader, IonToolbar, IonRippleEffect, IonModal } from '@ionic/react';
import {
    HiMiniChevronLeft as LeftIcon, HiOutlineUserGroup as GroupIcon,
    HiOutlinePencil as PencilIcon
} from "react-icons/hi2";
import { GroupChatNameImageForm } from '../../../server/types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../server/store';
import { toggleGroupChatNameImageModal } from '../../../server/store/reducers/modals';
import './GroupChatNameImageModal.css';

const GroupChatNameImageModal: React.FC = () => {
    const modals = useSelector((state: RootState) => state.modals);
    const dispatch = useDispatch();
    const modal = useRef<HTMLIonModalElement>(null);
    const [groupForm, setGroupForm] = useState<GroupChatNameImageForm>({
        name: modals.groupChatNameImageModal.name,
        description: modals.groupChatNameImageModal.description,
        image: '',
    });

    return (
        <IonModal ref={modal} id='group-chat-name-image'
            isOpen={modals.groupChatNameImageModal.modal}
            onDidDismiss={() => dispatch(toggleGroupChatNameImageModal({ id: 0, name: '', description: '', image: '', modal: false }))}>

            <div className='w-full relative'>
                {/* Heading & toolbar */}
                <IonHeader className='w-full p-0 m-0 sticky top-0 shadow-none relative'>
                    <div className='w-full p-2 bg-slate-50 flex flex-row items-center border-b border-slate-200'>
                        <button onClick={() => dispatch(toggleGroupChatNameImageModal({ id: 0, name: '', description: '', image: '', modal: false }))}
                            className='w-7 h-7 ion-activatable ripple-parent text-slate-100 rounded-full bg-gradient-to-r from-secondary to-primary flex justify-center items-center'>
                            <LeftIcon className='w-5 h-5 text-slate-100 -translate-x-[1px]' />
                            <IonRippleEffect></IonRippleEffect>
                        </button>
                        <span className='px-2 text-sm font-medium text-slate-800'>
                            Group Name &amp; Image
                        </span>
                    </div>
                </IonHeader>

                {/* contents */}
                <section className='w-full relative py-2 px-4 flex flex-col gap-2 items-start justify-start'>
                    {/* group name and image */}
                    <div className='w-full flex flex-row justify-start items-center gap-2'>
                        {/* image */}
                        <div className='w-16 h-16 relative rounded-full shrink-0 flex justify-center items-center border border-slate-300'>
                            {
                                modals.groupChatNameImageModal.image ?
                                    <img src={modals.groupChatNameImageModal.image}
                                        className='w-16 h-16 object-cover rounded-full' />
                                    : <GroupIcon className='w-8 h-8 text-slate-500' />
                            }
                            <span className='absolute w-5 h-5 bg-slate-100 rounded-full flex justify-center items-center top-0 right-0 border border-slate-300 shadow-md'>
                                <PencilIcon className='w-3 h-3 text-slate-800' />
                            </span>
                        </div>
                        {/* Name */}
                        <div className='w-full relative'>
                            <input type='text' defaultValue={groupForm.name} onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setGroupForm(prevState => ({
                                    ...prevState,
                                    name: e.target.value,
                                }))
                            }}
                                className='w-full bg-slate-100 transition duration-200 border-b-2 border-slate-300 p-1 focus:border-secondary'
                                placeholder='Group Name' />
                        </div>
                    </div>

                    {/* group description */}
                    <textarea name="" id="" cols={30} rows={10} placeholder='Group description'
                        defaultValue={groupForm.description} onInput={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                            setGroupForm(prevState => ({
                                ...prevState,
                                description: e.target.value,
                            }))
                        }}
                        className='w-full max-h-[120px] mb-2 text-sm text-slate-900 resize-none bg-slate-100 p-2 border-b-2 border-slate-300 transition duration-200 focus:border-secondary'></textarea>


                    <button className='w-full ion-activatable ripple-parent font-medium text-center mt-2 p-4 text-slate-100 rounded-xl bg-gradient-to-r from-secondary to-primary'>
                        Save Changes
                        <IonRippleEffect></IonRippleEffect>
                    </button>
                </section>
            </div>

        </IonModal>
    );
};

export default GroupChatNameImageModal;
