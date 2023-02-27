import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <div className="shadow-xl">
            <NavLink className="flex justify-evenly py-4 uppercase cursor-pointer">
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/users">Users</Link>
                <Link to="/savings">Savings</Link>
                <Link to="/loans">Loans</Link>
                <Link to="/repayments">Repayments</Link>
                <Link to="/summary">Summary</Link>
            </NavLink>
        </div>
    );
}

export default NavBar;
