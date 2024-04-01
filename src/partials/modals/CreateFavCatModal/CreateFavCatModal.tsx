import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IonHeader, IonToolbar, IonModal, IonRippleEffect } from '@ionic/react';
import { RootState } from '../../../server/store';
import { toggleCreateFavCatModal } from '../../../server/store/reducers/modals';
import './CreateFavCatModal.css';

const CreateFavCatModal: React.FC = () => {
    const modals = useSelector((state: RootState) => state.modals);
    const dispatch = useDispatch();
    const modal = useRef<HTMLIonModalElement>(null);

    return (
        <>
            <IonModal ref={modal} id='createFavCat' isOpen={modals.createFavCatModal} initialBreakpoint={1} breakpoints={[0, 1]}
                onDidDismiss={() => dispatch(toggleCreateFavCatModal(false))}>
                <IonToolbar class='shadow-none px-4 border-b border-slate-200 flex justify-center items-center'>
                    <div className='w-full flex justify-center items-center outline-none'>
                        <h4 className='w-full text-sm font-medium text-slate-600 text-center outline-none'>
                            Create Favorite Category
                        </h4>
                    </div>
                </IonToolbar>
                <div className='w-full relative flex flex-col p-4 flex-col gap-2'>
                    <input type='text' placeholder='Category Name'
                        className='w-full p-2 text-sm text-slate-900 outline-none border-b-2 bg-transparent transition duration-200 focus:border-primary' />
                    <button className='w-full ion-activatable ripple-parent text-sm text-center mt-2 p-2 text-slate-100 rounded-xl bg-gradient-to-r from-secondary to-primary'>
                        Create Category
                        <IonRippleEffect></IonRippleEffect>
                    </button>
                </div>
            </IonModal>
        </>
    );
};

export default CreateFavCatModal;