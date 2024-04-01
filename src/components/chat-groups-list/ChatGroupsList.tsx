import React, { useEffect, useRef, useState } from 'react';
import { useLongPress } from '@reactuses/core';
import { IonRippleEffect, IonRouterLink } from '@ionic/react';
import AvatarGroup from '../../partials/grouped-avatars/grouped-avatars';
import { letterizeNumbers } from '../../server/plugins';


const ChatGroupsListComp: React.FC = () => {

    return (
        <div className='flex flex-col gap-2 p-4 relative'>

            {/* Rows */}
            <div
                className='w-full p-2 ion-activatable ripple-parent text-secondary flex flex-col items-center justify-between gap-4 relative rounded-lg border border-slate-300 bg-slate-200'>

                <IonRouterLink routerDirection='forward' routerLink='/group/chat/1'
                    className='w-full flex flex-col'>
                    {/* group image, sender name and message summary */}
                    <div className='w-full flex flex-row justify-between items-center gap-2'>
                        {/* image */}
                        <img src='https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                            className='w-14 h-14 rounded-xl object-cover' />
                        {/* name and last message info */}
                        <h4 className='w-full flex flex-col gap-0 overflow-hidden'>
                            <p className='flex flex-row items-center justify-between'>
                                <strong className='text-sm text-slate-800 truncate'>
                                    HTML, CSS & JS Group
                                </strong>
                                <span className='text-xs text-slate-500 shrink-0'>11:36</span>
                            </p>
                            <span className='text-xs text-slate-800 font-medium leading-none'>
                                Sarah Miller
                            </span>
                            <p className='flex flex-row items-center justify-between gap-2'>
                                <span className='text-xs text-slate-600 truncate'>
                                    I posted a new video on YouTube about navigation bar using HTML and CSS
                                </span>
                                <span className='bg-primary rounded-full w-5 h-5 flex justify-center items-center shrink-0 text-[10px] text-slate-100'>
                                    {letterizeNumbers(124, 99)}
                                </span>
                            </p>
                        </h4>
                    </div>

                    {/* members info */}
                    <div className='w-full flex flex-row items-center justify-between mt-4'>
                        {/* avatar group */}
                        <div className='w-auto relative px-2'>
                            <AvatarGroup
                                total={3}
                                renderSurplus={(surplus: any) => <span>+{surplus}k</span>}
                                avatars={[
                                    { alt: "Remy Sharp", src: "https://images.unsplash.com/photo-1430990480609-2bf7c02a6b1a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                                    { alt: "Travis Howard", src: "https://images.unsplash.com/photo-1504194104404-433180773017?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                                    { alt: "Agnes Walker", src: "https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                                    { alt: "Trevor Henderson", src: "https://images.unsplash.com/photo-1586260695115-62d9d6491162?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                                ]}
                            />
                        </div>
                    </div>
                </IonRouterLink>

                <IonRippleEffect></IonRippleEffect>

            </div>

        </div>
    );
};

export default ChatGroupsListComp;