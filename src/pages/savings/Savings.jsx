import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/button/Button';
import Table from '../../components/table/Table';
const tableHeaders = ['Id', 'Amount', 'Svn', 'Action'];
const savings = [
    {
        id: '12023',
        amount: 2000,
        svn: 'NCS3202'
    },
    {
        id: '12024',
        amount: 200,
        svn: 'NCS3202'
    }
];
function Savings() {
    return (
        <div>
            <Link to="/addsavings" className="flex justify-end px-1 py-2">
                <Button buttonName="create new savings" />
            </Link>
            <Table tableHead={tableHeaders} tableData={savings} />
        </div>
    );
}

export default Savings;
