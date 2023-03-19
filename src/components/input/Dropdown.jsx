import React from 'react';
import { PropTypes } from 'prop-types';
import { useField } from 'formik';
function Dropdown({ label, options, ...props }) {
    const [field, meta] = useField(props);
    return (
        <div className="flex flex-col py-2 px-2  font-mono ">
            <label htmlFor={props.id || props.name} className="text-lg font-medium capitalize ">
                {label}
            </label>
            <select {...field} {...props} className=" w-auto rounded border py-[0.46rem] indent-1 font-mono outline-blue-400">
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {meta.touched && meta.error ? <p className=" px-2 font-mono text-sm text-red-500">{meta.error}</p> : null}
        </div>
    );
}
Dropdown.propTypes = {
    label: PropTypes.string,
    options: PropTypes.array
};
export default Dropdown;
