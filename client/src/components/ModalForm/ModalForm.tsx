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
      PLAYER_NATIONALITY: (player && player.PLAYER_NATIONALITY) || '',
      PLAYER_CLUB: (player && player.PLAYER_CLUB) || '',
      PLAYER_CONTRACT: (player && player.PLAYER_CONTRACT) || '',
      PLAYER_JOINED: (player && player.PLAYER_JOINED) || '',
      PLAYER_VALUE: (player && player.PLAYER_VALUE) || 0,
      PLAYER_WAGE: (player && player.PLAYER_WAGE) || 0,
      PLAYER_ATTACKING: (player && player.PLAYER_ATTACKING) || 0,
      PLAYER_SKILLS: (player && player.PLAYER_SKILLS) || 0,
      PLAYER_ACCELERATION: (player && player.PLAYER_ACCELERATION) || 0,
      PLAYER_POWER: (player && player.PLAYER_POWER) || 0,
      PLAYER_STRENGTH: (player && player.PLAYER_STRENGTH) || 0,
   })

   const {
      PLAYER_NAME,
      PLAYER_AGE,
      PLAYER_NATIONALITY,
      PLAYER_CLUB,
      PLAYER_CONTRACT,
      PLAYER_JOINED,
      PLAYER_VALUE,
      PLAYER_WAGE,
      PLAYER_ATTACKING,
      PLAYER_SKILLS,
      PLAYER_ACCELERATION,
      PLAYER_POWER,
      PLAYER_STRENGTH,
   } = formData

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target
      setFormData((prev) => {
         return { ...prev, [name]: isNaN(+value) ? value : Number(value) }
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
                  <label htmlFor="club">Club</label>
                  <input
                     required
                     placeholder="Player club..."
                     type="text"
                     value={PLAYER_CLUB}
                     onChange={handleChange}
                     name="PLAYER_CLUB"
                     id="club"
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
                  <label htmlFor="value">Value</label>
                  <input
                     required
                     placeholder="Player value..."
                     type="number"
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
                     type="number"
                     value={PLAYER_WAGE}
                     onChange={handleChange}
                     name="PLAYER_WAGE"
                     id="wage"
                  />
               </div>

               <div className="wrapper-control">
                  <label htmlFor="attacking">Attacking</label>
                  <input
                     required
                     placeholder="Player wage..."
                     type="number"
                     value={PLAYER_ATTACKING}
                     onChange={handleChange}
                     name="PLAYER_ATTACKING"
                     id="attacking"
                  />
               </div>

               <div className="wrapper-control">
                  <label htmlFor="skills">Skills</label>
                  <input
                     required
                     placeholder="Player wage..."
                     type="number"
                     value={PLAYER_SKILLS}
                     onChange={handleChange}
                     name="PLAYER_SKILLS"
                     id="skills"
                  />
               </div>

               <div className="wrapper-control">
                  <label htmlFor="accel">Acceleration</label>
                  <input
                     required
                     placeholder="Player wage..."
                     type="number"
                     value={PLAYER_ACCELERATION}
                     onChange={handleChange}
                     name="PLAYER_ACCELERATION"
                     id="accel"
                  />
               </div>

               <div className="wrapper-control">
                  <label htmlFor="power">Power</label>
                  <input
                     required
                     placeholder="Player wage..."
                     type="number"
                     value={PLAYER_POWER}
                     onChange={handleChange}
                     name="PLAYER_POWER"
                     id="power"
                  />
               </div>

               <div className="wrapper-control">
                  <label htmlFor="strength">Strength</label>
                  <input
                     required
                     placeholder="Player wage..."
                     type="number"
                     value={PLAYER_STRENGTH}
                     onChange={handleChange}
                     name="PLAYER_STRENGTH"
                     id="strength"
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
