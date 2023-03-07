import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/button/Button';
import Form from '../../components/form/Form';
import Input from '../../components/input/Input';
import { useFormik } from 'formik';
import * as yup from 'yup';
function Login() {
    const onSubmit = async (values, actions) => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        actions.resetForm();
    };
    const phonePattern = '^[0-9]+$';
    const validationSchema = yup.object().shape({
        username: yup.string().required('username is required!'),
        password: yup.string().matches(phonePattern, { message: 'Password is invalid!' }).required('Password is required!')
    });
    const { values, errors, touched, handleBlur, handleChange, isSubmitting, handleSubmit } = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validationSchema: validationSchema,
        onSubmit
    });

    return (
        <div className="flex h-96 items-center justify-center ">
            <Form onSubmit={handleSubmit} title="Log in">
                <Input
                    className={errors.username && touched.username ? 'error_input' : ''}
                    id="username"
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    inputLabel="user name"
                    type="text"
                    errorMessage={errors.username && touched.username && errors.username}
                />
                <Input
                    className={errors.password && touched.password ? 'error_input' : ''}
                    id="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    inputLabel="password"
                    type="password"
                    errorMessage={errors.password && touched.password && errors.password}
                />
                <Button disabled={isSubmitting} type="submit" buttonName="login" />
                <span className="px-2 py-4 font-mono">
                    Not a registered user?
                    {/* route can be changed to register if necessary */}
                    <Link to="/adduser" className="text-blue-400 underline">
                        Register
                    </Link>
                </span>
            </Form>
        </div>
    );
}

export default Login;
