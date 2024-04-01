import React from 'react';
import { IonPage, IonContent, IonHeader, IonToolbar, IonRippleEffect, IonRouterLink } from '@ionic/react';
import {
    HiMiniChevronLeft as LeftIcon, HiMiniChevronRight as RightIcon,
    HiCalendarDays as CalendarIcon, HiMiniPlus as PlusIcon
} from "react-icons/hi2";
import { useHistory } from "react-router-dom";

const EventsLayout: React.FC = () => {
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
                                        Events
                                    </strong>
                                </div>
                                <IonRouterLink routerDirection='forward' routerLink='/create/event'>
                                    <button className='w-7 h-7 ion-activatable ripple-parent rounded-full flex justify-center items-center text-secondary'>
                                        <PlusIcon className='w-6 h-6 text-primary' />
                                        <IonRippleEffect></IonRippleEffect>
                                    </button>
                                </IonRouterLink>
                            </div>
                        </IonToolbar>
                    </IonHeader>

                    {/* contents */}
                    <section className='relative py-1 flex flex-col items-start justify-start flex-wrap gap-2 px-2'>

                        {/* tiles container*/}
                        <IonRouterLink routerDirection='forward' routerLink='/' className='w-full'>
                            <div className='w-full relative flex flex-row justify-between items-center gap-2 bg-slate-200 rounded-xl border border-slate-300 p-2'>
                                <div className='w-auto inline-flex flex-row items-center gap-2 overflow-hidden'>
                                    {/* <img decoding='async' src={group.image} className='w-16 h-auto object-cover relative shrink-0 rounded-xl' /> */}
                                    <CalendarIcon className='w-12 h-12 text-slate-800' />
                                    <h4 className='w-full mx-auto text-sm text-slate-800 font-medium truncate flex flex-col justify-start gap-0'>
                                        Title
                                        <span className='text-xs text-slate-600 font-normal truncate'>
                                            Date goes here
                                        </span>
                                    </h4>
                                </div>
                                <RightIcon className='w-5 h-5 text-slate-700' />
                            </div>
                        </IonRouterLink>

                    </section>
                </div>

            </IonContent>
        </IonPage>
    );
};

export default EventsLayout;
