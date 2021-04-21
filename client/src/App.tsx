import React, { useEffect, useState } from 'react'

import { ModalForm } from './components/ModalForm'
import { SearchBar } from './components/SearchBar'
import { Table } from './components/Table'

import * as api from './api'
import { IPlayer } from './types'

const App = () => {
   const [players, setPlayers] = useState<IPlayer[]>([])
   const [isLoading, setIsLoading] = useState<boolean>(false)
   const [modalActive, setModalActive] = useState<boolean>(false)
   const [activePlayer, setActivePlayer] = useState<IPlayer | null>(null)

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
         </div>
      </div>
   )
}

export { App }
