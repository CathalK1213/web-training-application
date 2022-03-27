import React from 'react';
import Amplify from 'aws-amplify';
//2.
import awsExports from '../aws-exports';
//3.
import {AmplifySignOut, withAuthenticator} from '@aws-amplify/ui-react-v1'
import {Icon} from "../components/Register/RegisterElements";
//4.
Amplify.configure(awsExports)

function SignIn() {
    return (
        <>
            <div>
                <Icon to="/">Home</Icon>

                <AmplifySignOut/>

                <h1>This is your logged in dashboard.</h1>
            </div>
        </>
    )
}

//6.
export default withAuthenticator(SignIn)