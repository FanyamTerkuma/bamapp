import React from 'react';
import { PropTypes } from 'prop-types';
function Button({ icon, buttonType, className, buttonName, ...props }) {
    return (
        <button
            {...props}
            className={`${className ? className : 'py-2 px-3 uppercase'} mono mx-2 rounded-md text-white  hover:shadow-lg 
                ${buttonType === 'delete' ? 'bg-red-600' : 'bg-blue-400'}`}>
            {icon ? (
                <p className="flex items-center justify-center gap-1">
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
