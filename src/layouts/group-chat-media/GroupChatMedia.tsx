import { IonHeader, IonImg, IonPage, IonRippleEffect, IonRouterLink } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import {
    HiMiniChevronLeft as LeftIcon, HiOutlineInformationCircle as InfoIcon,
} from "react-icons/hi2";
import ProfileImagePartial from '../../partials/profile-image/ProfileImage';
import { useDispatch, useSelector } from 'react-redux';
import { toggleGroupChatMediaImageView, toggleGroupChatOptionsModal } from '../../server/store/reducers/modals';
import { RootState } from '../../server/store';
import AvatarGroup from '../../partials/grouped-avatars/grouped-avatars';
import GroupChatImageMediaViewModal from '../../partials/modals/GroupChatImageMediaViewModal/GroupChatImageMediaViewModal';

const GroupChatMediaLayout: React.FC = () => {
    const history = useHistory();
    const modals = useSelector((state: RootState) => state.modals);
    const dispatch = useDispatch();
    const [parentWidth, setParentWidth] = useState<string>('');

    useEffect(() => {
        const updateParentWidth = () => {
            const width = parseInt(((window.innerWidth - 4) / 4).toFixed(0), 10);
            setParentWidth(`${width}px`);
        };

        updateParentWidth();

        window.addEventListener('resize', updateParentWidth);

        return () => {
            window.removeEventListener('resize', updateParentWidth);
        };
    }, []);

    return (
        <IonPage>
            <div id='group-chat-media-container' className='w-full h-screen relative overflow-auto'>
                {/* header */}
                <IonHeader className='w-full p-0 m-0 sticky top-0 shadow-none relative'>
                    <div className='w-full p-2 bg-slate-50 flex flex-row items-center border-b border-slate-200'>
                        <button onClick={() => history.goBack()}
                            className='w-7 h-7 ion-activatable ripple-parent text-slate-100 rounded-full bg-gradient-to-r from-secondary to-primary flex justify-center items-center'>
                            <LeftIcon className='w-5 h-5 text-slate-100 -translate-x-[1px]' />
                            <IonRippleEffect></IonRippleEffect>
                        </button>
                        <span className='px-2 text-sm font-medium text-slate-800'>
                            Files &amp; Media
                        </span>
                    </div>
                </IonHeader>

                {/* messages received and sent rows */}
                <div className='w-full pt-1 flex flex-row items-center justify-start gap-[1px] flex-wrap'>
                    <div className='block bg-gray-100 relative rounded'
                        onClick={() => dispatch(toggleGroupChatMediaImageView({ id: 1, modal: true }))}
                        style={{ height: parentWidth, width: parentWidth }}>
                        <img src='https://plus.unsplash.com/premium_photo-1710030733154-16b30a0f944f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                            className='w-full h-full object-cover relative rounded' />
                    </div>
                    <div className='block bg-gray-100 relative rounded'
                        onClick={() => dispatch(toggleGroupChatMediaImageView({ id: 1, modal: true }))}
                        style={{ height: parentWidth, width: parentWidth }}>
                        <img src='https://images.unsplash.com/photo-1710302027281-a1bfbaa94f92?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                            className='w-full h-full object-cover relative rounded' />
                    </div>
                    <div className='block bg-gray-100 relative rounded'
                        onClick={() => dispatch(toggleGroupChatMediaImageView({ id: 1, modal: true }))}
                        style={{ height: parentWidth, width: parentWidth }}>
                        <img src='https://images.unsplash.com/photo-1710421871838-029427bed6b4?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                            className='w-full h-full object-cover relative rounded' />
                    </div>
                    <div className='block bg-gray-100 relative rounded'
                        onClick={() => dispatch(toggleGroupChatMediaImageView({ id: 1, modal: true }))}
                        style={{ height: parentWidth, width: parentWidth }}>
                        <img src='https://images.unsplash.com/photo-1710362921917-2e33bb342a23?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                            className='w-full h-full object-cover relative rounded' />
                    </div>
                </div>

                {
                    modals.groupChatMediaImageView.modal ?
                        <GroupChatImageMediaViewModal /> : ''
                }
            </div>
        </IonPage>
    );
};

export default GroupChatMediaLayout;