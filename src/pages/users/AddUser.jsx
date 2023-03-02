import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/button/Button';
import Form from '../../components/form/Form';
import CheckBox from '../../components/input/CheckBox';
import Input from '../../components/input/Input';

function AddUser() {
    return (
        <div>
            <Link to="/users" className="flex w-full justify-end px-1 py-2 ">
                <Button buttonName="back to list" />
            </Link>
            <Form title="Add New USer">
                <Input type="text" inputLabel="svn*" />
                <Input type="text" inputLabel="first name*" />
                <Input type="text" inputLabel="other name" />
                <Input type="text" inputLabel="last name*" />
                <Input type="tel" inputLabel="phone*" />
                <Input type="email" inputLabel="email" />
                <Input type="text" inputLabel="Address*" />
                <CheckBox label="activate*" />
                <Button buttonName="Add user" />
            </Form>
        </div>
    );
}

export default AddUser;
