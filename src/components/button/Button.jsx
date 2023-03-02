import React from 'react';
import { PropTypes } from 'prop-types';
function Button({ icon, buttonType, className, buttonName, ...props }) {
    return (
        <button
            {...props}
            className={`${className ? className : 'py-2 px-3 uppercase'}  rounded-md mono text-white  hover:shadow-lg 
                ${buttonType === 'delete' ? 'bg-red-600' : 'bg-blue-400'}`}>
            {icon ? (
                <p className="flex gap-1 items-center justify-center">
                    {icon}
                    {buttonName}
                </p>
            ) : (
                <p>{buttonName}</p>
            )}
        </button>
    );
}

Button.propTypes = {
    buttonName: PropTypes.string,
    buttonType: PropTypes.string,
    className: PropTypes.string,
    icon: PropTypes.element
};
export default Button;
