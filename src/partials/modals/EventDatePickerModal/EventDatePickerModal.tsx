import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IonHeader, IonToolbar, IonModal, IonDatetime, IonRippleEffect } from '@ionic/react';
import {
    HiMiniChevronRight as RightIcon,
} from "react-icons/hi2";
import { RootState } from '../../../server/store';
import { setEventDatePickerEndtDate, setEventDatePickerStartDate, toggleEventDatePickerModal } from '../../../server/store/reducers/modals';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import './EventDatePickerModal.css';

const EventDatePickerModal: React.FC = () => {
    const modals = useSelector((state: RootState) => state.modals);
    const dispatch = useDispatch();
    const modal = useRef<HTMLIonModalElement>(null);
    const [dateSlide, setDateSlide] = useState<string>('start_at');
    const [swiper, setSwiper] = useState<any>(null);
    const endDateTime = useRef<null | HTMLIonDatetimeElement>(null);

    const toggleDateSlide = (index: number) => {
        if (swiper !== null) {
            swiper.slideTo(index);
        }
    };

    const handleSlideChange = () => {
        if (swiper !== null) {
            switch (swiper.activeIndex) {
                case 0:
                    setDateSlide('start_at')
                    break;
                case 1:
                    setDateSlide('end_at')
                    break;
            }
        }
    };

    const clearEndDate = () => {
        endDateTime.current?.reset();
        dispatch(setEventDatePickerEndtDate(''));
    };

    return (
        <div id='eventDatesModal' className='w-full relative'>
            <IonModal id="eventDatesModal" ref={modal} isOpen={modals.eventDatePickerModal.modal}
                initialBreakpoint={1} breakpoints={[0, 1]}
                onDidDismiss={() => dispatch(toggleEventDatePickerModal(false))}>
                <IonToolbar class='shadow-none px-4 border-b border-slate-200 flex justify-center items-center'>
                    <div className='w-full flex items-center'>
                        <h4 className='w-full text-sm text-center'>
                            Event Date
                        </h4>
                    </div>
                </IonToolbar>
                <div className='w-full relative flex flex-col gap-0 py-4'>
                    <div className='w-full flex flex-row gap-0 justify-betwen items-center'>
                        <button onClick={() => toggleDateSlide(0)}
                            className={`w-full ion-activatable ripple-parent p-2 text-sm transition duration-500 border-b-2 ${dateSlide === 'start_at' ? 'text-primary border-secondary' : 'text-slate-800 border-transparent'}`}>
                            Start at*
                            <IonRippleEffect></IonRippleEffect>
                        </button>
                        <button onClick={() => toggleDateSlide(1)}
                            className={`w-full ion-activatable ripple-parent p-2 text-sm transition duration-500 border-b-2 ${dateSlide === 'end_at' ? 'text-primary border-secondary' : 'text-slate-800 border-transparent'}`}>
                            End at
                            <IonRippleEffect></IonRippleEffect>
                        </button>
                    </div>
                    <Swiper className="mySwiper py-2" onSwiper={(swiper: object) => { setSwiper(swiper) }}
                        onSlideChange={handleSlideChange}>
                        <SwiperSlide className='relative flex flex-col justify-center'>
                            <IonDatetime presentation="date-time" preferWheel={true} max='2025' min='2024'
                                onIonChange={(event: any) => {
                                    dispatch(setEventDatePickerStartDate(event.detail.value))
                                }}
                                value={modals.eventDatePickerModal.start_date.length > 0 ? modals.eventDatePickerModal.start_date : new Date().toISOString()}>
                            </IonDatetime>
                        </SwiperSlide>
                        <SwiperSlide className='relative flex flex-col justify-center'>
                            <IonDatetime ref={endDateTime} presentation="date-time" preferWheel={true} max='2025' min='2024'
                                onIonChange={async (event: any) => {
                                    dispatch(setEventDatePickerEndtDate(event.detail.value))
                                }}
                                value={modals.eventDatePickerModal.end_date.length > 0 ? modals.eventDatePickerModal.end_date : new Date().toISOString()}>
                            </IonDatetime>
                            <button onClick={() => clearEndDate()} className='w-full text-primary text-sm font-medium'>
                                Clear
                            </button>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </IonModal >
        </div >
    );
};

export default EventDatePickerModal;
