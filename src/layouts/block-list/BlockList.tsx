import React from 'react';
import { IonPage, IonContent, IonHeader, IonToolbar, IonRippleEffect, IonRouterLink } from '@ionic/react';
import {
    HiMiniChevronLeft as LeftIcon
} from "react-icons/hi2";
import { useHistory } from "react-router-dom";

const BlockListLayout: React.FC = () => {
    const history = useHistory();

    return (
        <IonPage id='block-list-container'>
            <IonContent fullscreen>

                <div className='w-full relative pb-[73px] pt-14'>
                    {/* Heading & toolbar */}
                    <IonHeader class='shadow-none fixed top-0'>
                        <IonToolbar class='shadow-none border-b border-slate-0 bg-slate-100 bg-opacity-90 backdrop-blur-2xl'>
                            <div className='w-full flex flex-row justify-between items-center gap-4 px-4'>
                                <div className='w-auto flex flex-row items-center gap-4'>
                                    <button onClick={() => history.goBack()}
                                        className='w-7 h-7 ion-activatable ripple-parent text-slate-100 rounded-full bg-gradient-to-r from-secondary to-primary flex justify-center items-center'>
                                        <LeftIcon className='w-5 h-5 text-slate-100 -translate-x-[1px]' />
                                        <IonRippleEffect></IonRippleEffect>
                                    </button>
                                    <strong className='text-base text-slate-800'>
                                        Blocked Users
                                    </strong>
                                </div>
                            </div>
                        </IonToolbar>
                    </IonHeader>

                    {/* contents */}
                    <section className='relative py-1 flex flex-col items-start justify-start flex-wrap gap-2 px-2'>
                        
                        {/* tiles container*/}
                        <div className='w-full relative flex flex-row justify-between items-center gap-2 bg-slate-200 rounded-xl p-2 border border-slate-300'>
                            <div className='w-full inline-flex flex-row items-center gap-2'>
                                {/* image */}
                                <div className='w-10 h-10 shrink-0 rounded-full relative'>
                                    <img decoding='async' src='https://plus.unsplash.com/premium_photo-1708110769720-eaf8397ccabe?q=80&w=2548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                        className='w-10 h-10 rounded-full object-cover' />
                                </div>
                                {/* name & username */}
                                <h4 className='w-full text-sm text-slate-800 font-medium truncate flex flex-col justify-start gap-0'>
                                    Sarah Johnson
                                    <span className='text-xs text-slate-500 font-normal'>
                                        sarah_johnson
                                    </span>
                                </h4>
                            </div>
                            <button className='text-primary bg-transparent text-sm font-medium shrink-0'>
                                Unblock
                            </button>
                        </div>

                    </section>
                </div>

            </IonContent>
        </IonPage>
    );
};

export default BlockListLayout;
