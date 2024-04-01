import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IonModal, IonRippleEffect, IonRouterLink } from '@ionic/react';
import {
    HiOutlineClipboardDocumentCheck as CopyIcon, HiOutlineArchiveBoxXMark as RemoveIcon,
    HiOutlineEllipsisHorizontal as MoreMenuIcon,
} from "react-icons/hi2";
import { PiShareFat as ShareOutlineIcon } from "react-icons/pi";
import { MdOutlineQuickreply as ReplyIcon } from "react-icons/md";
import './IndividualReceivedMessageModal.css';
import { RootState } from '../../../server/store';
import { toggleIndividualReceivedMessageModal } from '../../../server/store/reducers/modals';

const IndividualReceivedMessageModal: React.FC = () => {
    const modals = useSelector((state: RootState) => state.modals);
    const dispatch = useDispatch();
    const modal = useRef<HTMLIonModalElement>(null);

    return (
        <>
            <IonModal ref={modal} id='chatModal' isOpen={modals.individualReceivedMessageModal} initialBreakpoint={1} breakpoints={[0, 1]}
                onDidDismiss={() => dispatch(toggleIndividualReceivedMessageModal(false))}>
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
                            Forwrad
                        </span>
                        <IonRippleEffect></IonRippleEffect>
                    </button>
                </div>
            </IonModal>
        </>
    );
};

export default IndividualReceivedMessageModal;
