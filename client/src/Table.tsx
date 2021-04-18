import React, { useState } from 'react';
import TableItem from './TableItem';
import './Table.css';

interface TableProps{
    data: any[]
}

const Table: React.FC<TableProps> = ({data}) => {
    const [tableData, setTableData] = useState<any[]>(data);

    const getTableItems = (tableData: any[]): JSX.Element[] => {
        return tableData.map((item, idx) => {
            return <TableItem item={item} key={idx}/>
        });
    }

    return (
        <ul className="table">
            <li className="header">
                <div className="header-item">Name</div>
                <div className="header-item">Age</div>
                <div className="header-item">Ova</div>
                <div className="header-item">Pot</div>
                <div className="header-item">Team Contract</div>
                <div className="header-item">Value</div>
                <div className="header-item">Wage</div>
                <div className="header-item">Total Stats</div>
                <div className="header-item">Hits</div>
            </li>
            <TableItem />
            <TableItem />
            <TableItem />
            <TableItem />
            <TableItem />
            <TableItem />
            <TableItem />
            <TableItem />
            <TableItem />
            <TableItem />
            <TableItem />
            <TableItem />
            <TableItem />
            <TableItem />
            <TableItem />
            <TableItem />
            <TableItem />
            <TableItem />
            <TableItem />
        </ul>
    );
}

export default Table;