import React from 'react';
import { PropTypes } from 'prop-types';
import { useField } from 'formik';

function CheckBox({ label, ...props }) {
    const [field, meta] = useField(props);
    return (
        <>
            <div className="flex items-center gap-1 px-2 font-mono">
                <input className="cursor-pointer" {...field} {...props} />
                <label htmlFor="checkbox" className="first-letter:uppercase ">
                    {label}
                </label>
            </div>
            {meta.touched && meta.error && <p className=" px-2 font-mono text-sm text-red-500">{meta.error}</p>}
        </>
    );
}
CheckBox.propTypes = {
    label: PropTypes.string
};
export default CheckBox;
