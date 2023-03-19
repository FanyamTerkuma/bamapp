import { Formik } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/button/Button';
import CustomForm from '../../components/form/CustomForm';
import CheckBox from '../../components/input/CheckBox';
import Input from '../../components/input/Input';

function AddUser() {
    const phonePattern = '^[0-9]+$';
    const validationSchema = Yup.object().shape({
        svn: Yup.string().required('Svn is required!'),
        firstname: Yup.string().required('First name is required!'),
        othername: Yup.string(),
        lastname: Yup.string().required('Last name is required!'),
        phone: Yup.string().matches(phonePattern, { message: 'Phone is invalid!' }).required('Phone number is required!'),
        email: Yup.string().email('Invalid email'),
        address: Yup.string().required('Address is required!'),
        activate: Yup.boolean().oneOf([true], 'Please activate')
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
        <div>
            <Link to="/users" className="flex w-full justify-end px-1 py-2 ">
                <Button buttonName="back to list" />
            </Link>
            <Formik
                initialValues={{
                    svn: '',
                    firstname: '',
                    othername: '',
                    lastname: '',
                    phone: '',
                    email: '',
                    address: '',
                    activate: false
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}>
                {(props) => (
                    <CustomForm title="Add New USer">
                        <Input name="svn" type="text" inputLabel="svn*" />
                        <Input name="firstname" type="text" inputLabel="first name*" />
                        <Input name="othername" type="text" inputLabel="other name" />
                        <Input name="lastname" type="text" inputLabel="last name*" />
                        <Input name="phone" type="tel" inputLabel="phone*" />
                        <Input name="email" type="email" inputLabel="email" />
                        <Input name="address" type="text" inputLabel="Address*" />
                        <CheckBox type="checkbox" name="activate" label="activate*" />
                        <Button disabled={props.isSubmitting} buttonName="Add user" />
                    </CustomForm>
                )}
            </Formik>
        </div>
    );
}

export default AddUser;
