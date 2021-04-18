import React, { useEffect, useState } from 'react'

import { SearchBar } from './components/SearchBar'
import Table from './Table'
import './App.css'

const App = () => {
   const [players, setPlayers] = useState<any>([])
   const [isLoading, setIsLoading] = useState<boolean>(false)

   useEffect(() => {
      setIsLoading(true)
      const getPlayers = async () => {
         const res = await fetch('http://localhost:8000/players')
         const resData = await res.json()

         setPlayers(resData)
      }
      getPlayers().then(() => setIsLoading(false))
   }, [])

   const searchPlayer = async (playerName: string) => {
      const res = await fetch(
         `http://localhost:8000/players?keyword=${playerName}`
      )

      const resData = await res.json()
      setPlayers(resData)
   }

   const onDelete = async (id: number) => {
      setPlayers(players.filter((el: any) => el.PLAYER_ID !== id))

      await fetch(`http://localhost:8000/players/${id}`, {
         method: 'DELETE',
      })
   }

   return (
      <div className="app">
         <div className="app-container">
            <SearchBar onSearch={searchPlayer} />
            {isLoading ? (
               <p>Loading...</p>
            ) : (
               <Table data={players} onDelete={onDelete} />
            )}
         </div>
      </div>
   )
}

export default App
