import React, { useState } from 'react';
import { IonPage, IonContent, IonHeader, IonToolbar, IonRippleEffect } from '@ionic/react';
import { format } from 'date-fns';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import {
    HiMiniChevronLeft as LeftIcon, HiMiniChevronRight as RightIcon,
    HiCalendarDays as CalendarIcon, HiOutlinePencil as PencilIcon
} from "react-icons/hi2";
import { useHistory } from "react-router-dom";
import { CreateEventForm } from '../../server/types/create-event-form-types';
import EventDatePickerModal from '../../partials/modals/EventDatePickerModal/EventDatePickerModal';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../server/store';
import { toggleEventDatePickerModal, toggleEventInviteesList } from '../../server/store/reducers/modals';
import EventInviteesListModal from '../../partials/modals/EventInviteesModal/EventInviteesModal';
import { plural } from '../../server/plugins/index';
import { Capacitor } from '@capacitor/core';

const CreateEventLayout: React.FC = () => {
    const history = useHistory();
    const modals = useSelector((state: RootState) => state.modals);
    const dispatch = useDispatch();
    const [eventForm, setEventForm] = useState<CreateEventForm>({
        name: '',
        description: '',
        venue: '',
        invitees: [],
        privacy: false,
        start_date: new Date(),
        end_date: new Date(),
    });
    const [groupImage, setGroupImage] = useState<string>("");

    const handlePickImages = async () => {
        try {
            if (Capacitor.isNativePlatform()) {
              const image = await Camera.getPhoto({
                quality: 100,
                allowEditing: false,
                saveToGallery: false,
                resultType: CameraResultType.Uri,
              });
      
              if (image && image.webPath) {
                setGroupImage(image.webPath);
              }
            }
          } catch (error) {
            return Promise.resolve(error);
          }
    };

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
                                        Create Event
                                    </strong>
                                </div>
                            </div>
                        </IonToolbar>
                    </IonHeader>

                    {/* contents */}
                    <section className='w-full relative py-2 px-4 flex flex-col gap-2 items-start justify-start'>
                        {/* group name and image */}
                        <div className='w-full flex flex-row justify-start items-center gap-2'>
                            {/* image */}
                            <div onClick={handlePickImages}
                                className='w-16 h-16 relative rounded-full shrink-0 flex justify-center items-center border border-slate-300'>
                                {/* <img src='https://plus.unsplash.com/premium_photo-1663932464494-71bee85afe5b?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
                                className='w-16 h-16 object-cover rounded-full' /> */}
                                <CalendarIcon className='w-6 h-6 text-slate-500' />
                                <span className='absolute w-5 h-5 bg-slate-100 rounded-full flex justify-center items-center top-0 right-0 border border-slate-300 shadow-md'>
                                    <PencilIcon className='w-3 h-3 text-slate-800' />
                                </span>
                            </div>
                            {/* Name */}
                            <div className='w-full relative'>
                                <input type='text' defaultValue={eventForm.name} onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    setEventForm(prevState => ({
                                        ...prevState,
                                        name: e.target.value,
                                    }))
                                }}
                                    className='w-full bg-slate-100 outline-none transition duration-200 border-b-2 border-slate-300 p-1 focus:border-secondary'
                                    placeholder='Group Name*' />
                            </div>
                        </div>

                        {/* group description */}
                        <textarea name="" id="" cols={30} rows={4} placeholder='Group description'
                            defaultValue={eventForm.description} onInput={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                                setEventForm(prevState => ({
                                    ...prevState,
                                    description: e.target.value,
                                }))
                            }}
                            className='w-full max-h-[120px] mb-2 text-sm text-slate-900 resize-none bg-slate-100 p-2 outline-none border-b-2 border-slate-300 transition duration-200 focus:border-secondary'></textarea>

                        <div className='w-full flex flex-col gap-4'>
                            {/* Event venue */}
                            <div className='w-full relative'>
                                <input type='text' defaultValue={eventForm.venue} onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    setEventForm(prevState => ({
                                        ...prevState,
                                        venue: e.target.value,
                                    }))
                                }}
                                    className='w-full bg-slate-100 text-sm outline-none transition duration-200 border-b-2 border-slate-300 p-1 focus:border-secondary'
                                    placeholder='Event Venue' />
                            </div>

                            {/* Event date */}
                            <div className='w-full relative'>
                                <button onClick={() => dispatch(toggleEventDatePickerModal(true))}
                                    className={`w-full ion-activatable ripple-parent flex justify-between items-center text-secondary bg-slate-200 outline-none border border-slate-300 ${modals.eventDatePickerModal.start_date.length > 0 && modals.eventDatePickerModal.end_date.length > 0 ? 'rounded-3xl' : 'rounded-full'} text-left text-sm p-2`}>
                                    <p className='flex flex-col gap-0'>
                                        <span className='inline-flex font-medium flex row items-center gap-2 text-slate-800'>
                                            Event Date*
                                        </span>
                                        {
                                            modals.eventDatePickerModal.start_date.length > 0 ?
                                                <span className='text-xs text-slate-500'>
                                                    Starts: {format(modals.eventDatePickerModal.start_date, 'ccc LLL dd, HH:mm')}
                                                </span>
                                                : ''
                                        }
                                        {
                                            modals.eventDatePickerModal.end_date.length > 0
                                                ? <span className='text-xs text-slate-500'>
                                                    Ends: {format(modals.eventDatePickerModal.end_date, 'ccc LLL dd, HH:mm')}
                                                </span>
                                                : ''
                                        }
                                    </p>
                                    <RightIcon className='w-5 h-5 text-slate-500' />
                                    <IonRippleEffect></IonRippleEffect>
                                </button>
                            </div>

                            {/* Event invitees */}
                            <div className='w-full relative'>
                                <button onClick={() => dispatch(toggleEventInviteesList(true))}
                                    className='w-full ion-activatable ripple-parent outline-none flex justify-between items-center text-secondary bg-slate-200 outline-none border border-slate-300 rounded-full text-left text-sm p-2'>
                                    <span className='inline-flex font-medium flex row items-center gap-2 text-slate-800'>
                                        Invitees
                                    </span>
                                    <RightIcon className='w-5 h-5 text-slate-500' />
                                    <IonRippleEffect></IonRippleEffect>
                                </button>
                                {
                                    modals.eventInviteesList.invitees.length > 0 ?
                                        <p className='w-full text-sm text-slate-600 px-4'>
                                            {plural(modals.eventInviteesList.invitees.length, 'invitee')}
                                        </p> : ''
                                }
                            </div>

                            {/* Privacy toggle */}
                            <label className="bg-slate-200 ion-activatable ripple-parent text-secondary rounded-full inline-flex w-full p-2 outline-none justify-between items-center border border-slate-300">
                                <input type="checkbox" value="privacy" name='privacy' className="peer hidden invisible"
                                    defaultChecked={eventForm.privacy} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                        setEventForm(prevState => ({
                                            ...prevState,
                                            privacy: e.target.checked,
                                        }))
                                    }} />
                                <p className="text-sm font-medium text-slate-900">
                                    Private Event
                                </p>
                                <div className="relative shrink-0 w-9 h-5 bg-gray-300 border border-slate-400 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-slate-400 after:content-[''] after:absolute after:top-0 after:bottom-0 after:my-auto after:-start-[3px] after:bg-white after:border-gray-400 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-secondary peer-checked:to-primary"></div>
                                <IonRippleEffect></IonRippleEffect>
                            </label>
                        </div>

                        <button className='w-full ion-activatable ripple-parent font-medium text-center mt-2 p-4 text-slate-100 rounded-xl bg-gradient-to-r from-secondary to-primary'>
                            Create Event
                            <IonRippleEffect></IonRippleEffect>
                        </button>
                    </section>
                </div>

                {
                    modals.eventDatePickerModal.modal ?
                        <EventDatePickerModal /> : ''
                }

                {
                    modals.eventInviteesList.modal ?
                        <EventInviteesListModal /> : ''
                }

            </IonContent>
        </IonPage>
    );
};

export default CreateEventLayout;
