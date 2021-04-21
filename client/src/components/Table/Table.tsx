import React from 'react'
import { TableItem } from '../TableItem'
import './Table.css'

import { IPlayer } from '../../types'

interface TableProps {
   data: IPlayer[]
   onDelete: (id: number) => void
   onItemClick: (player: IPlayer) => void
}

const Table: React.FC<TableProps> = ({ data, onDelete, onItemClick }) => {
   const getTableItems = (tableData: IPlayer[]): JSX.Element[] => {
      return tableData.map((item, idx) => {
         return (
            <TableItem
               item={item}
               key={idx}
               onDelete={onDelete}
               onItemClick={onItemClick}
            />
         )
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
