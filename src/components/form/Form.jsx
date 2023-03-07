import React from 'react';
import { PropTypes } from 'prop-types';
function Form({ title, children, ...props }) {
    return (
        <div className="flex justify-center">
            <div className="form">
                <h1 className="w-full text-center font-mono text-xl uppercase">{title}</h1>
                <form {...props} className="flex flex-col">
                    {children}
                </form>
            </div>
        </div>
    );
}
Form.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node
};
export default Form;
