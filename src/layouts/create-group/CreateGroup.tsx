import React, { useState } from 'react';
import { IonPage, IonContent, IonHeader, IonToolbar, IonRippleEffect } from '@ionic/react';
import {
    HiMiniChevronLeft as LeftIcon, HiOutlineUserGroup as GroupIcon,
    HiOutlinePencil as PencilIcon
} from "react-icons/hi2";
import { useHistory } from "react-router-dom";
import { CreateGroupForm } from '../../server/types/create-group-form-types';

const CreateGroupLayout: React.FC = () => {
    const history = useHistory();
    const [groupForm, setGroupForm] = useState<CreateGroupForm>({
        name: '',
        description: '',
        privacy: false,
        auto_approval: true,
    });

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
                                        Create Group
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
                            <div className='w-16 h-16 relative rounded-full shrink-0 flex justify-center items-center border border-slate-300'>
                                {/* <img src='https://plus.unsplash.com/premium_photo-1663932464494-71bee85afe5b?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
                                className='w-16 h-16 object-cover rounded-full' /> */}
                                <GroupIcon className='w-8 h-8 text-slate-500' />
                                <span className='absolute w-5 h-5 bg-slate-100 rounded-full flex justify-center items-center top-0 right-0 border border-slate-300 shadow-md'>
                                    <PencilIcon className='w-3 h-3 text-slate-800' />
                                </span>
                            </div>
                            {/* Name */}
                            <div className='w-full relative'>
                                <input type='text' defaultValue={groupForm.name} onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    setGroupForm(prevState => ({
                                        ...prevState,
                                        name: e.target.value,
                                    }))
                                }}
                                    className='w-full bg-slate-100 transition duration-200 border-b-2 border-slate-300 p-1 focus:border-secondary'
                                    placeholder='Group Name' />
                            </div>
                        </div>

                        {/* group description */}
                        <textarea name="" id="" cols={30} rows={10} placeholder='Group description'
                            defaultValue={groupForm.description} onInput={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                                setGroupForm(prevState => ({
                                    ...prevState,
                                    description: e.target.value,
                                }))
                            }}
                            className='w-full max-h-[120px] mb-2 text-sm text-slate-900 resize-none bg-slate-100 p-2 border-b-2 border-slate-300 transition duration-200 focus:border-secondary'></textarea>

                        {/* Privacy toggle */}
                        <label className="bg-slate-200 rounded-full inline-flex w-full p-2 outline-none justify-between items-center border border-slate-300">
                            <input type="checkbox" value="privacy" name='privacy' className="peer hidden invisible"
                                defaultChecked={groupForm.privacy} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    setGroupForm(prevState => ({
                                        ...prevState,
                                        privacy: e.target.checked,
                                    }))
                                }} />
                            <p className="text-sm font-medium text-slate-900">
                                Private
                            </p>
                            <div className="relative shrink-0 w-9 h-5 bg-gray-300 border border-slate-400 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-slate-400 after:content-[''] after:absolute after:top-0 after:bottom-0 after:my-auto after:-start-[3px] after:bg-white after:border-gray-400 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-secondary peer-checked:to-primary"></div>
                        </label>
                        <span className='px-4 text-slate-500 text-xs font-normal block -translate-y-1'>
                            {"Only members can see contents"}
                        </span>

                        {/* auto approval toggle */}
                        <label className="bg-slate-200 rounded-full inline-flex w-full p-2 outline-none justify-between items-center border border-slate-300">
                            <input type="checkbox" value="approval" name='approval'
                                defaultChecked={groupForm.auto_approval} className="peer hidden invisible"
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    setGroupForm(prevState => ({
                                        ...prevState,
                                        auto_approval: e.target.checked,
                                    }))
                                }} />
                            <p className="text-sm font-medium text-slate-900">
                                Auto Approval
                            </p>
                            <div className="relative shrink-0 w-9 h-5 bg-gray-300 border border-slate-400 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-slate-400 after:content-[''] after:absolute after:top-0 after:bottom-0 after:my-auto after:-start-[3px] after:bg-white after:border-gray-400 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-secondary peer-checked:to-primary"></div>
                        </label>
                        <span className='text-slate-500 text-xs font-normal block px-4 -translate-y-1'>
                            {"Members join automatically without approval."}
                        </span>

                        <button className='w-full ion-activatable ripple-parent font-medium text-center mt-2 p-4 text-slate-100 rounded-xl bg-gradient-to-r from-secondary to-primary'>
                            Create Group
                            <IonRippleEffect></IonRippleEffect>
                        </button>
                    </section>
                </div>

            </IonContent>
        </IonPage>
    );
};

export default CreateGroupLayout;
