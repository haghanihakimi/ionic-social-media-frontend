import React from 'react';
import { IonNav } from '@ionic/react';
import SignupLayout from '../../layouts/signup/Signup';

const Signup: React.FC = () => {

  return <IonNav root={() => <SignupLayout />}></IonNav>;
};

export default Signup;
