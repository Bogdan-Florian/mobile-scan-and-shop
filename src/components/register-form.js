import React from "react";
import { useForm } from "react-hook-form";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Text, StyleSheet  } from "react-native";

function RegisterForm() {
    const { register, handleSubmit } = useForm();
    const handleRegistration = (data) => console.log(data);
    return (
        <Form onSubmit={handleSubmit(handleRegistration)}>
            <FormGroup>
                <Label><Text>Email Address</Text></Label>
                <Input name="Email Address" innerRef={register} />
            </FormGroup>
            <Button color="primary">Submit</Button>
        </Form>
    );
}
export default RegisterForm;

