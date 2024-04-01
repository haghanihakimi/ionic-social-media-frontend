import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IonModal, IonRippleEffect, createAnimation } from '@ionic/react';
import {
    HiMapPin as LocationIcon, HiMiniPaperClip as AttachmentIcon,
    HiCamera as CameraIcon, HiMusicalNote as AudioIcon,
    HiRectangleStack as GalleryIcon, HiUser as ContactIcon,
} from "react-icons/hi2";
import './ChatAttachmentsModal.css';
import { RootState } from '../../../server/store';
import { toggleChatAttachmentsModal } from '../../../server/store/reducers/modals';
import { Capacitor } from '@capacitor/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Contacts } from '@capacitor-community/contacts';

const ChatAttachmentsModal: React.FC = () => {
    const modals = useSelector((state: RootState) => state.modals);
    const dispatch = useDispatch();
    const modal = useRef<HTMLIonModalElement>(null);

    const handleOpenCamera = async () => {
        try {
            if (Capacitor.isNativePlatform()) {
                const image = await Camera.getPhoto({
                    quality: 100,
                    allowEditing: false,
                    saveToGallery: false,
                    resultType: CameraResultType.Uri,
                    source: CameraSource.Camera
                });

                if (image && image.webPath) {
                    const newImageObject = { image: image.webPath };

                    // setChatAttachments((prevAttachments) => [
                    //     ...prevAttachments,
                    //     newImageObject,
                    // ]);
                }
            }
        } catch (error) {
            return Promise.resolve(error);
        }
    };

    const handlePickImages = async () => {
        try {
            const { photos } = await Camera.pickImages({
                quality: 100,
            });

            if (photos && photos.length > 0) {
                const createImageObject = (photo: any) => ({
                    image: photo.webPath,
                });

                // setChatAttachments((prevAttachments) => [...prevAttachments, ...photos.map(createImageObject)]);
            }
        } catch (error) {
            return Promise.resolve(error);
        }
    };

    const retrieveListOfContacts = async () => {
        if (Capacitor.isNativePlatform()) {
            const projection = {
                // Specify which fields should be retrieved.
                name: true,
                phones: true,
                postalAddresses: true,
            };

            const result = await Contacts.getContacts({
                projection,
            });
        }
    };

    return (
        <>
            <IonModal ref={modal} id='chatAttachmentsModal'
                isOpen={modals.chatAttachmentsModal}
                initialBreakpoint={1} breakpoints={[0, 1]}
                onDidDismiss={() => dispatch(toggleChatAttachmentsModal(false))}>
                <div className='w-full relative flex flex-row flex-wrap gap-4 justify-center p-4'>
                    <div className='w-fit h-fit flex flex-col gap-2 flex-center items-center'>
                        <label htmlFor='pickFiles' className='w-16 h-16 bg-amber-500 text-secondary ion-activatable ripple-parent flex justify-center items-center rounded-full shrink-0'>
                            <AttachmentIcon className='w-6 h-6 text-slate-100' />
                            <IonRippleEffect></IonRippleEffect>
                            <input type="file" className='hidden invisible opacity-0' id='pickFiles' />
                        </label>
                        <span className='text-xs text-slate-800'>
                            Files
                        </span>
                    </div>
                    <div className='w-fit h-fit flex flex-col gap-2 flex-center items-center'>
                        <button onClick={() => { handleOpenCamera(); dispatch(toggleChatAttachmentsModal(false)) }}
                            className='w-16 h-16 bg-emerald-600 text-secondary ion-activatable ripple-parent flex justify-center items-center rounded-full shrink-0'>
                            <CameraIcon className='w-6 h-6 text-slate-100' />
                            <IonRippleEffect></IonRippleEffect>
                        </button>
                        <span className='text-xs text-slate-800'>
                            Camera
                        </span>
                    </div>
                    <div className='w-fit h-fit flex flex-col gap-2 flex-center items-center'>
                        <button onClick={() => { handlePickImages(); dispatch(toggleChatAttachmentsModal(false)) }}
                            className='w-16 h-16 bg-violet-500 text-secondary ion-activatable ripple-parent flex justify-center items-center rounded-full shrink-0'>
                            <GalleryIcon className='w-6 h-6 text-slate-100' />
                            <IonRippleEffect></IonRippleEffect>
                        </button>
                        <span className='text-xs text-slate-800'>
                            Gallery
                        </span>
                    </div>

                    <div className='w-fit h-fit flex flex-col gap-2 flex-center items-center'>
                        <label htmlFor='pickAudio' className='w-16 h-16 bg-green-500 text-secondary ion-activatable ripple-parent flex justify-center items-center rounded-full shrink-0'>
                            <AudioIcon className='w-6 h-6 text-slate-100' />
                            <IonRippleEffect></IonRippleEffect>
                            <input type="file" className='hidden invisible opacity-0' accept="audio/mp3,audio/wav" id='pickAudio' />
                        </label>
                        <span className='text-xs text-slate-800'>
                            Audio
                        </span>
                    </div>
                    <div className='w-fit h-fit flex flex-col gap-2 flex-center items-center'>
                        <button className='w-16 h-16 bg-orange-500 text-secondary ion-activatable ripple-parent flex justify-center items-center rounded-full shrink-0'>
                            <LocationIcon className='w-6 h-6 text-slate-100' />
                            <IonRippleEffect></IonRippleEffect>
                        </button>
                        <span className='text-xs text-slate-800'>
                            Location
                        </span>
                    </div>
                    <div className='w-fit h-fit flex flex-col gap-2 flex-center items-center'>
                        <button onClick={retrieveListOfContacts}
                            className='w-16 h-16 bg-blue-600 text-secondary ion-activatable ripple-parent flex justify-center items-center rounded-full shrink-0'>
                            <ContactIcon className='w-6 h-6 text-slate-100' />
                            <IonRippleEffect></IonRippleEffect>
                        </button>
                        <span className='text-xs text-slate-800'>
                            Contacts
                        </span>
                    </div>
                </div>
            </IonModal>
        </>
    );
};

export default ChatAttachmentsModal;
