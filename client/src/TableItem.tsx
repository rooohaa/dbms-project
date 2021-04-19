import React from 'react'
import './TableItem.css'

interface TableItemProps {
   item?: any
   onDelete: (id: number) => void
}

const TableItem: React.FC<TableItemProps> = ({ item, onDelete }) => {
   const {
      PLAYER_ID,
      PLAYER_NAME,
      PLAYER_AGE,
      PLAYER_OVERALL_SCORE,
      PLAYER_PHOTO,
      PLAYER_CLUB,
      PLAYER_CLUB_PHOTO,
      PLAYER_CONTRACT,
      PLAYER_FLAG_PHOTO,
      PLAYER_VALUE,
      PLAYER_WAGE,
      PLAYER_NATIONALITY,
      PLAYER_JOINED,
      PLAYER_SKILLS,
   } = item

   return (
      <li className="item">
         <div className="main">
            <img className="man-img" src="/cris.png" alt="" />
            <div>
               <div className="name">
                  <img className="flag-img" src="/hetafe.png" alt="" />
                  <span>{PLAYER_NAME}</span>
               </div>
               <div className="pos">
                  <span>{PLAYER_ID}</span>
               </div>
            </div>
         </div>
         <div className="secondary">
            <span>{PLAYER_AGE}</span>
         </div>
         <div className="secondary">
            <div className="ova">
               <span>{PLAYER_OVERALL_SCORE}</span>
            </div>
         </div>
         <div className="secondary">
            <div>
               <span className="pot">{PLAYER_SKILLS}</span>
            </div>
         </div>
         <div className="team">
            <div className="name team-name">
               <img className="team-img" src="/real.png" alt="" />
               <span>{PLAYER_CLUB}</span>
            </div>
            <div>
               <span>{PLAYER_CONTRACT}</span>
            </div>
         </div>
         <div className="secondary">
            <span>{PLAYER_VALUE}</span>
         </div>
         <div className="secondary">
            <span>{PLAYER_WAGE}</span>
         </div>
         <div className="secondary">
            <span>{PLAYER_NATIONALITY}</span>
         </div>
         <div className="secondary">
            <span>{PLAYER_JOINED}</span>
         </div>
         <i
            className="fas fa-trash-alt delete"
            onClick={() => onDelete(PLAYER_ID)}
         ></i>
      </li>
   )
}

export default TableItem
