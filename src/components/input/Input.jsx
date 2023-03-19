import React from 'react';

import { PropTypes } from 'prop-types';
import { useField } from 'formik';
function Input({ inputLabel, ...props }) {
    const [field, meta] = useField(props);
    return (
        <div className="flex flex-col gap-[0.2em] py-2  px-2 font-mono ">
            <label className="text-lg font-medium capitalize ">{inputLabel}</label>
            <input
                {...field}
                {...props}
                className={`w-[20em] rounded border py-1 indent-1 ${meta.error && meta.touched ? 'border-red-400 outline-red-400' : 'outline-blue-400 '}`}
            />
            {meta.error && meta.touched && <p className="text-sm text-red-500">{meta.error}</p>}
        </div>
    );
}

Input.propTypes = {
    inputLabel: PropTypes.string
};
export default Input;
