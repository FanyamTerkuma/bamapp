import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/button/Button';
import Table from '../../components/table/Table';
const tableheaders = ['ID', 'Amount loaned', 'Interest', 'Activate', 'Balance', 'Purpose', 'Svn', 'Action'];
const tableData = [
    {
        id: 'id2923',
        amount_loaned: 230000,
        interest: 'true',
        activate: 'true',
        balance: 60000,
        purpose: 'School fees',
        svn: 'NCS1283'
    },
    {
        id: 'id2923',
        amount_loaned: 230000,
        interest: 'true',
        activate: 'true',
        balance: 60000,
        purpose: 'School fees',
        svn: 'NCS1283'
    }
];
function Loan() {
    return (
        <div>
            <Link to="/addloan" className="flex w-full justify-end px-1 py-2 ">
                <Button buttonName="create new loan" />
            </Link>
            <Table tableHead={tableheaders} tableData={tableData} />
        </div>
    );
}

export default Loan;
