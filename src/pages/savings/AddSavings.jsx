import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/button/Button';
import Form from '../../components/form/Form';
import Dropdown from '../../components/input/Dropdown';
import Input from '../../components/input/Input';
const options = ['Please select', 'NCS20292', 'NCS20204', 'NCS20205', 'NCS20206'];

function AddSavings() {
    return (
        <div>
            <Link to="/savings" className="flex w-full justify-end px-1 py-2">
                <Button buttonName="back to list " />
            </Link>
            <Form title="Add Savings">
                <Input inputLabel="Amount*" type="text" />
                <Dropdown inputLabel="Svn*" options={options} />
                <Button buttonName="Add saving" />
            </Form>
        </div>
    );
}

export default AddSavings;
