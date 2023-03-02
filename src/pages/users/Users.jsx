import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/button/Button';
import Table from '../../components/table/Table';

const tableHead = ['Svn', 'First Name', 'Other Name', 'Last Name', 'Phone', 'Email', 'Address', 'Activate'];
const tableData = [
    {
        svn: 'ID2321',
        first_name: 'user_firstname',
        other_name: 'user_othername',
        last_name: 'user_lastname',
        phone: '08027393333',
        email: 'faiiakw@gmail.com',
        address: 'flat 117, nigeria customs quarters,kuje'
    },
    {
        svn: 'ID2322',
        first_name: 'user1_firstname',
        other_name: 'user1_othername',
        last_name: 'user1_lastname',
        phone: '08027393333',
        email: 'faiiakw@gmail.com',
        address: 'flat 117, nigeria customs quarters,kuje '
    },
    {
        svn: 'ID2322',
        first_name: 'user2_firstname',
        other_name: 'user2_othername',
        last_name: 'user2_lastname',
        phone: '08027393333',
        email: 'faiiakw@gmail.com',
        address: 'flat 117, nigeria customs quarters,kuje '
    }
];
function Users() {
    return (
        <div>
            <Link to="/adduser" className="flex justify-end px-1 py-2">
                <Button buttonName="add new user" />
            </Link>
            <Table tableHead={tableHead} tableData={tableData} />
        </div>
    );
}

export default Users;
