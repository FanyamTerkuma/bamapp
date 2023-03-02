import React from 'react';
import { PropTypes } from 'prop-types';
function Dropdown({ inputLabel, options }) {
    return (
        <div className="flex flex-col py-2 px-2  font-mono ">
            <label className="text-lg font-medium capitalize ">{inputLabel}</label>
            <select className=" w-auto rounded border py-[0.46rem] indent-1 font-mono outline-blue-400">
                {options.map((option, id) => (
                    <option key={id} value={option.toLowerCase()}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}
Dropdown.propTypes = {
    inputLabel: PropTypes.string,
    options: PropTypes.array
};
export default Dropdown;
