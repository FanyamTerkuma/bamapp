import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/button/Button';
import Form from '../../components/form/Form';
import CheckBox from '../../components/input/CheckBox';
import Dropdown from '../../components/input/Dropdown';
import Input from '../../components/input/Input';
const options = ['Please select', 'NCS20292', 'NCS20204', 'NCS20205', 'NCS20206'];

function AddRepayment() {
    return (
        <div>
            <Link to="/repayments" className="flex w-full justify-end px-1 py-2">
                <Button buttonName="back to list " />
            </Link>
            <Form title="add repayment">
                <Input inputLabel="Repay amount*" type="number" />
                <CheckBox label="penalty*" />
                <Dropdown inputLabel="svn*" options={options} />
                <Button buttonName="add repayment" />
            </Form>
        </div>
    );
}

export default AddRepayment;
