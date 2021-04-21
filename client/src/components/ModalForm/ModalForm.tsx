import React, { useState } from 'react'
import './ModalForm.css'

import { getUniqueId } from '../../helpers'
import { IPlayer } from '../../types'

interface IProps {
   type: string
   player?: IPlayer
   onClose: () => void
   onInsert?: (data: IPlayer) => void
   onUpdate?: (data: IPlayer) => void
}

const ModalForm: React.FC<IProps> = ({
   type,
   player,
   onClose,
   onInsert,
   onUpdate,
}) => {
   const [formData, setFormData] = useState<IPlayer>({
      PLAYER_NAME: (player && player.PLAYER_NAME) || '',
      PLAYER_AGE: (player && player.PLAYER_AGE) || 0,
      PLAYER_OVERALL_SCORE: (player && player.PLAYER_OVERALL_SCORE) || 0,
      PLAYER_CONTRACT: (player && player.PLAYER_CONTRACT) || '',
      PLAYER_VALUE: (player && player.PLAYER_VALUE) || 0,
      PLAYER_WAGE: (player && player.PLAYER_WAGE) || 0,
      PLAYER_NATIONALITY: (player && player.PLAYER_NATIONALITY) || '',
      PLAYER_JOINED: (player && player.PLAYER_JOINED) || '',
      PLAYER_SKILLS: (player && player.PLAYER_SKILLS) || 0,
   })

   const {
      PLAYER_AGE,
      PLAYER_CONTRACT,
      PLAYER_JOINED,
      PLAYER_NAME,
      PLAYER_NATIONALITY,
      PLAYER_OVERALL_SCORE,
      PLAYER_SKILLS,
      PLAYER_VALUE,
      PLAYER_WAGE,
   } = formData

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target
      setFormData((prev) => {
         return { ...prev, [name]: value }
      })
   }

   const handleSubmit = (e: React.SyntheticEvent) => {
      e.preventDefault()

      if (type === 'insert' && onInsert) {
         onInsert({
            PLAYER_ID: getUniqueId(),
            ...formData,
         })
         onClose()
      }

      if (type === 'update' && onUpdate && player) {
         onUpdate({
            PLAYER_ID: player.PLAYER_ID,
            ...formData,
         })
         onClose()
      }
   }

   return (
      <div className="overlay">
         <div className="modal">
            <form className="modal-form" onSubmit={handleSubmit}>
               <div className="wrapper-control">
                  <label htmlFor="name">Name</label>
                  <input
                     required
                     placeholder="Player name..."
                     type="text"
                     value={PLAYER_NAME}
                     onChange={handleChange}
                     name="PLAYER_NAME"
                     id="name"
                  />
               </div>
               <div className="wrapper-control">
                  <label htmlFor="age">Age</label>
                  <input
                     required
                     placeholder="Player age..."
                     type="text"
                     value={PLAYER_AGE}
                     onChange={handleChange}
                     name="PLAYER_AGE"
                     id="age"
                  />
               </div>
               <div className="wrapper-control">
                  <label htmlFor="ova">Ova</label>
                  <input
                     required
                     placeholder="Player ovarall score..."
                     type="text"
                     value={PLAYER_OVERALL_SCORE}
                     onChange={handleChange}
                     name="PLAYER_OVERALL_SCORE"
                     id="ova"
                  />
               </div>
               <div className="wrapper-control">
                  <label htmlFor="pot">Pot</label>
                  <input
                     required
                     placeholder="Player pot id..."
                     type="text"
                     value={PLAYER_SKILLS}
                     onChange={handleChange}
                     name="PLAYER_SKILLS"
                     id="pot"
                  />
               </div>
               <div className="wrapper-control">
                  <label htmlFor="teamcon">Team Contract</label>
                  <input
                     required
                     placeholder="Player team contract..."
                     type="text"
                     value={PLAYER_CONTRACT}
                     onChange={handleChange}
                     name="PLAYER_CONTRACT"
                     id="teamcon"
                  />
               </div>
               <div className="wrapper-control">
                  <label htmlFor="value">Value</label>
                  <input
                     required
                     placeholder="Player value..."
                     type="text"
                     value={PLAYER_VALUE}
                     onChange={handleChange}
                     name="PLAYER_VALUE"
                     id="value"
                  />
               </div>
               <div className="wrapper-control">
                  <label htmlFor="wage">Wage</label>
                  <input
                     required
                     placeholder="Player wage..."
                     type="text"
                     value={PLAYER_WAGE}
                     onChange={handleChange}
                     name="PLAYER_WAGE"
                     id="wage"
                  />
               </div>
               <div className="wrapper-control">
                  <label htmlFor="nationality">Nationality</label>
                  <input
                     required
                     placeholder="Player nationality..."
                     type="text"
                     value={PLAYER_NATIONALITY}
                     onChange={handleChange}
                     name="PLAYER_NATIONALITY"
                     id="nationality"
                  />
               </div>
               <div className="wrapper-control">
                  <label htmlFor="join">Joined</label>
                  <input
                     required
                     placeholder="Player joined date..."
                     type="text"
                     value={PLAYER_JOINED}
                     onChange={handleChange}
                     name="PLAYER_JOINED"
                     id="join"
                  />
               </div>
               <div className="wrapper-control">
                  <button className="submit-btn">Sumbit</button>
               </div>
            </form>
            <button className="exit-btn" onClick={onClose}>
               &times;
            </button>
         </div>
      </div>
   )
}

export { ModalForm }
