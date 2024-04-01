import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useClickOutside } from '@reactuses/core';
import './block-alert.css';
import { RootState } from '../../../server/store';
import {
    HiMiniXMark as CrossIcon, HiBellSlash as BlockNotificationsIcon,
    HiMiniUserPlus as AddPersonIcon
} from "react-icons/hi2";
import { BiSolidMessageRoundedX as BlockMessageIcon } from "react-icons/bi";
import { CgUnblock as UnblockIcon } from "react-icons/cg";
import { toggleBlockAlert } from '../../../server/store/reducers/alerts';
import { IonRippleEffect } from '@ionic/react';

const BlockAlert: React.FC = () => {
    const alerts = useSelector((state: RootState) => state.alerts);
    const dispatch = useDispatch();
    const alertWrapper = useRef<HTMLDivElement>(null);

    useClickOutside(alertWrapper, () => {
        dispatch(toggleBlockAlert(false));
    });

    return (
        <>
            {
                alerts.blockAlert ?
                    <div className='w-screen animate-opacityFade h-screen p-4 fixed top-0 z-[99999989999] flex justify-center items-center bg-black bg-opacity-50'>
                        <div ref={alertWrapper} className='w-full animate-alertFade h-auto bg-slate-50 p-6 relative rounded-lg border border-slate-200 shadow-lg'>
                            {/* header */}
                            <h2 className='font-bold text-slate-900 text-center text-lg'>
                                Block Sarah Miller
                            </h2>
                            {/* sub-header */}
                            <h4 className='block max-w-[240px] mx-auto font-normal text-xs text-slate-500 text-center'>
                                After blocking Sarah Miller, both of you will also automatically unfollow each other.
                            </h4>
                            {/* body text */}
                            <div className='w-full relative my-5'>
                                <p className='flex justify-start flex-row items-center gap-2 py-1 text-xs text-slate-900'>
                                    <BlockMessageIcon className='w-5 h-5 text-slate-700 shrink-0' />
                                    Sarah Miller {"won't"} be able to message you or find your profile or content
                                </p>
                                <p className='flex justify-start flex-row items-center gap-2 py-1 text-xs text-slate-900'>
                                    <BlockNotificationsIcon className='w-5 h-5 text-slate-700 shrink-0' />
                                    We {"won't"} notify Sarah Miller that you blocked them.
                                </p>
                                <p className='flex justify-start flex-row items-center gap-2 py-1 text-xs text-slate-900'>
                                    <AddPersonIcon className='w-5 h-5 text-slate-700 shrink-0' />
                                    You must send another follow request when you unblocked Sarah Miller.
                                </p>
                                <p className='flex justify-start flex-row items-center gap-2 py-1 text-xs text-slate-900'>
                                    <UnblockIcon className='w-5 h-5 text-slate-700 shrink-0' />
                                    You can unblock them at anytime.
                                </p>
                            </div>
                            {/* buttons */}
                            <div className='w-full flex flex-row items-center justify-between gap-1'>
                                <button onClick={() => dispatch(toggleBlockAlert(false))}
                                    className='w-full ion-activatable ripple-parent rounded outline-none text-primary text-base text-sm font-medium py-2'>
                                    Cancel
                                    <IonRippleEffect></IonRippleEffect>
                                </button>
                                <button className='w-full ion-activatable ripple-parent rounded outline-none bg-transparent text-red-600 text-sm py-2 font-medium'>
                                    Block
                                    <IonRippleEffect></IonRippleEffect>
                                </button>
                            </div>
                        </div>
                    </div>
                    : ''
            }
        </>
    );
};

export default BlockAlert;
