import React, { useEffect, useRef, useState } from 'react';
import { IonPage, IonContent, IonHeader, IonToolbar, IonRippleEffect, IonModal, IonAccordionGroup, IonAccordion, IonItem, IonLabel } from '@ionic/react';
import {
    HiMiniChevronLeft as LeftIcon, HiMiniPlus as PlusIocn,
} from "react-icons/hi2";
import { GroupChatNameImageForm } from '../../../server/types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../server/store';
import { toggleGroupChatAdminModeratorsModal, toggleGroupChatNameImageModal } from '../../../server/store/reducers/modals';
import './GroupChatAdminModeratorsModal.css';
import ProfileImagePartial from '../../profile-image/ProfileImage';

const GroupChatAdminModeratorsModal: React.FC = () => {
    const modals = useSelector((state: RootState) => state.modals);
    const dispatch = useDispatch();
    const modal = useRef<HTMLIonModalElement>(null);
    const accordionGroup = useRef<null | HTMLIonAccordionGroupElement>(null);
    const [groupForm, setGroupForm] = useState<GroupChatNameImageForm>({
        name: modals.groupChatNameImageModal.name,
        description: modals.groupChatNameImageModal.description,
        image: '',
    });

    useEffect(() => {
        if (!accordionGroup.current) {
            return;
        }

        accordionGroup.current.value = ['admins', 'moderators'];
    }, []);

    return (
        <IonModal ref={modal} id='group-chat-admin-moderators'
            isOpen={modals.groupChatAdminModeratorsModal.modal}
            onDidDismiss={() => dispatch(toggleGroupChatAdminModeratorsModal({ id: 0, modal: false }))}>

            <div className='w-full relative overflow-auto'>
                {/* Heading & toolbar */}
                <IonHeader className='w-full p-0 m-0 sticky top-0 shadow-none relative'>
                    <div className='w-full p-2 bg-slate-50 flex flex-row justify-between items-center border-b border-slate-200'>
                        <div className='w-fit flex flex-row items-center border-b border-slate-20'>
                            <button onClick={() => dispatch(toggleGroupChatAdminModeratorsModal({ id: 0, modal: false }))}
                                className='w-7 h-7 ion-activatable ripple-parent shrink-0 text-slate-100 rounded-full bg-gradient-to-r from-secondary to-primary flex justify-center items-center'>
                                <LeftIcon className='w-5 h-5 text-slate-100 -translate-x-[1px]' />
                                <IonRippleEffect></IonRippleEffect>
                            </button>
                            <span className='px-2 text-sm font-medium text-slate-800'>
                                Admins &amp; Moderators
                            </span>
                        </div>
                        <button
                            className='w-7 h-7 ion-activatable ripple-parent shrink-0 text-secondary rounded-full flex justify-center items-center'>
                            <PlusIocn className='w-5 h-5 text-slate-800' />
                            <IonRippleEffect></IonRippleEffect>
                        </button>
                    </div>
                </IonHeader>

                {/* contents */}
                <section className='w-full relative px-0'>
                    <IonAccordionGroup ref={accordionGroup} multiple={true}>
                        <IonAccordion value="admins">
                            <IonItem slot="header">
                                <IonLabel className='font-semibold'>
                                    Administrators
                                </IonLabel>
                            </IonItem>
                            <div className="px-6 py-2" slot="content">
                                <div className='w-full flex flex-col gap-4 relative'>
                                    <div className='w-full relative text-secondary ion-activatable ripple-parent flex flex-row items-center justify-between'>
                                        {/* profile image & name */}
                                        <div className='w-auto relative flex flex-row items-center gap-2'>
                                            <div className='w-auto rounded-full shrink-0'>
                                                <ProfileImagePartial image='https://images.unsplash.com/photo-1531853749260-4447dc77f7e8'
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
                            </div>
                        </IonAccordion>
                        <IonAccordion value="moderators">
                            <IonItem slot="header">
                                <IonLabel className='font-semibold'>
                                    Moderators
                                </IonLabel>
                            </IonItem>
                            <div className="px-6 py-2" slot="content">
                                <div className='w-full flex flex-col gap-4 relative'>
                                    <div className='w-full relative text-secondary ion-activatable ripple-parent flex flex-row items-center justify-between'>
                                        {/* profile image & name */}
                                        <div className='w-auto relative flex flex-row items-center gap-2'>
                                            <div className='w-auto rounded-full shrink-0'>
                                                <ProfileImagePartial image='https://images.unsplash.com/photo-1531853749260-4447dc77f7e8'
                                                    width={38} height={38} link='#' />
                                            </div>
                                            <h4 className='flex flex-col gap-0 text-sm text-slate-900 leading-none'>
                                                <span>Sarah Miller</span>
                                                <span className='text-xs text-slate-600'>sara_miller</span>
                                            </h4>
                                        </div>

                                        <IonRippleEffect></IonRippleEffect>
                                    </div>
                                    <div className='w-full relative text-secondary ion-activatable ripple-parent flex flex-row items-center justify-between'>
                                        {/* profile image & name */}
                                        <div className='w-auto relative flex flex-row items-center gap-2'>
                                            <div className='w-auto rounded-full shrink-0'>
                                                <ProfileImagePartial image='https://images.unsplash.com/photo-1531853749260-4447dc77f7e8'
                                                    width={38} height={38} link='#' />
                                            </div>
                                            <h4 className='flex flex-col gap-0 text-sm text-slate-900 leading-none'>
                                                <span>Sarah Miller</span>
                                                <span className='text-xs text-slate-600'>sara_miller</span>
                                            </h4>
                                        </div>

                                        <IonRippleEffect></IonRippleEffect>
                                    </div>
                                    <div className='w-full relative text-secondary ion-activatable ripple-parent flex flex-row items-center justify-between'>
                                        {/* profile image & name */}
                                        <div className='w-auto relative flex flex-row items-center gap-2'>
                                            <div className='w-auto rounded-full shrink-0'>
                                                <ProfileImagePartial image='https://images.unsplash.com/photo-1531853749260-4447dc77f7e8'
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
                            </div>
                        </IonAccordion>
                    </IonAccordionGroup>
                </section>
            </div>

        </IonModal>
    );
};

export default GroupChatAdminModeratorsModal;
