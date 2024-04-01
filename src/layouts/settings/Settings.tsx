import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { IonPage, IonContent, IonHeader, IonToolbar, IonRippleEffect, IonRouterLink } from '@ionic/react';
import {
    HiMiniChevronLeft as LeftIcon, HiMiniChevronRight as RightIcon,
} from "react-icons/hi2";
import { useHistory } from "react-router-dom";
import './Settings.css';

const SettingsLayout: React.FC = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    return (
        <IonPage id='settings-container'>
            <IonContent fullscreen>

                <div className='w-full relative pb-[73px] pt-14'>
                    {/* Heading & toolbar */}
                    <IonHeader class='shadow-none fixed top-0'>
                        <IonToolbar class='shadow-none border-b border-slate-0 bg-slate-100 bg-opacity-90 backdrop-blur-2xl'>
                            <div className='w-full flex justify-start items-center gap-4 px-4'>
                                <button onClick={() => history.goBack()}
                                    className='w-7 h-7 ion-activatable ripple-parent text-slate-100 rounded-full bg-gradient-to-r from-secondary to-primary flex justify-center items-center'>
                                    <LeftIcon className='w-5 h-5 text-slate-100 -translate-x-[1px]' />
                                    <IonRippleEffect></IonRippleEffect>
                                </button>
                                <strong className='text-base text-slate-800'>
                                    Settings
                                </strong>
                            </div>
                        </IonToolbar>
                    </IonHeader>

                    {/* contents */}
                    <section className='flex flex-col relative p-4'>
                        <span className='w-full block text-sm text-secondary font-medium'>
                            Account
                        </span>
                        <div className='w-full flex flex-col gap-1'>
                            <IonRouterLink routerDirection='forward' routerLink='/settings' className='border-b border-slate-100 last:border-none'>
                                <button
                                    className='w-full outline-none flex justify-between items-center text-slate-800 text-left text-sm py-2 px-1 rounded-lg'>
                                    <p className='flex flex-col'>
                                        <span>Security</span>
                                        <span className='text-xs text-secondary'>
                                            Password &amp; 2-FA
                                        </span>
                                    </p>
                                    <RightIcon className='w-5 h-5 text-slate-500' />
                                </button>
                            </IonRouterLink>
                            <label className="inline-flex py-2 px-1 outline-none justify-between items-center cursor-pointer">
                                <input type="checkbox" value="Messages" name='messages' className="peer hidden invisible" />
                                <span className="text-sm text-slate-800">
                                    Private Account
                                </span>
                                <div className="relative w-9 h-5 border border-slate-400 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-slate-400 after:content-[''] after:absolute after:top-0 after:bottom-0 after:my-auto after:-start-[3px] after:bg-white after:border-gray-400 after:border after:rounded-full after:h-5 after:w-5 after:transition-all bg-gray-300 peer-checked:bg-gradient-to-r peer-checked:from-secondary peer-checked:to-primary"></div>
                            </label>
                            <label className="inline-flex py-2 px-1 outline-none justify-between items-center cursor-pointer">
                                <input type="checkbox" value="Messages" name='messages' className="peer hidden invisible" />
                                <span className="text-sm text-slate-800">
                                    Dark Mode
                                </span>
                                <div className="relative w-9 h-5 border border-slate-400 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-slate-400 after:content-[''] after:absolute after:top-0 after:bottom-0 after:my-auto after:-start-[3px] after:bg-white after:border-gray-400 after:border after:rounded-full after:h-5 after:w-5 after:transition-all bg-gray-300 peer-checked:bg-gradient-to-r peer-checked:from-secondary peer-checked:to-primary"></div>
                            </label>
                        </div>
                    </section>
                </div>

            </IonContent>
        </IonPage>
    );
};

export default SettingsLayout;
