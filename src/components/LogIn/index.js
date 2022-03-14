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
} from "./LoginElements";


const Login = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">Home</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Sign in to your account</FormH1>
                            <FormLabel htmlFor>Email</FormLabel>
                            <FormInput type="email" required/>

                            <FormLabel htmlFor>Password</FormLabel>
                            <FormInput type="password" required/>

                            <FormButton type="submit">Continue</FormButton>
                            <Text>Forgot Password</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>


        </>
    )

}
export default Login;