import React from 'react';
import Amplify from 'aws-amplify';
import awsExports from '../aws-exports';
import {AmplifySignOut, withAuthenticator} from '@aws-amplify/ui-react-v1'
import {Icon} from "../components/Register/RegisterElements";


//4.
Amplify.configure(awsExports)


function SignIn() {

    return (
        <>

            <div>
                <h2>Click the Logo to return home</h2>
                <Icon to="/"><img src={require('../images/logo.png')} alt="logo" height={200} width={500}/></Icon>


                <Icon to="/developer"><img src={require('../images/training.PNG')} alt="training" height={200}
                                           width={500}/></Icon>


                <AmplifySignOut/>


            </div>
        </>
    )
};
export default withAuthenticator(SignIn)
