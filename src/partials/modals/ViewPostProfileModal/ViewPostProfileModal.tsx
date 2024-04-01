import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IonHeader, IonToolbar, IonModal, IonRippleEffect } from '@ionic/react';
import { RootState } from '../../../server/store';
import { toggleViewPostProfileModal } from '../../../server/store/reducers/modals';
import { toggleBlockAlert } from '../../../server/store/reducers/alerts';

const ViewPostProfileModal: React.FC = () => {
    const modals = useSelector((state: RootState) => state.modals);
    const dispatch = useDispatch();
    const modal = useRef<HTMLIonModalElement>(null);

    return (
        <>
            <IonModal ref={modal} id='userProfileModal' isOpen={modals.viewPostProfileModal.modal} initialBreakpoint={1} breakpoints={[0, 1]}
                onDidDismiss={() => dispatch(toggleViewPostProfileModal({ profileId: 0, firstname: '', lastname: '', username: '', modal: false }))}>
                <IonToolbar class='shadow-none px-4 border-b border-slate-200 flex justify-center items-center'>
                    <div className='w-full flex justify-center items-center outline-none'>
                        <h4 className='w-full text-sm font-medium text-slate-600 text-center outline-none'>
                            {modals.viewPostProfileModal.username}
                        </h4>
                    </div>
                </IonToolbar>
                <div className='w-full relative flex flex-col'>
                    <button
                        className='w-full leading-tight ion-activatable ripple-parent flex flex-col outline-none text-secondary text-left text-sm px-4 py-3 border-b border-slate-100 last:border-none'>
                        <span className='text-slate-800'>Silent Follow</span>
                        <span className='text-[11px] text-slate-500'>
                            {modals.viewPostProfileModal.username} {"won't"} know you follow them & you see their posts when their profile privacy is set to <strong>public</strong>.
                        </span>
                        <IonRippleEffect></IonRippleEffect>
                    </button>
                    <button
                        onClick={() => { dispatch(toggleBlockAlert(true)); dispatch(toggleViewPostProfileModal({ profileId: 0, firstname: '', lastname: '', username: '', modal: false })) }}
                        className='w-full ion-activatable ripple-parent outline-none text-secondary text-left text-sm px-4 py-3 border-b border-slate-100 last:border-none'>
                        <span className='text-slate-800'>Block {modals.viewPostProfileModal.firstname}</span>
                        <IonRippleEffect></IonRippleEffect>
                    </button>
                </div>
            </IonModal>
        </>
    );
};

export default ViewPostProfileModal;