import React from 'react'
import './TableItem.css'

import { IPlayer } from '../../types'

interface TableItemProps {
   item: IPlayer
   onDelete: (id: number) => void
   onItemClick: (player: IPlayer) => void
}

const TableItem: React.FC<TableItemProps> = ({
   item,
   onDelete,
   onItemClick,
}) => {
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
      <div className="item-wrap">
         <li className="wrapper" onClick={() => onItemClick(item)}>
            <div className="item">
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
         </li>
         <button
            className="delete-btn"
            aria-label="delete-button"
            onClick={() => PLAYER_ID && onDelete(PLAYER_ID)}
         >
            <i className="fas fa-trash-alt delete"></i>
         </button>
      </div>
   )
}

export { TableItem }
