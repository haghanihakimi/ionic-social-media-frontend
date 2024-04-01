import { IonRouterLink } from '@ionic/react';
import React from 'react';

const ProfileImagePartial: React.FC<{ image: string, isStory?: boolean, width?: number, height?: number, active?: boolean, link?: string, isSeen?: boolean, userName?: string, }> = ({ image, isStory = false, width = 0, height = 0, active = true, link, isSeen = false, userName }) => {
    return (
        <IonRouterLink routerLink={link} routerDirection='forward' className='relative'>
            <div className='w-full relative flex flex-col justify-center items-center gap-0.5 text-center overflow-auto'>
                <div className={`relative flex justify-center items-center shrink-0 rounded-full`}
                    style={{ paddingTop: '10px', paddingBottom: '10px', width: `${width}px`, height: `${height}px` }}>
                    {
                        isStory ?
                            <div className={`w-full h-full absolute top-0 left-0 rounded-full animate-infiniteRotation ${isSeen ? 'bg-transparent border border-slate-400' : 'bg-gradient-to-r from-[#3662fc] to-secondary border border-transparent'}`}>
                                &nbsp;
                            </div>
                            : ''
                    }
                    <img src={image}
                        className={`rounded-full object-cover shrink-0 z-10`} style={{ width: `${width - (isStory ? 6 : 0)}px`, height: `${height - (isStory ? 6 : 0)}px` }} />
                    {
                        active ?
                            <span className='w-2.5 h-2.5 rounded-full bg-green-600 right-0 z-10 bottom-0 border-[1px] border-slate-700 absolute'>&nbsp;</span>
                            : ''
                    }
                </div>
                {
                    userName ?
                        <span className={`w-full relative text-slate-700 text-xs font-medium ${isSeen ? 'opacity-60' : ''}`}>
                            {userName}
                        </span>
                        : ''
                }
            </div>
        </IonRouterLink>
    );
};

export default ProfileImagePartial;
