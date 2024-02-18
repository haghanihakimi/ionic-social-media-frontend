import React from 'react';
import { IonNav } from '@ionic/react';
import LoginLayout from '../../layouts/login/Login';


const Login: React.FC = () => {

  return <IonNav root={() => <LoginLayout />}></IonNav>;
};

export default Login;
