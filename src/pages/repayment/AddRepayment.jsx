import { Formik } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/button/Button';
import CustomForm from '../../components/form/CustomForm';
import CheckBox from '../../components/input/CheckBox';
import Dropdown from '../../components/input/Dropdown';
import Input from '../../components/input/Input';
import * as Yup from 'yup';
const svnList = [
    { value: '', label: 'Please select svn' },
    { value: 'NCS102020', label: 'NCS102020' },
    { value: 'NCS102010', label: 'NCS102010' },
    { value: 'NCS102022', label: 'NCS102022' },
    { value: 'NCS102030', label: 'NCS102030' },
    { value: 'NCS102120', label: 'NCS102120' }
];

function AddRepayment() {
    const validationSchema = Yup.object().shape({
        repayment: Yup.number().required('Amount is required!'),
        penalty: Yup.boolean().oneOf([true, false]),
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
            <Link to="/repayments" className="flex w-full justify-end px-1 py-2">
                <Button buttonName="back to list " />
            </Link>
            <Formik
                initialValues={{
                    repayment: '',
                    penalty: '',
                    dropdown: ''
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}>
                {(props) => (
                    <CustomForm title="add repayment">
                        <Input name="repayment" inputLabel="Repay amount*" type="number" />
                        <CheckBox name="penalty" type="checkbox" label="penalty*" />
                        <Dropdown name="dropdown" inputLabel="svn*" options={svnList} />
                        <Button disabled={props.isSubmitting} buttonName={props.isSubmitting ? 'adding repayment' : 'add repayment'} />
                    </CustomForm>
                )}
            </Formik>
        </div>
    );
}

export default AddRepayment;
