import React from 'react';

import { PropTypes } from 'prop-types';
function Input({ inputLabel, type, className, errorMessage, ...props }) {
    return (
        <div className="flex flex-col gap-[0.2em] py-2  px-2 font-mono ">
            <label className="text-lg font-medium capitalize ">{inputLabel}</label>
            <input
                className={`w-[20em] rounded border py-1 indent-1 ${className === 'error_input' ? 'border-red-400 outline-red-400' : 'outline-blue-400 '}`}
                type={type}
                {...props}
            />
            {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
        </div>
    );
}

Input.propTypes = {
    inputLabel: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
    errorMessage: PropTypes.string
};
export default Input;
