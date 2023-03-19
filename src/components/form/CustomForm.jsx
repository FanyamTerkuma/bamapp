import React from 'react';
import { PropTypes } from 'prop-types';
import { Form } from 'formik';
function CustomForm({ title, children, ...props }) {
    return (
        <div className="flex justify-center">
            <div className="form">
                <h1 className="w-full text-center font-mono text-xl uppercase">{title}</h1>
                <Form {...props} className="flex flex-col">
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
