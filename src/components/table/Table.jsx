import React from 'react';
import Button from '../button/Button';
import { PropTypes } from 'prop-types';
function Table({ tableHead, tableData }) {
    return (
        <div className="flex w-full justify-center py-2 px-4">
            <table className="w-full rounded-lg bg-white p-2 text-center shadow-lg">
                <thead className="bg-[#0a9396]">
                    {tableHead.map((title) => (
                        <th className="border-r border-gray-400 text-lg font-light text-[#edf6f9]" key={title}>
                            {title}
                        </th>
                    ))}
                </thead>
                <tbody>
                    {tableData.map((data, id) => (
                        <tr key={id} className="border-t  border-gray-400">
                            {tableHead.map((head, index) => (
                                <>
                                    {head.toLowerCase().replace(' ', '_') in data ? (
                                        <td key={index} className="border-r border-gray-400">
                                            {data[head.toLowerCase().replace(' ', '_')]}
                                        </td>
                                    ) : (
                                        <td className=" styledText border-r-none flex  justify-center gap-1 p-1">
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
