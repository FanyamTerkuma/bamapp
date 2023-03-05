import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/button/Button';
import Table from '../../components/table/Table';

const tableheaders = ['Id', 'Repay Amount', 'Penalty', 'Svn', 'Action'];
const tableData = [
    {
        id: 'id2019',
        repay_amount: 120000,
        penalty: 'false',
        svn: 'NCS21902'
    },
    {
        id: 'id2012',
        repay_amount: 132000,
        penalty: 'false',
        svn: 'NCS21932'
    }
];
function Repayment() {
    return (
        <div>
            <Link to="/addrepayment" className="flex w-full justify-end px-1 py-2">
                <Button buttonName="create new repayment " />
            </Link>
            <Table tableHead={tableheaders} tableData={tableData} />
        </div>
    );
}

export default Repayment;
