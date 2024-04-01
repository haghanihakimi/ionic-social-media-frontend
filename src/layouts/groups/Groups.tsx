import React, { useEffect, useState } from 'react';
import { IonPage, IonContent, IonHeader, IonToolbar, IonRippleEffect, IonImg, IonRouterLink } from '@ionic/react';
import {
    HiMiniChevronLeft as LeftIcon, HiMiniPlus as AddIcon,
    HiOutlineUserGroup as GroupsIcon, HiMiniChevronRight as RightIcon
} from "react-icons/hi2";
import { useHistory } from "react-router-dom";
import './Groups.css';

const GroupsLayout: React.FC = () => {
    const history = useHistory();


    const sampleGroups: Array<any> = [
        {
            id: 1,
            title: 'Group 1',
            image: 'https://plus.unsplash.com/premium_photo-1683880731561-f0cceb0ad405?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            description: 'Group 1 description',
            created_at: '2024-01-28 21:53:34',
        },
        {
            id: 2,
            title: 'Group 2',
            image: 'https://plus.unsplash.com/premium_photo-1683880731561-f0cceb0ad405?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            description: 'Group 2 description',
            created_at: '2024-01-28 21:53:34',
        },
        {
            id: 3,
            title: 'Group 3',
            image: 'https://plus.unsplash.com/premium_photo-1683880731561-f0cceb0ad405?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            description: 'Group 3 description',
            created_at: '2024-01-28 21:53:34',
        },
        {
            id: 4,
            title: 'Group 4',
            image: 'https://plus.unsplash.com/premium_photo-1683880731561-f0cceb0ad405?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            description: 'Group 4 description',
            created_at: '2024-01-28 21:53:34',
        },
    ];

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
                                        Groups
                                    </strong>
                                </div>
                                <IonRouterLink routerDirection='forward' routerLink='/group/create'>
                                    <button
                                        className='w-8 h-8 ion-activatable ripple-parent text-secondary rounded-full flex justify-center items-center'>
                                        <AddIcon className='w-5 h-5 text-primary' />
                                        <IonRippleEffect></IonRippleEffect>
                                    </button>
                                </IonRouterLink>
                            </div>
                        </IonToolbar>
                    </IonHeader>

                    {/* contents */}
                    <section className='relative py-1 flex flex-col items-start justify-start flex-wrap gap-2 px-2'>
                        {/* tiles container*/}
                        {
                            sampleGroups && sampleGroups.length > 0 ?
                                sampleGroups.map((group: any, i: number) => {
                                    return <IonRouterLink routerDirection='forward' routerLink='/'
                                        key={i} className='w-full'>
                                        <div className='w-full relative flex flex-row justify-between items-center gap-2 bg-slate-200 rounded-xl border border-slate-300 p-2'>
                                            <div className='w-auto inline-flex flex-row items-center gap-2 overflow-hidden'>
                                                <img decoding='async' src={group.image} className='w-16 h-auto object-cover relative shrink-0 rounded-xl' />
                                                <h4 className='w-full mx-auto text-sm text-slate-800 font-medium truncate flex flex-col justify-start gap-0'>
                                                    {group.title}
                                                    <span className='text-xs text-slate-600 font-normal truncate'>
                                                        {group.description}
                                                    </span>
                                                </h4>
                                            </div>
                                            <RightIcon className='w-5 h-5 text-slate-700' />
                                        </div>
                                    </IonRouterLink>
                                })
                                : <div className='w-full p-6 flex flex-col justify-center items-center'>
                                    <GroupsIcon className='w-8 h-8 text-slate-500' />
                                    <span className='text-base font-medium text-slate-800'>
                                        No groups found
                                    </span>
                                    <IonRouterLink routerDirection='forward' routerLink='/group/create'>
                                        <button className='text-primary font-medium bg-transparent mt-2'>
                                            Create Group
                                        </button>
                                    </IonRouterLink>
                                </div>
                        }
                    </section>
                </div>

            </IonContent>
        </IonPage>
    );
};

export default GroupsLayout;
