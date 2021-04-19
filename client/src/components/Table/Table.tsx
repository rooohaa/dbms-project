import React from 'react'
import { TableItem } from '../TableItem'
import './Table.css'

interface TableProps {
   data: any[]
   onDelete: (id: number) => void
}

const Table: React.FC<TableProps> = ({ data, onDelete }) => {
   const getTableItems = (tableData: any[]): JSX.Element[] => {
      return tableData.map((item, idx) => {
         return <TableItem item={item} key={idx} onDelete={onDelete} />
      })
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
            <div className="header-item">Nationality</div>
            <div className="header-item">Joined</div>
         </li>
         {getTableItems(data)}
      </ul>
   )
}

export { Table }
