import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IonActionSheet } from '@ionic/react';
import './FollowingActiveSheet.css';
import { RootState } from '../../../server/store';
import { toggleFollowingModal } from '../../../server/store/reducers/modals';
import { toggleFollowingAtiveSheet } from '../../../server/store/reducers/active-sheets';

const FollowingActiveSheet: React.FC = () => {
    const activeSheets = useSelector((state: RootState) => state.activeSheets);
    const dispatch = useDispatch();

    return (
        <>
            <IonActionSheet isOpen={activeSheets.followingActiveSheet} className='rounded-full'
                header="sara_miller" buttons={[
                    {
                        text: 'Unfollow',
                    },
                    {
                        text: 'Ignore',
                        handler: () => {
                            dispatch(toggleFollowingModal(true))
                        }
                    },
                ]} onDidDismiss={() => dispatch(toggleFollowingAtiveSheet(false))}>
            </IonActionSheet>
        </>
    );
};

export default FollowingActiveSheet;
