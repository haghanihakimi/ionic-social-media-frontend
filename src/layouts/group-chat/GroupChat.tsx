import { IonHeader, IonPage, IonRouterLink } from '@ionic/react';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { useHistory } from "react-router-dom";
import { useLongPress } from '@reactuses/core';
import {
    HiMiniChevronLeft as LeftIcon, HiOutlineInformationCircle as InfoIcon,
    HiOutlineVideoCamera as VideoCallIcon, HiOutlinePhone as PhoneCallIcon,
    HiPaperClip as AttachmentIcon, HiOutlinePaperAirplane as SendIcon,
    HiOutlineCamera as CameraIcon, HiXMark as CloseIcon,
} from "react-icons/hi2";
import {
    IoCheckmarkDone as ReadIcon, IoCheckmark as DeliveredIcon,
} from "react-icons/io5";
import ProfileImagePartial from '../../partials/profile-image/ProfileImage';
import ContentEditable from 'react-contenteditable';
import { Capacitor } from '@capacitor/core';
import { Haptics } from '@capacitor/haptics';
import { useDispatch, useSelector } from 'react-redux';
import { toggleChatAttachmentsModal, toggleGroupChatOptionsModal, toggleIndividualReceivedMessageModal, toggleIndividualSentMessageModal } from '../../server/store/reducers/modals';
import IndividualSentMessageModal from '../../partials/modals/IndividualSentMessageModal/IndividualSentMessageModal';
import { RootState } from '../../server/store';
import IndividualReceivedMessageModal from '../../partials/modals/IndividualReceivedMessageModal/IndividualReceivedMessageModal';
import { longPress } from '../../server/plugins';
import AvatarGroup from '../../partials/grouped-avatars/grouped-avatars';
import GroupChatOptionsModal from '../../partials/modals/GroupChatOptionsModal/GroupChatOptionsModal';
import ChatAttachmentsModal from '../../partials/modals/ChatAttachmentsModal/ChatAttachmentsModal';

const GroupChatLayout: React.FC = () => {
    const history = useHistory();
    const modals = useSelector((state: RootState) => state.modals);
    const dispatch = useDispatch();
    const [content, setContent] = useState("")
    const [chatInputFocus, setChatInputFocus] = useState<boolean>(false);
    const [chatAttachments, setChatAttachments] = useState<Array<{ image: string }>>([]);
    const [currentMessage, setCurrentMessage] = useState<{ messageId: number }>({
        messageId: 0
    });
    const { startLongPress, cancelLongPress } = longPress();
    const messagesView = useRef<HTMLDivElement>(null);

    const onContentChange = useCallback((evt: any) => {
        setContent(evt.currentTarget.innerHTML)
    }, [])

    const handlePickImages = async () => {
        try {
            const { photos } = await Camera.pickImages({
                quality: 100,
            });

            if (photos && photos.length > 0) {
                const createImageObject = (photo: any) => ({
                    image: photo.webPath,
                });

                setChatAttachments((prevAttachments) => [...prevAttachments, ...photos.map(createImageObject)]);
            }
        } catch (error) {
            return Promise.resolve(error);
        }
    };

    const handleOpenCamera = async () => {
        try {
            if (Capacitor.isNativePlatform()) {
                const image = await Camera.getPhoto({
                    quality: 100,
                    allowEditing: false,
                    saveToGallery: false,
                    resultType: CameraResultType.Uri,
                    source: CameraSource.Camera
                });

                if (image && image.webPath) {
                    const newImageObject = { image: image.webPath };

                    setChatAttachments((prevAttachments) => [
                        ...prevAttachments,
                        newImageObject,
                    ]);
                }
            }
        } catch (error) {
            return Promise.resolve(error);
        }
    };

    const showIndividualSentMessageModal = async () => {
        if (Capacitor.isNativePlatform()) {
            await Haptics.vibrate({ duration: 50 });
        }
        dispatch(toggleIndividualSentMessageModal(true));
    }

    const showIndividualReceivedMessageModal = async () => {
        if (Capacitor.isNativePlatform()) {
            await Haptics.vibrate({ duration: 50 });
        }
        dispatch(toggleIndividualReceivedMessageModal(true));
    }

    useEffect(() => {
        if (messagesView.current) {
            messagesView.current.scrollTop = messagesView.current.scrollHeight;
        }
    }, [messagesView, chatInputFocus])

    return (
        <IonPage>
            <div id='chat-container' className='w-full h-screen relative flex flex-col justify-between overflow-hidden'>
                {/* header */}
                <IonHeader className='w-full p-0 m-0 border-b border-slate-200 sticky top-0 shadow-none relative'>
                    <div className='w-full p-2 bg-gradient-to-r from-light-primary to-primary flex flex-row justify-between items-center'>
                        {/* profile image & name */}
                        <div className='w-auto flex flex-row items-center overflow-hidden'>
                            <button onClick={() => history.goBack()}
                                className='w-6 h-6 ion-activatable ripple-parent shrink-0 text-slate-100 mr-2 rounded-full flex justify-center items-center'>
                                <LeftIcon className='w-5 h-5 text-slate-100' />
                            </button>
                            <ProfileImagePartial image='https://images.unsplash.com/photo-1488590528505-98d2b5aba04b'
                                width={32} height={32} link='/' active={false} />
                            <h4 className='text-sm text-slate-200 ml-2 truncate overflow-hidden flex flex-col leading-tight'>
                                <span className='truncate'>
                                    HTML, CSS & JS Group
                                </span>
                                {/* <span className='text-[11px]'>sara_miller</span> */}
                            </h4>
                        </div>
                        {/* buttons */}
                        <div className='w-auto flex flex-row items-center justify-between'>
                            <IonRouterLink routerDirection='forward' routerLink='/chat/group/members/list/1'>
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
                            </IonRouterLink>
                            <button onClick={() => dispatch(toggleGroupChatOptionsModal(true))}
                                className='w-6 h-6 ion-activatable ripple-parent shrink-0 text-slate-100 rounded-full flex justify-center items-center'>
                                <InfoIcon className='w-5 h-5 text-slate-100' />
                            </button>
                        </div>
                    </div>
                </IonHeader>

                {/* messages received and sent rows */}
                <div ref={messagesView} style={{ overflowAnchor: 'none' }} className='relative w-full h-screen flex flex-col gap-3 z-0 py-2 px-1 overflow-auto'>

                    {/* sent messages container */}
                    <div className='w-full flex flex-col gap-[1px]'>

                        <div
                            className="select-text flex items-end justify-start flex-row-reverse group mb-[1px] last:mb-0">
                            <div onTouchStart={() => startLongPress(showIndividualSentMessageModal)}
                                onTouchEnd={cancelLongPress} onTouchMove={cancelLongPress}
                                className="max-w-[75%] relative text-sm text-slate-200 animate-bounceBubbles select-none flex flex-col gap-[1px] items-end bg-gradient-to-b from-primary to-light-primary p-2 rounded-tr-2xl rounded-tl-2xl">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                                <span className='text-xs text-slate-100 pt-1 flex flex-row items-center gap-1'>
                                    Mon Feb 06 2022, 16:24<ReadIcon className="w-4 h-4 text-slate-100" />
                                </span>
                            </div>
                        </div>
                        <div
                            className="select-text flex items-end justify-start flex-row-reverse group mb-[1px] last:mb-0">
                            <div onTouchStart={() => startLongPress(showIndividualSentMessageModal)}
                                onTouchEnd={cancelLongPress} onTouchMove={cancelLongPress}
                                className="max-w-[75%] relative text-sm text-slate-200 animate-bounceBubbles select-none flex flex-col gap-[1px] items-end bg-gradient-to-b from-primary to-light-primary p-2 rounded-bl-2xl rounded-br-md">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                                <span className='text-xs text-slate-100 pt-1 flex flex-row items-center gap-1'>
                                    Mon Feb 06 2022, 16:24<ReadIcon className="w-4 h-4 text-slate-100" />
                                </span>
                            </div>
                        </div>

                    </div>

                    {/* received messages container */}
                    <div className='w-full flex flex-col gap-[1px]'>

                        <div className="select-text flex items-end justify-end flex-row-reverse group mb-[1px] last:mb-0">
                            <div onTouchStart={() => startLongPress(showIndividualReceivedMessageModal)}
                                onTouchEnd={cancelLongPress} onTouchMove={cancelLongPress}
                                className="max-w-[75%] text-sm select-none animate-bounceBubbles flex flex-col gap-[1px] text-slate-700 items-end bg-slate-200 border border-slate-300 p-2 rounded-tr-2xl rounded-tl-2xl">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                                <span className='text-xs text-slate-500 pt-1 flex flex-row items-center gap-1'>
                                    Mon Feb 06 2022, 16:24
                                </span>
                            </div>
                        </div>
                        <div className="select-text flex items-end justify-end flex-row-reverse group mb-[1px] last:mb-0">
                            <div onTouchStart={() => startLongPress(showIndividualReceivedMessageModal)}
                                onTouchEnd={cancelLongPress} onTouchMove={cancelLongPress}
                                className="max-w-[75%] text-sm select-none animate-bounceBubbles flex flex-col gap-[1px] text-slate-700 items-end bg-slate-200 border border-slate-300 p-2">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                                <span className='text-xs text-slate-500 pt-1 flex flex-row items-center gap-1'>
                                    Mon Feb 06 2022, 16:24
                                </span>
                            </div>
                        </div>
                        <div className="select-text flex items-end justify-end flex-row-reverse group mb-[1px] last:mb-0">
                            <div onTouchStart={() => startLongPress(showIndividualReceivedMessageModal)}
                                onTouchEnd={cancelLongPress} onTouchMove={cancelLongPress}
                                className="max-w-[75%] text-sm select-none animate-bounceBubbles flex flex-col gap-[1px] text-slate-700 items-end bg-slate-200 border border-slate-300 p-2 rounded-br-2xl rounded-bl-md">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                                <span className='text-xs text-slate-500 pt-1 flex flex-row items-center gap-1'>
                                    Mon Feb 06 2022, 16:24
                                </span>
                            </div>
                        </div>

                    </div>

                    {/* sent messages container */}
                    <div className='w-full flex flex-col gap-[1px]'>

                        <div
                            className="select-text flex items-end justify-start flex-row-reverse group mb-[1px] last:mb-0">
                            <div onTouchStart={() => startLongPress(showIndividualSentMessageModal)}
                                onTouchEnd={cancelLongPress} onTouchMove={cancelLongPress}
                                className="max-w-[75%] relative text-sm text-slate-200 animate-bounceBubbles select-none flex flex-col gap-[1px] items-end bg-gradient-to-b from-primary to-light-primary p-2 rounded-tr-2xl rounded-tl-2xl">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                                <span className='text-xs text-slate-100 pt-1 flex flex-row items-center gap-1'>
                                    Mon Feb 06 2022, 16:24<ReadIcon className="w-4 h-4 text-slate-100" />
                                </span>
                            </div>
                        </div>
                        <div
                            className="select-text flex items-end justify-start flex-row-reverse group mb-[1px] last:mb-0">
                            <div onTouchStart={() => startLongPress(showIndividualSentMessageModal)}
                                onTouchEnd={cancelLongPress} onTouchMove={cancelLongPress}
                                className="max-w-[75%] relative text-sm text-slate-200 animate-bounceBubbles select-none flex flex-col gap-[1px] items-end bg-gradient-to-b from-primary to-light-primary p-2 rounded-bl-2xl rounded-br-md">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                                <span className='text-xs text-slate-100 pt-1 flex flex-row items-center gap-1'>
                                    Mon Feb 06 2022, 16:24<DeliveredIcon className="w-4 h-4 text-slate-100" />
                                </span>
                            </div>
                        </div>

                    </div>

                </div>

                {/* sending input and buttons */}
                <div className='w-full relative bottom-0 z-10 bg-slate-100 border-t boreder-slate-300 flex flex-col items-center justify-between'>
                    {
                        chatAttachments && chatAttachments.length > 0 ?
                            <div className='w-full flex flex-col justify-end items-end overflow-x-auto'>
                                <button onClick={() => setChatAttachments([])}
                                    className='w-5 h-5 flex justify-center items-center rounded-full bg-slate-700 bg-opacity-60 mt-1 mx-2'>
                                    <CloseIcon className='w-4 h-4 text-slate-100' />
                                </button>
                                <div className='w-full flex flex-row items-center justify-start p-2 overflow-x-auto'>
                                    {chatAttachments.map((image: { image: string }, i: number) => {
                                        return <img src={image.image} key={i} className='w-10 h-10 rounded object-cover shrink-0 mr-1 last:mr-0' />
                                    })}
                                </div>
                            </div>
                            : ''
                    }
                    <div className='w-full px-2 relative flex flex-row items-center justify-between'>
                        <div className='w-fit flex flex-row items-center'>
                            <button onClick={() => dispatch(toggleChatAttachmentsModal(true))} 
                            className='w-6 h-6 flex justify-center items-center shrink-0 relative mr-2'>
                                <AttachmentIcon className='w-5 h-5 text-primary' />
                            </button>
                            {
                                !chatInputFocus ? <button onClick={handleOpenCamera} className='w-6 h-6 flex justify-center items-center shrink-0 relative mr-2'>
                                    <CameraIcon className='w-5 h-5 text-primary' />
                                </button> : ''
                            }
                        </div>
                        <ContentEditable
                            onChange={onContentChange}
                            onBlur={() => { onContentChange; setChatInputFocus(false) }}
                            onFocus={() => { setChatInputFocus(true); }}
                            html={content}
                            data-placeholder='Write a message...'
                            className="w-full max-h-[120px] overflow-auto px-2 py-3 font-normal text-slate-700 text-sm before:absolute before:h-fit before:top-0 before:bottom-0 before:my-auto empty:before:content-[attr(data-placeholder)] before:text-secondary before:text-sm before:font-normal"
                        />
                        <button className='w-6 h-6 flex justify-center items-center shrink-0'>
                            <SendIcon className='w-5 h-5 text-primary' />
                        </button>
                    </div>
                </div>

                {
                    modals.individualSentMessageModal ? <IndividualSentMessageModal /> : ''
                }
                {
                    modals.individualReceivedMessageModal ? <IndividualReceivedMessageModal /> : ''
                }
                {
                    modals.groupChatOptionsModal ? <GroupChatOptionsModal /> : ''
                }
                {
                    modals.chatAttachmentsModal ? <ChatAttachmentsModal /> : ''
                }
            </div>
        </IonPage>
    );
};

export default GroupChatLayout;