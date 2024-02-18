import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../server/store';
import {
    HiCalendarDays as CalendarIcon, HiMiniGlobeAlt as GlobalIcon,
    HiMiniEnvelope as EmailIcon
} from "react-icons/hi2";
import './about-account.css';
import { toggleAboutAccount } from '../../../server/store/reducers/alerts';
import { IonRippleEffect } from '@ionic/react';

const AboutAccount: React.FC = () => {
    const alerts = useSelector((state: RootState) => state.alerts);
    const dispatch = useDispatch();
    const alertWrapper = useRef<HTMLDivElement>(null)

    useEffect(() => {
        function hideMenu(event: MouseEvent | TouchEvent) {
            if (alertWrapper.current && event.target instanceof Node && !alertWrapper.current.contains(event.target)) {
                dispatch(toggleAboutAccount(false));
            }
        }

        document.addEventListener('click', hideMenu, true);
        document.addEventListener('contextmenu', hideMenu, true);
        return () => {
            document.removeEventListener('click', hideMenu, true);
            document.removeEventListener('contextmenu', hideMenu, true);
        };
    })

    return (
        <>
            {
                alerts.aboutAccount ?
                    <div id="about-account-alert" className='w-screen animate-opacityFade h-screen p-4 fixed top-0 z-50 flex justify-center items-center bg-black bg-opacity-50'>
                        <div ref={alertWrapper} className='w-full animate-alertFade h-auto bg-slate-50 p-6 relative rounded-lg border border-slate-200 shadow-lg'>
                            {/* guest profile image */}
                            <div className='w-full relative flex flex-col gap-2'>
                                <img decoding='async'
                                    src="https://images.unsplash.com/photo-1531853749260-4447dc77f7e8?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    className='w-16 h-16 rounded-full mx-auto object-cover shadow-lg' />
                                <h4 className='w-full text-center text-sm font-medium text-slate-900'>
                                    sara_miller
                                </h4>
                            </div>

                            {/* body texts */}
                            <div className='w-full py-6 relative flex flex-col gap-4'>
                                <p className='text-sm font-normal text-slate-900 flex flex-row items-center justify-start gap-2'>
                                    <CalendarIcon className='w-5 h-5 text-slate-600' />
                                    <span>
                                        Joined at <strong>December 24, 2023</strong>
                                    </span>
                                </p>
                                <p className='text-sm font-normal text-slate-900 flex flex-row items-center justify-start gap-2'>
                                    <GlobalIcon className='w-5 h-5 text-slate-600' />
                                    <span>
                                        Country: <strong>United States</strong>
                                    </span>
                                </p>
                                <p className='text-sm font-normal text-slate-900 flex flex-row items-center justify-start gap-2'>
                                    <EmailIcon className='w-5 h-5 text-slate-600' />
                                    <span>
                                        Business email <strong>sarah@email.com</strong>
                                    </span>
                                </p>
                            </div>

                            {/* buttons */}
                            <div className='w-full flex flex-row items-center justify-between gap-1'>
                                <button onClick={() => dispatch(toggleAboutAccount(false))}
                                    className='w-full ion-activatable ripple-parent outline-none rounded bg-transparent text-blue-600 text-base font-medium py-1'>
                                    OK
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

export default AboutAccount;
