import React from 'react';
import { NavLink } from 'react-router-dom';
const navLinks = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'Login',
        path: '/login'
    },
    {
        name: 'USers',
        path: '/users'
    },
    {
        name: 'Savings',
        path: '/savings'
    },
    {
        name: 'Loans',
        path: '/loans'
    },
    {
        name: 'Repayments',
        path: '/repayments'
    },
    {
        name: 'Summary',
        path: '/summary'
    }
];
function NavBar() {
    return (
        <div className="sticky top-0 z-20 flex w-full cursor-pointer flex-col items-center justify-between  px-2 py-4 text-xl font-light uppercase tracking-[0.07em] shadow-xl backdrop-blur-xl sm:flex-row">
            <span className="bg-blue-400 p-2 tracking-tighter ">icon and name</span>
            {navLinks.map((link, id) => (
                <NavLink key={id} to={link.path} className={({ isActive }) => (isActive ? 'skew-y-2  border-b-2 border-blue-300' : '')} end>
                    {link.name}
                </NavLink>
            ))}
        </div>
    );
}

export default NavBar;
