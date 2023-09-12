import React from 'react';
import { PropTypes } from 'prop-types';
import { Form } from 'formik';
function CustomForm({ title, children, ...props }) {
    return (
        <div className="flex justify-center py-6">
            <div className="form">
                <h1 className=" text-center font-mono text-xl uppercase">{title}</h1>
                <Form {...props} className="flex flex-col gap-2 py-4">
                    {children}
                </Form>
            </div>
        </div>
    );
}
CustomForm.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node
};
export default CustomForm;
