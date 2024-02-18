import React, { useState } from 'react';
import { IonPage, IonContent, IonRippleEffect, IonImg, IonRouterLink } from '@ionic/react';
import {
    HiEnvelope as MailIcon, HiLockClosed as PasswordIcon,
    HiEye as EyeOpenIcon, HiEyeSlash as EyeCloseIcon,
} from "react-icons/hi2";
import { format } from 'date-fns';
import './Login.css';
import { LoginForm } from '../../server/types';

const Login: React.FC = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [inputs, setInputs] = useState<LoginForm>({
        email: '',
        password: '',
    });

    return (
        <IonPage id='login-container'>
            <IonContent fullscreen>

                {/* login banner */}
                <div className='w-full flex flex-col justify-center pt-12 pb-2 px-8'>
                    <IonImg
                        src='assets/at-hash.png'
                        className='drop-shadow-lg'
                    ></IonImg>
                    <h1 className='text-2xl font-bold text-center py-8 text-slate-700'>
                        {"Sign in to your account"}
                    </h1>
                </div>
                {/* login inputs container & inputs */}
                <form className='w-full px-8 flex flex-col gap-6 pb-6'>
                    {/* Username/email input */}
                    <div className="w-full relative mt-0">
                        <input type="email" id="email_address" autoComplete='false' autoCorrect='false'
                            onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setInputs(prevState => ({
                                    ...prevState,
                                    email: e.target.value,
                                }))
                            }}
                            defaultValue={inputs.email}
                            className="min-h-[38px] block pl-8 pr-2 w-full text-base font-medium tracking-wide text-slate-800 bg-slate-200 rounded border border-slate-300 appearance-none ring-8 ring-transparent transition duration-200 focus:bg-slate-100 focus:ring-2 focus:border-slate-100 focus:ring-blue-500 focus:outline-none peer disabled:opacity-50"
                            placeholder=" " />
                        <label htmlFor="email_address"
                            className="absolute select-none cursor-text text-sm text-slate-600 duration-200 transform -translate-y-8 scale-75 top-2 z-10 origin-[0] bg-transparent px-2 peer-focus:left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:left-8 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-8 peer-focus:bg-transparent rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                            Email Address
                        </label>
                        <MailIcon className='w-5 h-5 absolute left-2 top-0 bottom-0 text-slate-800 my-auto animate duration-200 peer-focus:text-blue-500' />
                    </div>

                    {/* Password input */}
                    <div className="w-full relative mt-0">
                        <input type={showPassword ? 'text' : 'password'} id="password" autoComplete='false' autoCorrect='false'
                            onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setInputs(prevState => ({
                                    ...prevState,
                                    password: e.target.value,
                                }))
                            }}
                            defaultValue={inputs.password}
                            className="min-h-[38px] block px-8 w-full text-base font-medium tracking-wide text-slate-800 bg-slate-200 rounded border border-slate-300 appearance-none ring-8 ring-transparent transition duration-200 focus:bg-slate-100 focus:ring-2 focus:border-slate-100 focus:ring-blue-500 focus:outline-none peer disabled:opacity-50"
                            placeholder=" " />
                        <label htmlFor="password"
                            className="absolute select-none cursor-text text-sm text-slate-600 duration-200 transform -translate-y-8 scale-75 top-2 z-10 origin-[0] bg-transparent px-2 peer-focus:left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:left-8 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-8 peer-focus:bg-transparent rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                            Password
                        </label>
                        <PasswordIcon className='w-5 h-5 absolute left-2 top-0 bottom-0 text-slate-800 my-auto animate duration-200 peer-focus:text-blue-500' />
                        <button type="button" onClick={() => { setShowPassword(!showPassword) }}
                            className='w-5 h-5 absolute top-0 bottom-0 my-auto right-2 flex justify-center items-center text-slate-800 peer-focus:text-blue-500'>
                            {
                                showPassword ? <EyeCloseIcon className='w-4 h-4 animate duration-200' /> :
                                    <EyeOpenIcon className='w-4 h-4 animate duration-200' />
                            }
                        </button>
                    </div>

                    {/* login button and link */}
                    <div className='w-full relative -translate-y-5 flex flex-col gap-4'>
                        <div className='w-full flex flex-row items-center justify-between gap-2 px-2'>
                            <IonRouterLink routerDirection="forward" href='/user/profile'>
                                <span className='text-sm font-medium text-blue-500'>
                                    Forgot Password
                                </span>
                            </IonRouterLink>
                            <span className='text-sm text-slate-300'>
                                |
                            </span>
                            <IonRouterLink routerDirection="forward" href='/signup'>
                                <span className='text-sm font-medium text-blue-500'>
                                    Create Account
                                </span>
                            </IonRouterLink>
                        </div>

                        <button type="button"
                            className='w-full rounded ion-activatable ripple-parent p-2 text-base text-center bg-blue-600 text-gray-100 transition duration-200 active:bg-blue-700 disabled:opacity-50'>
                            <span>Sign In</span>
                            <IonRippleEffect></IonRippleEffect>
                        </button>
                    </div>
                </form>

                <footer className='w-full text-center p-2 text-xs text-slate-600 fixed bottom-0'>
                    Ionic-App &copy;&nbsp;{format(new Date(), "y")}
                </footer>

            </IonContent>
        </IonPage>
    );
};

export default Login;
