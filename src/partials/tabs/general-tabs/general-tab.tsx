import React, { useEffect, useState } from 'react';
import { Keyboard } from '@capacitor/keyboard';
import {
    HiOutlineHome as HomeIconOutline, HiOutlineBell as BellIconOutline,
    HiMiniHome as HomeIconFilled, HiBell as BellIconFilled,
    HiOutlineChatBubbleLeftRight as MessageIconOutline,
    HiChatBubbleLeftRight as MessagesIconFilled, HiMiniUsers as FriendsIconFilled,
    HiOutlineUsers as FriendsIconOutline, HiMagnifyingGlass as SearchIcon,
    HiMiniUser as ProfileIconFilled, HiOutlineUser as ProfileIconOutline,
} from "react-icons/hi2";
import { FaPlus as PlusIcon } from "react-icons/fa6";
import { IonButton, IonRippleEffect, IonRouterLink, useIonRouter } from '@ionic/react';
import './general-tab.css';
import { Capacitor } from '@capacitor/core';

const GeneralTabs: React.FC = () => {
    const ionRouter = useIonRouter();
    const [tabBottom, setTabBottom] = useState<string>('0px');

    useEffect(() => {
        if (Capacitor.isNativePlatform()) {
            Keyboard.addListener('keyboardDidShow', (KeyboardInfo) => {
                setTabBottom(`-${KeyboardInfo.keyboardHeight}px`)
            })
    
            Keyboard.addListener('keyboardDidHide', () => {
                setTabBottom(`${0}px`)
            })
        }

        return () => {
            if (Capacitor.isNativePlatform()) {
                Keyboard.removeAllListeners();
            }
        };
    })
    return (
        <div id='tabs-container' className='w-full fixed z-10 p-0 border-t border-slate-200' 
        style={{bottom: tabBottom}}>
            <div className='w-full rounded outline-none flex flex-row items-center justify-center gap-8 p-4 bg-slate-100 bg-opacity-90 backdrop-blur-lg rounded-none'>

                {/* navigate to home */}
                <IonRouterLink routerDirection='forward' routerLink='/home'>
                    <button className='w-10 h-10 flex shrink-0 justify-center items-center bg-primary bg-opacity-5 rounded-full border border-primary border-opacity-30 relative'>
                        {
                            ionRouter.routeInfo.pathname === "/home" ?
                                <HomeIconFilled className='w-5 h-5 animate-fadeIn opacity-100 text-primary transition duration-200' />
                                : <HomeIconOutline className='w-5 h-5 animate-fadeIn opacity-100 text-primary transition duration-200' />
                        }
                        {
                            ionRouter.routeInfo.pathname === "/home" ?
                                <span className='w-[6px] h-[6px] animate-fadeIn absolute bottom-0 translate-y-1/2 left-0 right-0 mx-auto bg-gradient-to-r from-secondary to-primary rounded-full'>
                                    &nbsp;
                                </span> : ''
                        }
                    </button>
                </IonRouterLink>

                {/* navigation to Search page */}
                <IonRouterLink routerDirection='forward' routerLink='/search'>
                    <button className='w-10 h-10 tabs-ion-buttons flex shrink-0 justify-center items-center bg-primary bg-opacity-5 rounded-full border border-primary border-opacity-30 relative'>
                        <SearchIcon className='w-5 h-5 text-primary shrink-0' />
                        {
                            ionRouter.routeInfo.pathname === "/search" ?
                                <span className='w-[6px] h-[6px] animate-fadeIn absolute bottom-0 translate-y-1/2 left-0 right-0 mx-auto bg-gradient-to-r from-secondary to-primary rounded-full'>
                                    &nbsp;
                                </span> : ''
                        }
                    </button>
                </IonRouterLink>

                {/* toggle "create" modal */}
                <button className='w-10 h-10 ion-activatable ripple-parent text-slate-100 flex shrink-0 justify-center items-center bg-gradient-to-r from-secondary to-primary rounded-full border border-primary border-opacity-50 relative'>
                    <PlusIcon className='w-5 h-5 text-slate-100' />
                    <IonRippleEffect></IonRippleEffect>
                </button>

                {/* navigate to Messages page */}
                <IonRouterLink routerDirection='forward' routerLink='/messages'>
                    <button className='w-10 h-10 flex shrink-0 justify-center items-center bg-primary bg-opacity-5 rounded-full border border-primary border-opacity-30 relative'>
                        {
                            ionRouter.routeInfo.pathname === "/messages" ?
                                <MessagesIconFilled className='w-5 h-5 animate-fadeIn text-primary transition duration-800' />
                                : <MessageIconOutline className='w-5 h-5 animate-fadeIn text-primary transition duration-800' />
                        }
                        {
                            ionRouter.routeInfo.pathname === "/messages" ?
                                <span className='w-[6px] h-[6px] animate-fadeIn absolute bottom-0 translate-y-1/2 left-0 right-0 mx-auto bg-gradient-to-r from-secondary to-primary rounded-full'>
                                    &nbsp;
                                </span> : ''
                        }
                    </button>
                </IonRouterLink>

                {/* navigate to User Profile page */}
                <IonRouterLink routerDirection='forward' routerLink='/profile'>
                    <button className='w-10 h-10 flex shrink-0 justify-center items-center bg-primary bg-opacity-5 rounded-full border border-primary border-opacity-30 relative'>
                        {
                            ionRouter.routeInfo.pathname === "/profile" ?
                                <ProfileIconFilled className='w-5 h-5 animate-fadeIn opacity-100 text-primary transition duration-800' />
                                : <ProfileIconOutline className='w-5 h-5 animate-fadeIn opacity-100 text-primary transition duration-800' />
                        }
                        {
                            ionRouter.routeInfo.pathname === "/profile" ?
                                <span className='w-[6px] h-[6px] animate-fadeIn absolute bottom-0 translate-y-1/2 left-0 right-0 mx-auto bg-gradient-to-r from-secondary to-primary rounded-full'>
                                    &nbsp;
                                </span> : ''
                        }
                    </button>
                </IonRouterLink>

            </div>
        </div>
    );
};

export default GeneralTabs;
