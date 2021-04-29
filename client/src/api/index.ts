import { IPlayer } from '../types'

export const deletePlayer = async (id: number) => {
   await fetch(`http://localhost:8000/players/${id}`, {
      method: 'DELETE',
   })
}

export const searchPlayer = async (playerName: string) => {
   const res = await fetch(
      `http://localhost:8000/players?keyword=${playerName}`
   )

   return await res.json()
}

export const insertPlayer = async (player: IPlayer) => {
   const res = await fetch(`http://localhost:8000/players`, {
      method: 'POST',
      body: JSON.stringify(player),
      headers: {
         'Content-type': 'application/json',
      },
   })

   return await res.json()
}

export const updatePlayer = async (player: IPlayer) => {
   const res = await fetch(
      `http://localhost:8000/players/${player.PLAYER_ID}`,
      {
         method: 'PUT',
         body: JSON.stringify(player),
         headers: {
            'Content-type': 'application/json',
         },
      }
   )
   return await res.json()
}
