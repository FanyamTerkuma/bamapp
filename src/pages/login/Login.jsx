import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/button/Button';
import Input from '../../components/input/Input';
import { Formik } from 'formik';
import * as Yup from 'yup';
import CustomForm from '../../components/form/CustomForm';
function Login() {
    const phonePattern = '^[0-9]+$';
    const validationSchema = Yup.object().shape({
        username: Yup.string().required('username is required!'),
        password: Yup.string().matches(phonePattern, { message: 'Password is invalid!' }).required('Password is required!')
    });
    const handleSubmit = async (values, actions) => {
        await new Promise(() =>
            setTimeout(() => {
                actions.setSubmitting(true);
                actions.resetForm();
            }, 2000)
        );
    };
    return (
        <div className="flex h-screen items-center justify-center ">
            <Formik
                initialValues={{
                    username: '',
                    password: ''
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}>
                {(props) => (
                    <CustomForm title="Log in">
                        <Input name="username" inputLabel="user name" type="text" />
                        <Input name="password" inputLabel="password" type="password" />
                        <Button disabled={props.isSubmitting} type="submit" buttonName="login" />
                        <span className="px-2 py-4 font-mono">
                            Not a registered user?
                            {/* route can be changed to register if necessary */}
                            <Link to="/adduser" className="text-blue-400 underline">
                                Register
                            </Link>
                        </span>
                    </CustomForm>
                )}
            </Formik>
        </div>
    );
}

export default Login;
