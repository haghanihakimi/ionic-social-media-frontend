import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IonModal, IonHeader, IonRippleEffect } from '@ionic/react';
import {
    HiMiniChevronLeft as LeftIcon, HiOutlineInformationCircle as InfoIcon,
    HiXMark as CrossIcon,
} from "react-icons/hi2";
import './NotificationsModal.css';
import { RootState } from '../../../server/store';
import { toggleNotificationsModal } from '../../../server/store/reducers/modals';

const NotificationsModal: React.FC = () => {
    const modals = useSelector((state: RootState) => state.modals);
    const dispatch = useDispatch();
    const modal = useRef<HTMLIonModalElement>(null);

    return (
        <>
            <IonModal ref={modal} id='notifications-modal'
                isOpen={modals.notificationsModal}
                onDidDismiss={() => dispatch(toggleNotificationsModal(false))}>
                <div className='w-full h-screen flex flex-col overflow-auto'>
                    <IonHeader className='w-full p-0 m-0 sticky top-0 shadow-none relative'>
                        <div className='w-full p-2 bg-slate-50 flex flex-row items-center border-b border-slate-200'>
                            <button onClick={() => dispatch(toggleNotificationsModal(false))}
                                className='w-7 h-7 ion-activatable ripple-parent text-slate-100 rounded-full bg-gradient-to-r from-secondary to-primary flex justify-center items-center'>
                                <LeftIcon className='w-5 h-5 text-slate-100 -translate-x-[1px]' />
                                <IonRippleEffect></IonRippleEffect>
                            </button>
                            <span className='px-2 text-sm font-medium text-slate-800'>
                                Notifications
                            </span>
                        </div>
                    </IonHeader>

                    <div className='w-full relative flex flex-col gap-0'>
                        
                        {/* user notification */}
                        <div className='w-full flex flex-row items-center justify-between py-2 px-4'>
                            {/* name & title */}
                            <div className='w-auto relative flex flex-row items-center gap-2'>
                                {/* image */}
                                <div className='w-7 h-7 rounded-full'>
                                    <img src='https://images.unsplash.com/photo-1531853749260-4447dc77f7e8'
                                        className='w-6 h-6 rounded-full object-cover' />
                                </div>
                                {/* title */}
                                <span className='text-sm text-slate-800'>
                                    <strong>sara_miller</strong> sent you follow request
                                </span>
                            </div>
                            {/* buttons */}
                            <div className='w-fit flex flex-row items-center justify-between gap-1'>
                                <button className='bg-gradient-to-r from-secondary to-primary text-sm p-1 text-slate-200 rounded-lg'>
                                    Confirm
                                </button>
                                <button className='bg-gradient-to-r text-sm p-1 bg-slate-300 rounded-lg'>
                                    <CrossIcon className='w-5 h-5 text-slate-700' />
                                </button>
                            </div>
                        </div>
                        {/* info notification */}
                        <div className='w-full flex flex-row items-center justify-between py-2 px-4'>
                            {/* name & title */}
                            <div className='w-auto relative flex flex-row items-center gap-2'>
                                {/* image */}
                                <div className='w-7 h-7 rounded-full'>
                                    <InfoIcon className='w-6 h-6 text-slate-600' />
                                </div>
                                {/* title */}
                                <span className='text-sm text-slate-800'>
                                    Your report outcome from March 01
                                </span>
                            </div>
                        </div>
                        {/* <h3 className='w-full text-center p-4 text-slate-500 mt-0 relative'>
                            You have no notifications
                        </h3> */}
                    </div>
                </div>
            </IonModal>
        </>
    );
};

export default NotificationsModal;
