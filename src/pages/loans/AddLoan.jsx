import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/button/Button';
import CheckBox from '../../components/input/CheckBox';
import Dropdown from '../../components/input/Dropdown';
import Input from '../../components/input/Input';
import { Formik } from 'formik';
import * as Yup from 'yup';
import CustomForm from '../../components/form/CustomForm';
const svnList = [
    { value: '', label: 'Please select svn' },
    { value: 'NCS102020', label: 'NCS102020' },
    { value: 'NCS102010', label: 'NCS102010' },
    { value: 'NCS102022', label: 'NCS102022' },
    { value: 'NCS102030', label: 'NCS102030' },
    { value: 'NCS102120', label: 'NCS102120' }
];
function AddLoan() {
    const validationSchema = Yup.object().shape({
        amountLoaned: Yup.number().min(0).max(9999999).required('Amount loaned is required!'),
        balance: Yup.number().required('Balance is required!'),
        purpose: Yup.string().required('Purpose is required!'),
        guarantor1: Yup.string().required("Guarantor 1's svn is required!"),
        guarantor2: Yup.string().when('amountLoaned', {
            is: (value) => value > 100000,
            then: Yup.string().required("Guarantor 2's svn is required!")
        }),
        activate: Yup.boolean().oneOf([true], 'Please activate'),
        interest: Yup.boolean().oneOf([true], 'Please select interest'),
        dropdown: Yup.string()
            .oneOf(svnList.map((option) => option.value))
            .required('Please select svn')
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
            <Link to="/loans" className="flex w-full justify-end px-1 py-2 ">
                <Button buttonName="back to list" />
            </Link>
            <Formik
                initialValues={{
                    amountLoaned: '',
                    balance: '',
                    purpose: '',
                    guarantor1: '',
                    guarantor2: '',
                    interest: false,
                    activate: false,
                    dropdown: ''
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}>
                {(props) => (
                    <CustomForm title="add loan">
                        <Input name="amountLoaned" inputLabel="amount loaned*" type="number" />
                        <CheckBox label="interest*" type="checkbox" name="interest" />
                        <CheckBox label="activate*" type="checkbox" name="activate" />
                        <Input name="balance" inputLabel="balance*" type="number" />
                        <Input name="purpose" inputLabel="purpose*" type="text" />
                        <Input name="guarantor1" inputLabel="Guarantor(svn) 1*" type="text" />
                        <Input name="guarantor2" inputLabel="Guarantor(svn) 2" type="text" />
                        <Dropdown name="dropdown" label="svn*" options={svnList} />
                        <Button disabled={props.isSubmitting} type="submit" buttonName={props.isSubmitting ? 'adding loan' : 'add loan'} />
                    </CustomForm>
                )}
            </Formik>
        </div>
    );
}

export default AddLoan;
