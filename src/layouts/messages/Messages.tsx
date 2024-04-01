import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from "react-router-dom";
import { IonPage, IonContent, IonRippleEffect } from '@ionic/react';
import {
  HiMagnifyingGlass as SearchIcon, HiMiniEllipsisHorizontal as MenuIcon,
  HiMiniChevronLeft as LeftIcon,
} from "react-icons/hi2";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import './Messages.css';
import ChatsListComp from '../../components/chats-list/ChatsList';
import ChatGroupsListComp from '../../components/chat-groups-list/ChatGroupsList';
import ChatDiscoveryListComp from '../../components/chat-discovery-list/ChatDiscoveryList';

const MessagesLayout: React.FC = () => {
  const tabs = ["Chats", "Groups", "Discover"];
  const [swiper, setSwiper] = useState<any>(null);
  const [selectedIndex, setSelectedIndex] = useState<string>("Chats");
  const selectedTab = useRef<null | HTMLDivElement>(null);
  const history = useHistory();

  const updateSwiperSlide = () => {
    if (swiper !== null) {
      switch (swiper.activeIndex) {
        case 0:
          setSelectedIndex('Chats')
          break;
        case 1:
          setSelectedIndex('Groups')
          break;
        case 2:
          setSelectedIndex('Discover')
          break;
      }
    }
  };

  return (
    <IonPage id='messages-container'>
      <IonContent>
        
        {/* heading section */}
        <div className='w-full fixed top-0 left-0 bg-slate-100 z-10'>
          <div className='w-full p-4 flex flex-row items-center justify-between gap-4 sticky top-0'>
            <button onClick={() => history.goBack()}
              className='w-7 h-7 ion-activatable ripple-parent shrink-0 text-slate-100 rounded-full bg-gradient-to-r from-secondary to-primary flex justify-center items-center'>
              <LeftIcon className='w-5 h-5 text-slate-100 -translate-x-[1px]' />
              <IonRippleEffect></IonRippleEffect>
            </button>
            <div className='w-full relative flex justify-center items-center'>
              <input type='text' placeholder='Search...' defaultValue={'sarah m'}
                className='w-full py-1 pr-2 pl-7 text-sm text-slate-900 bg-slate-100 outline-none border-b-2 border-slate-200 transition duration-200 focus:border-primary peer' />
              <SearchIcon className='w-5 h-5 text-slate-900 absolute top-0 left-1 bottom-0 my-auto transition duration-200 peer-focus:text-primary' />
            </div>
            <button className='w-7 h-7 shrink-0 ion-activatable ripple-parent flex justify-center items-center relative rounded-full text-secondary'>
              <MenuIcon className='w-5 h-5 text-slate-700' />
              <IonRippleEffect></IonRippleEffect>
            </button>
          </div>
          <div ref={selectedTab} className='w-full top-0 flex flex-row items-center justify-start px-4'>

            {
              tabs.map((tab: string, i: number) => {
                return <div key={i} className={`px-4 py-2 ion-activatable ripple-parent text-center relative transition duration-200 ${swiper?.activeIndex === i ? 'text-primary' : ''}`} onClick={() => { swiper.slideTo(i); }}>
                  {tab}
                  <IonRippleEffect></IonRippleEffect>
                  {
                    swiper?.activeIndex === i ?
                    <span className='w-full h-0.5 bg-primary absolute bottom-0 left-0'>&nbsp;</span> : ''
                  }
                </div>
              })
            }

          </div>
        </div>

        {/* body section */}
        <div id='messages-swiper-slides' className='w-full relative pt-[102px] z-0'>
          <Swiper onSwiper={(swiper: object) => { setSwiper(swiper) }}
            autoHeight observer observeParents onSlideChange={() => updateSwiperSlide()}>
            <SwiperSlide>
              <ChatsListComp />
            </SwiperSlide>
            <SwiperSlide>
              <ChatGroupsListComp />
            </SwiperSlide>
            <SwiperSlide>
              <ChatDiscoveryListComp />
            </SwiperSlide>
          </Swiper>
        </div>

      </IonContent>
    </IonPage>
  );
};

export default MessagesLayout;