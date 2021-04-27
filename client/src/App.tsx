import React, { useEffect, useState } from 'react'

import { ModalForm } from './components/ModalForm'
import { SearchBar } from './components/SearchBar'
import { Table } from './components/Table'
import { ChartsModal } from './components/ChartsModal'

import * as api from './api'
import { IPlayer } from './types'

const App = () => {
   const [players, setPlayers] = useState<IPlayer[]>([])
   const [isLoading, setIsLoading] = useState<boolean>(false)
   const [modalActive, setModalActive] = useState<boolean>(false)
   const [activePlayer, setActivePlayer] = useState<IPlayer | null>(null)
   const [chartsActive, setChartsActive] = useState<boolean>(false)

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
      const searchedPlayers = await api.searchPlayer(playerName)
      setPlayers(searchedPlayers)
   }

   const insertPlayer = (player: IPlayer): void => {
      setPlayers((prev) => [player, ...prev])
      fetch('http://localhost:8000/players', {
         method: 'POST',
         body: JSON.stringify(player),
         headers: {
            'Content-type': 'application/json',
         },
      })
   }

   const updatePlayer = (player: IPlayer): void => {
      const i = players.findIndex((el) => el.PLAYER_ID === player.PLAYER_ID)
      const copy = [...players]

      copy[i] = player

      setPlayers(copy)
   }

   const deletePlayer = (id: number): void => {
      setPlayers(players.filter((el: any) => el.PLAYER_ID !== id))
      api.deletePlayer(id)
   }

   return (
      <div className="app">
         <div className="app-container">
            <SearchBar
               onSearch={searchPlayer}
               onAdd={() => setModalActive(true)}
            />
            {isLoading ? (
               <p>Loading...</p>
            ) : (
               <Table
                  data={players}
                  onDelete={deletePlayer}
                  onItemClick={(player: IPlayer) => setActivePlayer(player)}
               />
            )}
            {modalActive ? (
               <ModalForm
                  type="insert"
                  onClose={() => setModalActive(false)}
                  onInsert={insertPlayer}
               />
            ) : activePlayer ? (
               <ModalForm
                  type="update"
                  onClose={() => setActivePlayer(null)}
                  player={activePlayer}
                  onUpdate={updatePlayer}
               />
            ) : null}
            {chartsActive && (
               <ChartsModal
                  data={players}
                  onClose={() => setChartsActive(false)}
               />
            )}
         </div>

         <button
            className="chart-trigger"
            onClick={() => setChartsActive(true)}
         >
            <i className="fas fa-project-diagram"></i>
         </button>
      </div>
   )
}

export { App }
