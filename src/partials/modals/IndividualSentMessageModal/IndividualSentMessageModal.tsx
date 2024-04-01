import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IonModal, IonRippleEffect, IonRouterLink } from '@ionic/react';
import {
    HiOutlineClipboardDocumentCheck as CopyIcon, HiOutlineArchiveBoxXMark as RemoveIcon,
    HiOutlineEllipsisHorizontal as MoreMenuIcon,
} from "react-icons/hi2";
import { 
    BsSendX as UnsendIcon,
} from "react-icons/bs";
import { MdOutlineQuickreply as ReplyIcon } from "react-icons/md";
import { PiShareFat as ShareOutlineIcon } from "react-icons/pi";
import './IndividualSentMessageModal.css';
import { RootState } from '../../../server/store';
import { toggleIndividualSentMessageModal, toggleProfileModal } from '../../../server/store/reducers/modals';

const IndividualSentMessageModal: React.FC = () => {
    const modals = useSelector((state: RootState) => state.modals);
    const dispatch = useDispatch();
    const modal = useRef<HTMLIonModalElement>(null);

    return (
        <>
            <IonModal ref={modal} id='chatModal' isOpen={modals.individualSentMessageModal} initialBreakpoint={1} breakpoints={[0, 1]}
                onDidDismiss={() => dispatch(toggleIndividualSentMessageModal(false))}>
                <div className='w-full select-none relative flex flex-row gap-0 items-center justify-center pt-6'>
                    <button
                        className='w-24 h-24 ion-activatable ripple-parent outline-none flex flex-col gap-1 justify-center items-center text-secondary text-left text-sm px-4 py-3'>
                        <CopyIcon className='w-6 h-6 text-slate-700' />
                        <span className='text-slate-700'>
                            Copy
                        </span>
                        <IonRippleEffect></IonRippleEffect>
                    </button>
                    <button
                        className='w-24 h-24 ion-activatable ripple-parent outline-none flex flex-col gap-1 justify-center items-center text-secondary text-left text-sm px-4 py-3'>
                        <UnsendIcon className='w-6 h-6 text-slate-700' />
                        <span className='text-slate-700'>
                            Unsend
                        </span>
                        <IonRippleEffect></IonRippleEffect>
                    </button>
                    <button
                        className='w-24 h-24 ion-activatable ripple-parent outline-none flex flex-col gap-1 justify-center items-center text-secondary text-left text-sm px-4 py-3'>
                        <RemoveIcon className='w-6 h-6 text-slate-700' />
                        <span className='text-slate-700'>
                            Remove
                        </span>
                        <IonRippleEffect></IonRippleEffect>
                    </button>
                    <button
                        className='w-24 h-24 ion-activatable ripple-parent outline-none flex flex-col gap-1 justify-center items-center text-secondary text-left text-sm px-4 py-3'>
                        <ReplyIcon className='w-6 h-6 text-slate-700' />
                        <span className='text-slate-700'>
                            Reply
                        </span>
                        <IonRippleEffect></IonRippleEffect>
                    </button>
                    <button
                        className='w-24 h-24 ion-activatable ripple-parent outline-none flex flex-col gap-1 justify-center items-center text-secondary text-left text-sm px-4 py-3'>
                        <ShareOutlineIcon className='w-6 h-6 text-slate-700' />
                        <span className='text-slate-700'>
                            Forward
                        </span>
                        <IonRippleEffect></IonRippleEffect>
                    </button>
                </div>
            </IonModal>
        </>
    );
};

export default IndividualSentMessageModal;
