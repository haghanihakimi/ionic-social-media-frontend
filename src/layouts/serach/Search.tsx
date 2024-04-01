import React from 'react';
import { IonPage, IonContent, IonRouterLink } from '@ionic/react';
import { HiMagnifyingGlass as SearchIcon } from "react-icons/hi2";
import './Search.css'

const SearchLayout: React.FC = () => {

    return (
        <IonPage id='search-container'>
            <IonContent fullscreen>

                <div className='w-full relative pb-[74px] pt-16'>

                    <div className='w-full relative'>
                        {/* search input box and button container */}
                        <div className='w-full fixed flex justify-center items-center p-2 top-0 z-10 bg-slate-100 bg-opacity-90 backdrop-blur-lg'>
                            <input type='text' placeholder='Search...' defaultValue={'sarah m'}
                                className='w-full py-2 pr-2 pl-9 rounded-lg text-sm text-slate-900 bg-slate-100 outline-none ring-8 ring-transparent transition duration-200 focus:ring-2 focus:ring-secondary border border-slate-300 peer' />
                            <SearchIcon className='w-6 h-6 text-slate-900 absolute top-0 left-4 bottom-0 my-auto transition duration-200 peer-focus:text-secondary' />
                        </div>

                        {/* results */}
                        <div className='w-full relative z-0 px-2 flex flex-col gap-1'>
                            
                            {/* search resul rows */}
                            <IonRouterLink routerDirection='forward' routerLink='/user/profile' className='w-full relative block'>
                                {/* profile image & name */}
                                <div className='w-full flex flex-row items-center justify-between gap-2 p-2 rounded-lg bg-slate-100 border border-slate-200'>
                                    {/* profile image */}
                                    <img src='https://plus.unsplash.com/premium_photo-1677101410309-6eaf07d67271?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                        className='w-12 h-12 rounded-full object-cover shrink-0' />

                                    {/* profile name */}
                                    <h4 className='w-full flex flex-col text-sm text-slate-900'>
                                        <span className='font-medium'>Sarah Miller</span>
                                        <span className='-translate-y-1 text-slate-600 text-xs'>sara_miller</span>
                                    </h4>
                                </div>
                            </IonRouterLink>

                        </div>
                    </div>

                </div>

            </IonContent>
        </IonPage>
    );
};

export default SearchLayout;
