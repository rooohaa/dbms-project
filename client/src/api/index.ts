import { IPlayer } from '../types'

export const deletePlayer = async (id: number) => {
   const res = await fetch(`http://localhost:8000/players/${id}`, {
      method: 'DELETE',
   })
   return await res.json()
}

export const searchPlayer = async (playerName: string) => {
   const res = await fetch(
      `http://localhost:8000/players?keyword=${playerName}`
   )

   return await res.json()
}

export const getTopPlayers = async () => {
   const resp = await fetch('http://localhost:8000/top-players')
   return await resp.json()
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

export const sortPlayer = async (sortParam: string) => {
   const res = await fetch(
      `http://localhost:8000/players/sort?keyword=${sortParam}`
   )

   return await res.json()
}
