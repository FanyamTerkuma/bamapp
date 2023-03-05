import React from 'react';
import Button from '../button/Button';
import { PropTypes } from 'prop-types';
function Table({ tableHead, tableData }) {
    return (
        <div className="flex w-full justify-center py-2 px-4">
            <table className="table w-full border-spacing-1 rounded-lg p-2 text-center  shadow-xl">
                <thead className="h-[2.5em] bg-gray-200 ">
                    <tr className=" ">
                        {tableHead.map((title) => (
                            <th className="whitespace-nowrap leading-tight" key={title}>
                                {title}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-slate-50">
                    {tableData.map((data, id) => (
                        <tr key={id} className=" ">
                            {tableHead.map((head, index) => (
                                <>
                                    {head.toLowerCase().replace(' ', '_') in data ? (
                                        <td key={index} className=" text-sm">
                                            {data[head.toLowerCase().replace(' ', '_')]}
                                        </td>
                                    ) : (
                                        <td className=" styledText flex  justify-center gap-1 py-2">
                                            <Button className="py-1 px-2 " buttonName="Edit" />
                                            <Button className="py-1 px-2 " buttonType="delete" buttonName="Delete" />
                                        </td>
                                    )}
                                </>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
Table.propTypes = {
    tableHead: PropTypes.array,
    tableData: PropTypes.array
};

export default Table;
