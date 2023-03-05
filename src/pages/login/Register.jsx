import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/button/Button';
import Form from '../../components/form/Form';
import Input from '../../components/input/Input';

function Register() {
    return (
        <div className="my-20 ">
            <Form title="Register new user">
                <Input inputLabel="user name" type="text" />
                <Input inputLabel="password" type="password" />
                <Button buttonName="register" />
                <span className="px-2 py-4 font-mono">
                    Registered user?
                    <Link to="/login" className="text-blue-400 underline">
                        Login
                    </Link>
                </span>
            </Form>
        </div>
    );
}

export default Register;
