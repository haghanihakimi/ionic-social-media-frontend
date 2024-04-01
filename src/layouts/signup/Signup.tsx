import React, { useState } from 'react';
import { IonPage, IonContent, IonRippleEffect, IonImg, IonNavLink, IonRouterLink, IonButton } from '@ionic/react';
import {
  HiEnvelope as MailIcon, HiLockClosed as PasswordIcon,
  HiEye as EyeOpenIcon, HiEyeSlash as EyeCloseIcon,
} from "react-icons/hi2";
import { format } from 'date-fns';
import './Signup.css';
import { RegisterForm } from '../../server/types/register-form-types';

const Signup: React.FC = () => {
  const [inputs, setInputs] = useState<RegisterForm>({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  return (
    <IonPage id='signup-container'>
      <IonContent fullscreen>

        {/* login banner */}
        <div className='w-full flex flex-col justify-center pt-6 px-8'>
          <IonImg
            src='assets/at-hash-grad.png'
            className='drop-shadow-lg h-20'
          ></IonImg>
          <h1 className='text-2xl font-bold text-center py-8 text-slate-700'>
            {"Create new account"}
          </h1>
        </div>

        {/* login inputs container & inputs */}
        <form className='w-full px-8 flex flex-col gap-6 pb-8'>
          {/* first name input */}
          <div className="w-full relative mt-0">
            <input type="text" id="firstname" autoComplete='false' autoCorrect='false'
              onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                setInputs(prevState => ({
                  ...prevState,
                  firstname: e.target.value,
                }))
              }}
              className="min-h-[38px] block px-2 w-full text-base font-medium tracking-wide text-slate-800 bg-slate-200 rounded border border-slate-300 appearance-none ring-8 ring-transparent transition duration-200 focus:bg-slate-100 focus:ring-2 focus:border-slate-100 focus:ring--primary focus:outline-none peer disabled:opacity-50"
              placeholder=" " />
            <label htmlFor="firstname"
              className="absolute select-none cursor-text text-sm text-slate-600 duration-200 transform -translate-y-8 scale-75 top-2 z-10 origin-[0] bg-transparent px-2 peer-focus:text--primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-8 peer-focus:bg-transparent rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
              First Name
            </label>
          </div>

          {/* last name input */}
          <div className="w-full relative mt-0">
            <input type="text" id="lastname" autoComplete='false' autoCorrect='false'
              onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                setInputs(prevState => ({
                  ...prevState,
                  lastname: e.target.value,
                }))
              }}
              className="min-h-[38px] block px-2 w-full text-base font-medium tracking-wide text-slate-800 bg-slate-200 rounded border border-slate-300 appearance-none ring-8 ring-transparent transition duration-200 focus:bg-slate-100 focus:ring-2 focus:border-slate-100 focus:ring--primary focus:outline-none peer disabled:opacity-50"
              placeholder=" " />
            <label htmlFor="lastname"
              className="absolute select-none cursor-text text-sm text-slate-600 duration-200 transform -translate-y-8 scale-75 top-2 z-10 origin-[0] bg-transparent px-2 peer-focus:text--primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-8 peer-focus:bg-transparent rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
              Last Name
            </label>
          </div>

          {/* email input */}
          <div className="w-full relative mt-0">
            <input type="email" id="email_address" autoComplete='false' autoCorrect='false'
              onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                setInputs(prevState => ({
                  ...prevState,
                  email: e.target.value,
                }))
              }}
              className="min-h-[38px] block px-2 w-full text-base font-medium tracking-wide text-slate-800 bg-slate-200 rounded border border-slate-300 appearance-none ring-8 ring-transparent transition duration-200 focus:bg-slate-100 focus:ring-2 focus:border-slate-100 focus:ring--primary focus:outline-none peer disabled:opacity-50"
              placeholder=" " />
            <label htmlFor="email_address"
              className="absolute select-none cursor-text text-sm text-slate-600 duration-200 transform -translate-y-8 scale-75 top-2 z-10 origin-[0] bg-transparent px-2 peer-focus:text--primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-8 peer-focus:bg-transparent rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
              Email Address
            </label>
          </div>

          {/* Password input */}
          <div className="w-full relative mt-0">
            <input type='password' id="password" autoComplete='false'
              onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                setInputs(prevState => ({
                  ...prevState,
                  password: e.target.value,
                }))
              }}
              className="min-h-[38px] block px-2 w-full text-base font-medium tracking-wide text-slate-800 bg-slate-200 rounded border border-slate-300 appearance-none ring-8 ring-transparent transition duration-200 focus:bg-slate-100 focus:ring-2 focus:border-slate-100 focus:ring--primary focus:outline-none peer disabled:opacity-50"
              placeholder=" " />
            <label htmlFor="password"
              className="absolute select-none cursor-text text-sm text-slate-600 duration-200 transform -translate-y-8 scale-75 top-2 z-10 origin-[0] bg-transparent px-2 peer-focus:text--primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-8 peer-focus:bg-transparent rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
              Password
            </label>
          </div>

          {/* Password input */}
          <div className="w-full relative mt-0">
            <input type='password' id="confirm_password" autoComplete='false'
              onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                setInputs(prevState => ({
                  ...prevState,
                  password_confirmation: e.target.value,
                }))
              }}
              className="min-h-[38px] block px-2 w-full text-base font-medium tracking-wide text-slate-800 bg-slate-200 rounded border border-slate-300 appearance-none ring-8 ring-transparent transition duration-200 focus:bg-slate-100 focus:ring-2 focus:border-slate-100 focus:ring--primary focus:outline-none peer disabled:opacity-50"
              placeholder=" " />
            <label htmlFor="confirm_password"
              className="absolute select-none cursor-text text-sm text-slate-600 duration-200 transform -translate-y-8 scale-75 top-2 z-10 origin-[0] bg-transparent px-2 peer-focus:text--primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-8 peer-focus:bg-transparent rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
              Confirm Password
            </label>
          </div>

          {/* login button and link */}
          <div className='w-full relative flex flex-col gap-2'>
            <IonRouterLink routerDirection='forward' routerLink='/user/profile'>
              <button type="button"
                className='w-full rounded ion-activatable ripple-parent p-2 text-base text-center bg-gradient-to-r from-secondary to-primary text-slate-100 transition duration-200 active:bg-blue-700 disabled:opacity-50'>
                <span>Sign Up</span>
                <IonRippleEffect></IonRippleEffect>
              </button>
            </IonRouterLink>
            <IonRouterLink routerDirection='forward' routerLink='/login' className='text-sm text-center font-medium text--primary relative'>
              <span className='relative block'>
                Sign In
              </span>
            </IonRouterLink>
          </div>
        </form>

        <footer className='w-full text-center p-2 text-xs text-slate-600 fixed bottom-0'>
          Ionic-App &copy;&nbsp;{format(new Date(), "y")}
        </footer>

      </IonContent>
    </IonPage>
  );
};

export default Signup;