import React from 'react';
import { IonPage, IonToolbar, useIonRouter } from '@ionic/react';
import {
    HiOutlineBell as BellIconOutline, HiBell as BellIconFilled,
} from "react-icons/hi2";
import { letterizeNumbers } from '../../server/plugins';
import ProfileImagePartial from '../../partials/profile-image/ProfileImage';
import ViewPostComp from '../../components/view-post/ViewPostComp';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../server/store';
import NotificationsModal from '../../partials/modals/NotificationsModal/NotificationsModal';
import { toggleNotificationsModal } from '../../server/store/reducers/modals';

const HomeLayout: React.FC = () => {
    const modals = useSelector((state: RootState) => state.modals)
    const dispatch = useDispatch();
    const ionRouter = useIonRouter();

    return (
        <IonPage>
            <div className='w-full h-screen relative pb-[73px] overflow-auto'>
                {/* back button */}
                <IonToolbar
                    class='shadow-none'>
                    {/* Logo and Notifications */}
                    <div className='w-full flex flex-row justify-between items-center px-4 py-2 border-b border-slate-200 bg-slate-100 bg-opacity-90 backdrop-blur-2xl'>
                        <h1 className='w-full text-lg font-bold italic text-slate-800'>
                            Loli
                        </h1>
                        <button onClick={() => dispatch(toggleNotificationsModal(true))}
                            className='w-10 h-10 flex shrink-0 justify-center items-center bg-primary bg-opacity-5 rounded-full border border-primary border-opacity-30 relative'>
                            {
                                ionRouter.routeInfo.pathname === "/notifications" ?
                                    <BellIconFilled className='w-5 h-5 animate-fadeIn opacity-100 text-primary transition duration-200' />
                                    : <BellIconOutline className='w-5 h-5 animate-fadeIn opacity-100 text-primary transition duration-200' />
                            }
                            {
                                ionRouter.routeInfo.pathname === "/notifications" ?
                                    <span className='w-[6px] h-[6px] animate-fadeIn absolute bottom-0 translate-y-1/2 left-0 right-0 mx-auto bg-gradient-to-r from-secondary to-primary rounded-full'>
                                        &nbsp;
                                    </span> : ''
                            }
                            <span className='w-4 h-4 text-[8px] flex justify-center items-center bg-primary text-slate-100 rounded-full border-2 border-slate-100 absolute top-[2px] right-[5px]'>
                                {letterizeNumbers(16, 9)}
                            </span>
                        </button>
                    </div>

                    {/* stories list */}
                    <div className='w-full mt-2 p-2 flex flex-row gap-1 items-center justify-start'>
                        <div className='w-16 h-auto shrink-0'>
                            <ProfileImagePartial image='https://images.unsplash.com/photo-1531853749260-4447dc77f7e8'
                                width={64} height={64} link='/login'
                                isStory active={false} userName='sara_miller' />
                        </div>
                        <div className='w-16 h-auto shrink-0'>
                            <ProfileImagePartial image='https://images.unsplash.com/photo-1531853749260-4447dc77f7e8'
                                width={64} height={64} link='/login'
                                isStory active={false} isSeen={true} userName='sara_miller' />
                        </div>
                    </div>
                </IonToolbar>

                <div className='w-full relative overflow-auto'>
                    <ViewPostComp />
                </div>

                {
                    modals.notificationsModal ? <NotificationsModal /> : ''
                }
            </div>
        </IonPage>
    );
};

export default HomeLayout;
