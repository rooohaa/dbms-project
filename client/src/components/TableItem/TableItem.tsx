import React from 'react'
import './TableItem.css'

interface TableItemProps {
   item?: any
   onDelete: (id: number) => void,
   onUpdate: (state: any) => void
}

const TableItem: React.FC<TableItemProps> = ({ item, onDelete, onUpdate}) => {
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
      <li className="wrapper" >
         <div className="item" onClick={() => onUpdate(item)}>
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
                  <img className="team-img" src="data:image/png;base64,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" alt="" />
                  <span>{PLAYER_CLUB}</span>
               </div>
               <div className="contract">
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
         </div>
         <i
            className="fas fa-trash-alt delete"
            onClick={() => onDelete(PLAYER_ID)}
         ></i>
      </li>
   )
}

export { TableItem }
