import React from "react";
import {
    Container,
    Button,
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

                <FormContent>
                        <Form action="#">
                            <FormH1>Sign in to your account</FormH1>
                            <FormLabel htmlFor>Email</FormLabel>
                            <FormInput type="email" required/>

                            <FormLabel htmlFor>Password</FormLabel>
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
export default Login;