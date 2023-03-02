import React from 'react';

import { PropTypes } from 'prop-types';
function Input({ inputLabel, type, ...props }) {
    return (
        <div className="flex flex-col py-2 px-2  font-mono ">
            <label className="text-lg font-medium capitalize ">{inputLabel}</label>
            <input className=" w-[20em] rounded border py-1 indent-1 outline-blue-400" type={type} {...props} />
        </div>
    );
}

Input.propTypes = {
    inputLabel: PropTypes.string,
    type: PropTypes.string
};
export default Input;
