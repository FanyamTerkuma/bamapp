import React from 'react';
import { PropTypes } from 'prop-types';

function CheckBox({ label, ...props }) {
    return (
        <div className="flex items-center gap-1 px-2 font-mono">
            <input className=" cursor-pointer" name="checkbox" type="checkbox" {...props} />
            <label htmlFor="checkbox" className="first-letter:uppercase ">
                {label}
            </label>
        </div>
    );
}
CheckBox.propTypes = {
    label: PropTypes.string
};
export default CheckBox;
