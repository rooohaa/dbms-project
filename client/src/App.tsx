import React, { useEffect, useState } from 'react'
import Table from './Table'
import './App.css'

const App = () => {
   const [players, setPlayers] = useState<any>([])

   useEffect(() => {
      const getPlayers = async () => {
         const res = await fetch('http://localhost:8000/players')
         const resData = await res.json()

         setPlayers(resData)
      }
      getPlayers()
   }, [])

   return (
      <div className="app">
         <div className="app-container">
            <Table data={players} />
         </div>
      </div>
   )
}

export default App
