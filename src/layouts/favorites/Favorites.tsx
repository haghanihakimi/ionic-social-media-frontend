import React, { useEffect, useState } from 'react';
import { IonPage, IonContent, IonHeader, IonToolbar, IonRippleEffect, IonImg, IonRouterLink } from '@ionic/react';
import {
    HiMiniChevronLeft as LeftIcon, HiMiniPlus as AddIcon,
    HiOutlineUserGroup as GroupsIcon, HiMiniChevronRight as RightIcon,
} from "react-icons/hi2";
import { TbCategoryPlus as AddCategoryIcon } from "react-icons/tb";
import { useHistory } from "react-router-dom";

const FavoritesLayout: React.FC = () => {
    const history = useHistory();

    return (
        <IonPage id='groups-container'>
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
                                        Favorite Posts
                                    </strong>
                                </div>
                                <button className='w-8 h-8 ion-activatable ripple-parent text-secondary rounded-full bg-transparent flex justify-center items-center'>
                                    <AddCategoryIcon className='w-6 h-6 text-primary' />
                                    <IonRippleEffect></IonRippleEffect>
                                </button>
                            </div>
                        </IonToolbar>
                    </IonHeader>

                    {/* contents */}
                    <section className='relative py-1 flex flex-col items-start justify-start flex-wrap gap-2 px-2'>
                        {/* tiles container*/}
                        <IonRouterLink routerDirection='forward' routerLink='/' className='w-full'>
                            <div className='w-full relative flex flex-row justify-between items-center gap-2 bg-slate-200 rounded-xl border border-slate-300 p-2'>
                                <div className='w-auto inline-flex flex-row items-center gap-4 overflow-hidden'>
                                    <div className='w-12 h-12 rounded-full flex flex-col justify-center items-center'>
                                        <div className='flex justify-between'>
                                            <img decoding='async' src='https://images.unsplash.com/photo-1536782376847-5c9d14d97cc0?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                                className='w-5 h-5 object-cover relative shrink-0 rounded-tl-xl' />
                                            <img decoding='async' src='https://images.unsplash.com/photo-1430990480609-2bf7c02a6b1a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                                className='w-5 h-5 object-cover relative shrink-0 rounded-tr-xl' />
                                        </div>
                                        <div className='flex justify-between'>
                                            <img decoding='async' src='https://images.unsplash.com/photo-1538991383142-36c4edeaffde?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                                className='w-5 h-5 object-cover relative shrink-0 rounded-bl-xl' />
                                            <img decoding='async' src='https://images.unsplash.com/photo-1453060590797-2d5f419b54cb?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                                className='w-5 h-5 object-cover relative shrink-0 rounded-br-xl' />
                                        </div>
                                    </div>
                                    <h4 className='w-full mx-auto text-sm text-slate-800 font-medium truncate flex flex-col justify-start gap-0'>
                                        General {`(450 posts)`}
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

export default FavoritesLayout;