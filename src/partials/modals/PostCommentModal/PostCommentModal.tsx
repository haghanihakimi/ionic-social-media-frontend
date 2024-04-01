import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IonModal, IonHeader, IonContent, IonToolbar } from '@ionic/react';
import {
    HiOutlineHeart as HeartOutlineIcon, HiMiniHeart as HeartFillIcon
} from "react-icons/hi2";
import { RootState } from '../../../server/store';
import { toggleEventInviteesList, togglePostCommentsModal } from '../../../server/store/reducers/modals';

const PostCommentModal: React.FC = () => {
    const modal = useRef<HTMLIonModalElement>(null);
    const modals = useSelector((state: RootState) => state.modals);
    const dispatch = useDispatch();

    return (
        <>
            <IonModal id="eventInviteesModal" ref={modal} isOpen={modals.postCommentModal.modal}
                initialBreakpoint={1} breakpoints={[0, 1]}
                onDidDismiss={() => dispatch(togglePostCommentsModal({ postId: 0, modal: false }))}>
                <IonToolbar class='bg-slate-50 bg-opacity-90 backdrop-blur-lg shadow-none px-4 border-b border-slate-200 flex justify-center items-center'>
                    <span>&nbsp;</span>
                    <div className='w-full left-0 relative bottom-0 mb-4'>
                        <div className='w-full flex flex-row items-center justify-between gap-1'>
                            {/* profile image */}
                            <div className='w-8 h-8 rounded-full shrink-0'>
                                <img src='https://images.unsplash.com/photo-1531853749260-4447dc77f7e8?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                    className='w-8 h-8 object-cover rounded-full' />
                            </div>
                            <input type='text' placeholder='Write a comment...'
                                className='w-full p-2 text-sm text-slate-900 outline-none border-b-2 bg-transparent transition duration-200 focus:border-primary' />
                        </div>
                    </div>
                </IonToolbar>
                <IonContent fullscreen className='w-full relative'>
                    <div className='w-full relative flex flex-col gap-1 px-3 pt-0'>

                        {/* comments rows */}
                        <div className='w-full py-2 flex flex-row items-center justify-between'>
                            {/* profile image and comment */}
                            <div className='w-fit flex flex-row items-start gap-2'>
                                {/* image */}
                                <img src='https://images.unsplash.com/photo-1531853749260-4447dc77f7e8?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                    className='w-8 h-8 rounded-full object-cover' />
                                {/* name & comment */}
                                <div className='flex flex-col leading-none'>
                                    <h4 className='flex flex-row items-center gap-2 text-sm text-slate-800'>
                                        <span className='font-semibold'>sara_miller</span>
                                        <span className='text-slate-500'>4h</span>
                                    </h4>
                                    <p className='text-xs font-medium text-slate-800 leading-none'>
                                        {`I love this place! I've been there last year with my husband and we made some lovely memories together!`}
                                    </p>
                                </div>
                                {/* reaction */}
                                <button className='w-7 h-7 rounded-full flex justify-center items-center p-0'>
                                    <HeartOutlineIcon className='text-primary w-5 h-5' />
                                </button>
                            </div>
                        </div>
                        <div className='w-full py-2 flex flex-row items-center justify-between'>
                            {/* profile image and comment */}
                            <div className='w-fit flex flex-row items-start gap-2'>
                                {/* image */}
                                <img src='https://images.unsplash.com/photo-1531853749260-4447dc77f7e8?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                    className='w-8 h-8 rounded-full object-cover' />
                                {/* name & comment */}
                                <div className='flex flex-col leading-none'>
                                    <h4 className='flex flex-row items-center gap-2 text-sm text-slate-800'>
                                        <span className='font-semibold'>sara_miller</span>
                                        <span className='text-slate-500'>4h</span>
                                    </h4>
                                    <p className='text-xs font-medium text-slate-800 leading-none'>
                                        {`I love this place! I've been there last year with my husband and we made some lovely memories together!`}
                                    </p>
                                </div>
                                {/* reaction */}
                                <button className='w-7 h-7 rounded-full flex justify-center items-center p-0'>
                                    <HeartOutlineIcon className='text-primary w-5 h-5' />
                                </button>
                            </div>
                        </div>
                        <div className='w-full py-2 flex flex-row items-center justify-between'>
                            {/* profile image and comment */}
                            <div className='w-fit flex flex-row items-start gap-2'>
                                {/* image */}
                                <img src='https://images.unsplash.com/photo-1531853749260-4447dc77f7e8?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                    className='w-8 h-8 rounded-full object-cover' />
                                {/* name & comment */}
                                <div className='flex flex-col leading-none'>
                                    <h4 className='flex flex-row items-center gap-2 text-sm text-slate-800'>
                                        <span className='font-semibold'>sara_miller</span>
                                        <span className='text-slate-500'>4h</span>
                                    </h4>
                                    <p className='text-xs font-medium text-slate-800 leading-none'>
                                        {`I love this place! I've been there last year with my husband and we made some lovely memories together!`}
                                    </p>
                                </div>
                                {/* reaction */}
                                <button className='w-7 h-7 rounded-full flex justify-center items-center p-0'>
                                    <HeartOutlineIcon className='text-primary w-5 h-5' />
                                </button>
                            </div>
                        </div>
                        <div className='w-full py-2 flex flex-row items-center justify-between'>
                            {/* profile image and comment */}
                            <div className='w-fit flex flex-row items-start gap-2'>
                                {/* image */}
                                <img src='https://images.unsplash.com/photo-1531853749260-4447dc77f7e8?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                    className='w-8 h-8 rounded-full object-cover' />
                                {/* name & comment */}
                                <div className='flex flex-col leading-none'>
                                    <h4 className='flex flex-row items-center gap-2 text-sm text-slate-800'>
                                        <span className='font-semibold'>sara_miller</span>
                                        <span className='text-slate-500'>4h</span>
                                    </h4>
                                    <p className='text-xs font-medium text-slate-800 leading-none'>
                                        {`I love this place! I've been there last year with my husband and we made some lovely memories together!`}
                                    </p>
                                </div>
                                {/* reaction */}
                                <button className='w-7 h-7 rounded-full flex justify-center items-center p-0'>
                                    <HeartOutlineIcon className='text-primary w-5 h-5' />
                                </button>
                            </div>
                        </div>
                        <div className='w-full py-2 flex flex-row items-center justify-between'>
                            {/* profile image and comment */}
                            <div className='w-fit flex flex-row items-start gap-2'>
                                {/* image */}
                                <img src='https://images.unsplash.com/photo-1531853749260-4447dc77f7e8?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                    className='w-8 h-8 rounded-full object-cover' />
                                {/* name & comment */}
                                <div className='flex flex-col leading-none'>
                                    <h4 className='flex flex-row items-center gap-2 text-sm text-slate-800'>
                                        <span className='font-semibold'>sara_miller</span>
                                        <span className='text-slate-500'>4h</span>
                                    </h4>
                                    <p className='text-xs font-medium text-slate-800 leading-none'>
                                        {`I love this place! I've been there last year with my husband and we made some lovely memories together!`}
                                    </p>
                                </div>
                                {/* reaction */}
                                <button className='w-7 h-7 rounded-full flex justify-center items-center p-0'>
                                    <HeartOutlineIcon className='text-primary w-5 h-5' />
                                </button>
                            </div>
                        </div>
                        <div className='w-full py-2 flex flex-row items-center justify-between'>
                            {/* profile image and comment */}
                            <div className='w-fit flex flex-row items-start gap-2'>
                                {/* image */}
                                <img src='https://images.unsplash.com/photo-1531853749260-4447dc77f7e8?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                    className='w-8 h-8 rounded-full object-cover' />
                                {/* name & comment */}
                                <div className='flex flex-col leading-none'>
                                    <h4 className='flex flex-row items-center gap-2 text-sm text-slate-800'>
                                        <span className='font-semibold'>sara_miller</span>
                                        <span className='text-slate-500'>4h</span>
                                    </h4>
                                    <p className='text-xs font-medium text-slate-800 leading-none'>
                                        {`I love this place! I've been there last year with my husband and we made some lovely memories together!`}
                                    </p>
                                </div>
                                {/* reaction */}
                                <button className='w-7 h-7 rounded-full flex justify-center items-center p-0'>
                                    <HeartOutlineIcon className='text-primary w-5 h-5' />
                                </button>
                            </div>
                        </div>
                        <div className='w-full py-2 flex flex-row items-center justify-between'>
                            {/* profile image and comment */}
                            <div className='w-fit flex flex-row items-start gap-2'>
                                {/* image */}
                                <img src='https://images.unsplash.com/photo-1531853749260-4447dc77f7e8?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                    className='w-8 h-8 rounded-full object-cover' />
                                {/* name & comment */}
                                <div className='flex flex-col leading-none'>
                                    <h4 className='flex flex-row items-center gap-2 text-sm text-slate-800'>
                                        <span className='font-semibold'>sara_miller</span>
                                        <span className='text-slate-500'>4h</span>
                                    </h4>
                                    <p className='text-xs font-medium text-slate-800 leading-none'>
                                        {`I love this place! I've been there last year with my husband and we made some lovely memories together!`}
                                    </p>
                                </div>
                                {/* reaction */}
                                <button className='w-7 h-7 rounded-full flex justify-center items-center p-0'>
                                    <HeartOutlineIcon className='text-primary w-5 h-5' />
                                </button>
                            </div>
                        </div>
                        <div className='w-full py-2 flex flex-row items-center justify-between'>
                            {/* profile image and comment */}
                            <div className='w-fit flex flex-row items-start gap-2'>
                                {/* image */}
                                <img src='https://images.unsplash.com/photo-1531853749260-4447dc77f7e8?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                    className='w-8 h-8 rounded-full object-cover' />
                                {/* name & comment */}
                                <div className='flex flex-col leading-none'>
                                    <h4 className='flex flex-row items-center gap-2 text-sm text-slate-800'>
                                        <span className='font-semibold'>sara_miller</span>
                                        <span className='text-slate-500'>4h</span>
                                    </h4>
                                    <p className='text-xs font-medium text-slate-800 leading-none'>
                                        {`I love this place! I've been there last year with my husband and we made some lovely memories together!`}
                                    </p>
                                </div>
                                {/* reaction */}
                                <button className='w-7 h-7 rounded-full flex justify-center items-center p-0'>
                                    <HeartOutlineIcon className='text-primary w-5 h-5' />
                                </button>
                            </div>
                        </div>
                        <div className='w-full py-2 flex flex-row items-center justify-between'>
                            {/* profile image and comment */}
                            <div className='w-fit flex flex-row items-start gap-2'>
                                {/* image */}
                                <img src='https://images.unsplash.com/photo-1531853749260-4447dc77f7e8?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                    className='w-8 h-8 rounded-full object-cover' />
                                {/* name & comment */}
                                <div className='flex flex-col leading-none'>
                                    <h4 className='flex flex-row items-center gap-2 text-sm text-slate-800'>
                                        <span className='font-semibold'>sara_miller</span>
                                        <span className='text-slate-500'>4h</span>
                                    </h4>
                                    <p className='text-xs font-medium text-slate-800 leading-none'>
                                        {`I love this place! I've been there last year with my husband and we made some lovely memories together!`}
                                    </p>
                                </div>
                                {/* reaction */}
                                <button className='w-7 h-7 rounded-full flex justify-center items-center p-0'>
                                    <HeartOutlineIcon className='text-primary w-5 h-5' />
                                </button>
                            </div>
                        </div>
                        <div className='w-full py-2 flex flex-row items-center justify-between'>
                            {/* profile image and comment */}
                            <div className='w-fit flex flex-row items-start gap-2'>
                                {/* image */}
                                <img src='https://images.unsplash.com/photo-1531853749260-4447dc77f7e8?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                    className='w-8 h-8 rounded-full object-cover' />
                                {/* name & comment */}
                                <div className='flex flex-col leading-none'>
                                    <h4 className='flex flex-row items-center gap-2 text-sm text-slate-800'>
                                        <span className='font-semibold'>sara_miller</span>
                                        <span className='text-slate-500'>4h</span>
                                    </h4>
                                    <p className='text-xs font-medium text-slate-800 leading-none'>
                                        {`I love this place! I've been there last year with my husband and we made some lovely memories together!`}
                                    </p>
                                </div>
                                {/* reaction */}
                                <button className='w-7 h-7 rounded-full flex justify-center items-center p-0'>
                                    <HeartOutlineIcon className='text-primary w-5 h-5' />
                                </button>
                            </div>
                        </div>
                        <div className='w-full py-2 flex flex-row items-center justify-between'>
                            {/* profile image and comment */}
                            <div className='w-fit flex flex-row items-start gap-2'>
                                {/* image */}
                                <img src='https://images.unsplash.com/photo-1531853749260-4447dc77f7e8?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                    className='w-8 h-8 rounded-full object-cover' />
                                {/* name & comment */}
                                <div className='flex flex-col leading-none'>
                                    <h4 className='flex flex-row items-center gap-2 text-sm text-slate-800'>
                                        <span className='font-semibold'>sara_miller</span>
                                        <span className='text-slate-500'>4h</span>
                                    </h4>
                                    <p className='text-xs font-medium text-slate-800 leading-none'>
                                        {`I love this place! I've been there last year with my husband and we made some lovely memories together!`}
                                    </p>
                                </div>
                                {/* reaction */}
                                <button className='w-7 h-7 rounded-full flex justify-center items-center p-0'>
                                    <HeartOutlineIcon className='text-primary w-5 h-5' />
                                </button>
                            </div>
                        </div>
                        <div className='w-full py-2 flex flex-row items-center justify-between'>
                            {/* profile image and comment */}
                            <div className='w-fit flex flex-row items-start gap-2'>
                                {/* image */}
                                <img src='https://images.unsplash.com/photo-1531853749260-4447dc77f7e8?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                    className='w-8 h-8 rounded-full object-cover' />
                                {/* name & comment */}
                                <div className='flex flex-col leading-none'>
                                    <h4 className='flex flex-row items-center gap-2 text-sm text-slate-800'>
                                        <span className='font-semibold'>sara_miller</span>
                                        <span className='text-slate-500'>4h</span>
                                    </h4>
                                    <p className='text-xs font-medium text-slate-800 leading-none'>
                                        {`I love this place! I've been there last year with my husband and we made some lovely memories together!`}
                                    </p>
                                </div>
                                {/* reaction */}
                                <button className='w-7 h-7 rounded-full flex justify-center items-center p-0'>
                                    <HeartOutlineIcon className='text-primary w-5 h-5' />
                                </button>
                            </div>
                        </div>
                        <div className='w-full py-2 flex flex-row items-center justify-between'>
                            {/* profile image and comment */}
                            <div className='w-fit flex flex-row items-start gap-2'>
                                {/* image */}
                                <img src='https://images.unsplash.com/photo-1531853749260-4447dc77f7e8?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                    className='w-8 h-8 rounded-full object-cover' />
                                {/* name & comment */}
                                <div className='flex flex-col leading-none'>
                                    <h4 className='flex flex-row items-center gap-2 text-sm text-slate-800'>
                                        <span className='font-semibold'>sara_miller</span>
                                        <span className='text-slate-500'>4h</span>
                                    </h4>
                                    <p className='text-xs font-medium text-slate-800 leading-none'>
                                        {`I love this place! I've been there last year with my husband and we made some lovely memories together!`}
                                    </p>
                                </div>
                                {/* reaction */}
                                <button className='w-7 h-7 rounded-full flex justify-center items-center p-0'>
                                    <HeartOutlineIcon className='text-primary w-5 h-5' />
                                </button>
                            </div>
                        </div>
                        <div className='w-full py-2 flex flex-row items-center justify-between'>
                            {/* profile image and comment */}
                            <div className='w-fit flex flex-row items-start gap-2'>
                                {/* image */}
                                <img src='https://images.unsplash.com/photo-1531853749260-4447dc77f7e8?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                    className='w-8 h-8 rounded-full object-cover' />
                                {/* name & comment */}
                                <div className='flex flex-col leading-none'>
                                    <h4 className='flex flex-row items-center gap-2 text-sm text-slate-800'>
                                        <span className='font-semibold'>sara_miller</span>
                                        <span className='text-slate-500'>4h</span>
                                    </h4>
                                    <p className='text-xs font-medium text-slate-800 leading-none'>
                                        {`I love this place! I've been there last year with my husband and we made some lovely memories together!`}
                                    </p>
                                </div>
                                {/* reaction */}
                                <button className='w-7 h-7 rounded-full flex justify-center items-center p-0'>
                                    <HeartOutlineIcon className='text-primary w-5 h-5' />
                                </button>
                            </div>
                        </div>
                        <div className='w-full py-2 flex flex-row items-center justify-between'>
                            {/* profile image and comment */}
                            <div className='w-fit flex flex-row items-start gap-2'>
                                {/* image */}
                                <img src='https://images.unsplash.com/photo-1531853749260-4447dc77f7e8?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                    className='w-8 h-8 rounded-full object-cover' />
                                {/* name & comment */}
                                <div className='flex flex-col leading-none'>
                                    <h4 className='flex flex-row items-center gap-2 text-sm text-slate-800'>
                                        <span className='font-semibold'>sara_miller</span>
                                        <span className='text-slate-500'>4h</span>
                                    </h4>
                                    <p className='text-xs font-medium text-slate-800 leading-none'>
                                        {`I love this place! I've been there last year with my husband and we made some lovely memories together!`}
                                    </p>
                                </div>
                                {/* reaction */}
                                <button className='w-7 h-7 rounded-full flex justify-center items-center p-0'>
                                    <HeartOutlineIcon className='text-primary w-5 h-5' />
                                </button>
                            </div>
                        </div>
                        <div className='w-full py-2 flex flex-row items-center justify-between'>
                            {/* profile image and comment */}
                            <div className='w-fit flex flex-row items-start gap-2'>
                                {/* image */}
                                <img src='https://images.unsplash.com/photo-1531853749260-4447dc77f7e8?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                    className='w-8 h-8 rounded-full object-cover' />
                                {/* name & comment */}
                                <div className='flex flex-col leading-none'>
                                    <h4 className='flex flex-row items-center gap-2 text-sm text-slate-800'>
                                        <span className='font-semibold'>sara_miller</span>
                                        <span className='text-slate-500'>4h</span>
                                    </h4>
                                    <p className='text-xs font-medium text-slate-800 leading-none'>
                                        {`I love this place! I've been there last year with my husband and we made some lovely memories together!`}
                                    </p>
                                </div>
                                {/* reaction */}
                                <button className='w-7 h-7 rounded-full flex justify-center items-center p-0'>
                                    <HeartOutlineIcon className='text-primary w-5 h-5' />
                                </button>
                            </div>
                        </div>
                        <div className='w-full py-2 flex flex-row items-center justify-between'>
                            {/* profile image and comment */}
                            <div className='w-fit flex flex-row items-start gap-2'>
                                {/* image */}
                                <img src='https://images.unsplash.com/photo-1531853749260-4447dc77f7e8?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                    className='w-8 h-8 rounded-full object-cover' />
                                {/* name & comment */}
                                <div className='flex flex-col leading-none'>
                                    <h4 className='flex flex-row items-center gap-2 text-sm text-slate-800'>
                                        <span className='font-semibold'>sara_miller</span>
                                        <span className='text-slate-500'>4h</span>
                                    </h4>
                                    <p className='text-xs font-medium text-slate-800 leading-none'>
                                        {`I love this place! I've been there last year with my husband and we made some lovely memories together!`}
                                    </p>
                                </div>
                                {/* reaction */}
                                <button className='w-7 h-7 rounded-full flex justify-center items-center p-0'>
                                    <HeartOutlineIcon className='text-primary w-5 h-5' />
                                </button>
                            </div>
                        </div>
                        <div className='w-full py-2 flex flex-row items-center justify-between'>
                            {/* profile image and comment */}
                            <div className='w-fit flex flex-row items-start gap-2'>
                                {/* image */}
                                <img src='https://images.unsplash.com/photo-1531853749260-4447dc77f7e8?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                    className='w-8 h-8 rounded-full object-cover' />
                                {/* name & comment */}
                                <div className='flex flex-col leading-none'>
                                    <h4 className='flex flex-row items-center gap-2 text-sm text-slate-800'>
                                        <span className='font-semibold'>sara_miller</span>
                                        <span className='text-slate-500'>4h</span>
                                    </h4>
                                    <p className='text-xs font-medium text-slate-800 leading-none'>
                                        {`I love this place! I've been there last year with my husband and we made some lovely memories together!`}
                                    </p>
                                </div>
                                {/* reaction */}
                                <button className='w-7 h-7 rounded-full flex justify-center items-center p-0'>
                                    <HeartOutlineIcon className='text-primary w-5 h-5' />
                                </button>
                            </div>
                        </div>
                        <div className='w-full py-2 flex flex-row items-center justify-between'>
                            {/* profile image and comment */}
                            <div className='w-fit flex flex-row items-start gap-2'>
                                {/* image */}
                                <img src='https://images.unsplash.com/photo-1531853749260-4447dc77f7e8?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                    className='w-8 h-8 rounded-full object-cover' />
                                {/* name & comment */}
                                <div className='flex flex-col leading-none'>
                                    <h4 className='flex flex-row items-center gap-2 text-sm text-slate-800'>
                                        <span className='font-semibold'>sara_miller</span>
                                        <span className='text-slate-500'>4h</span>
                                    </h4>
                                    <p className='text-xs font-medium text-slate-800 leading-none'>
                                        {`I love this place! I've been there last year with my husband and we made some lovely memories together!`}
                                    </p>
                                </div>
                                {/* reaction */}
                                <button className='w-7 h-7 rounded-full flex justify-center items-center p-0'>
                                    <HeartOutlineIcon className='text-primary w-5 h-5' />
                                </button>
                            </div>
                        </div>
                        <div className='w-full py-2 flex flex-row items-center justify-between'>
                            {/* profile image and comment */}
                            <div className='w-fit flex flex-row items-start gap-2'>
                                {/* image */}
                                <img src='https://images.unsplash.com/photo-1531853749260-4447dc77f7e8?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                    className='w-8 h-8 rounded-full object-cover' />
                                {/* name & comment */}
                                <div className='flex flex-col leading-none'>
                                    <h4 className='flex flex-row items-center gap-2 text-sm text-slate-800'>
                                        <span className='font-semibold'>sara_miller</span>
                                        <span className='text-slate-500'>4h</span>
                                    </h4>
                                    <p className='text-xs font-medium text-slate-800 leading-none'>
                                        {`I love this place! I've been there last year with my husband and we made some lovely memories together!`}
                                    </p>
                                </div>
                                {/* reaction */}
                                <button className='w-7 h-7 rounded-full flex justify-center items-center p-0'>
                                    <HeartOutlineIcon className='text-primary w-5 h-5' />
                                </button>
                            </div>
                        </div>
                        <div className='w-full py-2 flex flex-row items-center justify-between'>
                            {/* profile image and comment */}
                            <div className='w-fit flex flex-row items-start gap-2'>
                                {/* image */}
                                <img src='https://images.unsplash.com/photo-1531853749260-4447dc77f7e8?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                    className='w-8 h-8 rounded-full object-cover' />
                                {/* name & comment */}
                                <div className='flex flex-col leading-none'>
                                    <h4 className='flex flex-row items-center gap-2 text-sm text-slate-800'>
                                        <span className='font-semibold'>sara_miller</span>
                                        <span className='text-slate-500'>4h</span>
                                    </h4>
                                    <p className='text-xs font-medium text-slate-800 leading-none'>
                                        {`I love this place! I've been there last year with my husband and we made some lovely memories together!`}
                                    </p>
                                </div>
                                {/* reaction */}
                                <button className='w-7 h-7 rounded-full flex justify-center items-center p-0'>
                                    <HeartOutlineIcon className='text-primary w-5 h-5' />
                                </button>
                            </div>
                        </div>
                        <div className='w-full py-2 flex flex-row items-center justify-between'>
                            {/* profile image and comment */}
                            <div className='w-fit flex flex-row items-start gap-2'>
                                {/* image */}
                                <img src='https://images.unsplash.com/photo-1531853749260-4447dc77f7e8?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                    className='w-8 h-8 rounded-full object-cover' />
                                {/* name & comment */}
                                <div className='flex flex-col leading-none'>
                                    <h4 className='flex flex-row items-center gap-2 text-sm text-slate-800'>
                                        <span className='font-semibold'>sara_miller</span>
                                        <span className='text-slate-500'>4h</span>
                                    </h4>
                                    <p className='text-xs font-medium text-slate-800 leading-none'>
                                        {`I love this place! I've been there last year with my husband and we made some lovely memories together!`}
                                    </p>
                                </div>
                                {/* reaction */}
                                <button className='w-7 h-7 rounded-full flex justify-center items-center p-0'>
                                    <HeartOutlineIcon className='text-primary w-5 h-5' />
                                </button>
                            </div>
                        </div>
                        <div className='w-full py-2 flex flex-row items-center justify-between'>
                            {/* profile image and comment */}
                            <div className='w-fit flex flex-row items-start gap-2'>
                                {/* image */}
                                <img src='https://images.unsplash.com/photo-1531853749260-4447dc77f7e8?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                    className='w-8 h-8 rounded-full object-cover' />
                                {/* name & comment */}
                                <div className='flex flex-col leading-none'>
                                    <h4 className='flex flex-row items-center gap-2 text-sm text-slate-800'>
                                        <span className='font-semibold'>sara_miller</span>
                                        <span className='text-slate-500'>4h</span>
                                    </h4>
                                    <p className='text-xs font-medium text-slate-800 leading-none'>
                                        {`I love this place! I've been there last year with my husband and we made some lovely memories together!`}
                                    </p>
                                </div>
                                {/* reaction */}
                                <button className='w-7 h-7 rounded-full flex justify-center items-center p-0'>
                                    <HeartOutlineIcon className='text-primary w-5 h-5' />
                                </button>
                            </div>
                        </div>
                        <div className='w-full py-2 flex flex-row items-center justify-between'>
                            {/* profile image and comment */}
                            <div className='w-fit flex flex-row items-start gap-2'>
                                {/* image */}
                                <img src='https://images.unsplash.com/photo-1531853749260-4447dc77f7e8?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                    className='w-8 h-8 rounded-full object-cover' />
                                {/* name & comment */}
                                <div className='flex flex-col leading-none'>
                                    <h4 className='flex flex-row items-center gap-2 text-sm text-slate-800'>
                                        <span className='font-semibold'>sara_miller</span>
                                        <span className='text-slate-500'>4h</span>
                                    </h4>
                                    <p className='text-xs font-medium text-slate-800 leading-none'>
                                        {`I love this place! I've been there last year with my husband and we made some lovely memories together!`}
                                    </p>
                                </div>
                                {/* reaction */}
                                <button className='w-7 h-7 rounded-full flex justify-center items-center p-0'>
                                    <HeartOutlineIcon className='text-primary w-5 h-5' />
                                </button>
                            </div>
                        </div>

                    </div>
                </IonContent>
            </IonModal>
        </>
    );
};

export default PostCommentModal;
