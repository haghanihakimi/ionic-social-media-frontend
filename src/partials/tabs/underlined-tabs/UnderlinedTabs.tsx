import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import './UnderlinedTabs.css';
import { IonRippleEffect } from '@ionic/react';

const UnderlinedTabs = ({ tabs, px, py, underlined = true, ripple = true, background, tabPosition = 'relative', children }: { tabs: string[], px: string, py: string, underlined?: boolean, ripple?: boolean, background: string, tabPosition?: string, children: React.ReactNode }) => {
  // const tabs = ["Chats", "Contacts", "Archived"];
  const [swiper, setSwiper] = useState<any>(null);
  const [selectedIndex, setSelectedIndex] = useState<string>("Chats");
  const selectedTab = useRef<null | HTMLDivElement>(null);
  const [selectedTabRect, setSelectedTabRect] = useState<DOMRect | null>(null);

  useEffect(() => {
    const selectedTabElement = selectedTab.current?.querySelector('.selected');
    if (selectedTabElement) {
      setSelectedTabRect(selectedTabElement.getBoundingClientRect());
    }
  }, [selectedIndex, swiper]);

  return (
    <div id='underlined-tabs' className='w-full relative'>
      {/* tabs */}
      <div ref={selectedTab} className={`w-full ${tabPosition} top-0 flex flex-row items-center justify-start px-4 ${background}`}>

        {
          tabs.map((tab: string, i: number) => {
            return <div key={i} className={`${px} ${py} ion-activatable ripple-parent text-center relative transition duration-200 ${selectedIndex === tab ? 'text-primary selected' : ''}`} onClick={() => { swiper.slideTo(i); setSelectedIndex(tab) }}>
              {tab}
              <IonRippleEffect></IonRippleEffect>
            </div>
          })
        }
        {
          underlined ? <span className="h-0.5 absolute bg-primary left-0 bottom-0 transition duration-200 rounded-full" style={{
            width: selectedTabRect ? `${selectedTabRect.width}px` : '0',
            transform: selectedTabRect ? `translateX(${selectedTabRect.x}px)` : 'translateX(0)',
          }}>&nbsp;</span> : ''
        }

      </div>
      <Swiper onSwiper={(swiper: object) => { setSwiper(swiper) }}
        autoHeight observer observeParents id='posts-slider'>
        {
          tabs.map((tab: string, i: number) => {
            return <SwiperSlide key={i}>
              {React.Children.toArray(children)[i]}
            </SwiperSlide>
          })
        }
      </Swiper>
    </div>
  );
};

export default UnderlinedTabs;