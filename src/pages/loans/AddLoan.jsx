import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/button/Button';
import Form from '../../components/form/Form';
import CheckBox from '../../components/input/CheckBox';
import Dropdown from '../../components/input/Dropdown';
import Input from '../../components/input/Input';
const svnList = ['Please select', 'NCS102020', 'NCS302220', 'NCS102022', 'NCS102220'];
function AddLoan() {
    return (
        <div>
            <Link to="/loans" className="flex w-full justify-end px-1 py-2 ">
                <Button buttonName="back to list" />
            </Link>
            <Form title="add loan">
                <Input inputLabel="amount loaned*" type="text" />
                <CheckBox label="interest*" />
                <CheckBox label="activate*" />
                <Input inputLabel="balance*" type="text" />
                <Input inputLabel="purpose*" type="text" />
                <Dropdown inputLabel="svn*" options={svnList} />
                <Button buttonName="add loan" />
            </Form>
        </div>
    );
}

export default AddLoan;
