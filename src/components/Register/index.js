import React from "react";
import {
    Container,
    FormButton,
    FormContent,
    FormInput,
    FormLabel,
    FormWrap,
    Text,
    FormH1,
    Icon,
    Form
} from "./RegisterElements";
import {Button} from "../LogIn/LoginElements";


const Register = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">Home</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Register for a new account today!</FormH1>
                            <FormLabel htmlFor>Enter Name</FormLabel>
                            <FormInput type="name" required/>

                            <FormLabel htmlFor>Email</FormLabel>
                            <FormInput type="email" required/>

                            <FormLabel htmlFor>Password</FormLabel>
                            <FormInput type="password" required/>

                            <FormLabel htmlFor>Confirm Password</FormLabel>
                            <FormInput type="password" required/>

                            <FormButton type="submit">Continue</FormButton>

                            <br/>
                            <Button type="submit">Forgot Password?</Button>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>


        </>
    )

}
export default Register;