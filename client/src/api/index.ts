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
