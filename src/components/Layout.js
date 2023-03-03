import React from 'react';
import {Outlet} from 'react-router-dom';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Navigation, Footer } from '../ui-components';
import {useNavigate} from "react-router-dom";

export function Layout(props) {
    const navigate = useNavigate();

    const navigationOverrides = {
        "Heading": {
          children: props.user.attributes.name
        },
        "LoginButton": {
          children: "Logout",
          onClick: props.signOut    
        },
        "AIButton": {
          isDisabled: !(props.user.signInUserSession.accessToken.payload["cognito:groups"].includes('hackathon')),
          onClick: () => { navigate('/hackathon')}
        }
      }

    return (<>
        <Navigation width={"100%"} overrides={navigationOverrides}/>
        <ToastContainer/>
        <Outlet/>
        <Footer width={"100%"}/>
    </>);
}