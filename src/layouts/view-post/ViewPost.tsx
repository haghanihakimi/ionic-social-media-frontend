import React from 'react';
import { IonPage, IonContent } from '@ionic/react';
import { useParams } from "react-router-dom";
import "swiper/css";
import 'swiper/css/pagination';
import './ViewPost.css';
import ViewPostComp from '../../components/view-post/ViewPostComp';
import PostCommentModal from '../../partials/modals/PostCommentModal/PostCommentModal';
import { useSelector } from 'react-redux';
import { RootState } from '../../server/store';
import SharePostModal from '../../partials/modals/SharePostModal/SharePostModal';
import ViewPostProfileModal from '../../partials/modals/ViewPostProfileModal/ViewPostProfileModal';
import BlockAlert from '../../partials/alerts/block-alert/block-alert';
import CreateFavCatModal from '../../partials/modals/CreateFavCatModal/CreateFavCatModal';

const ViewPostLayout: React.FC = () => {
    const params = useParams();
    const modals = useSelector((state: RootState) => state.modals);
    const alerts = useSelector((state: RootState) => state.alerts);

    return (
        <IonPage id='profile-container'>
            <IonContent fullscreen>

                <div className='w-full relative pb-[73px]'>
                    <ViewPostComp />
                    <ViewPostComp />
                    <ViewPostComp />

                    {/* comments Modal */}
                    {
                        modals.postCommentModal.modal ? <PostCommentModal /> : ''
                    }
                    {
                        modals.sharePostModal.modal ? <SharePostModal /> : ''
                    }
                    {
                        modals.viewPostProfileModal.modal ? <ViewPostProfileModal /> : ''
                    }
                    {
                        alerts.blockAlert ? <BlockAlert /> : ''
                    }
                    {
                        modals.createFavCatModal ? <CreateFavCatModal /> : ''
                    }
                </div>

            </IonContent>
        </IonPage>
    );
};

export default ViewPostLayout;
