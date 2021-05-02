import React, { useEffect, useState } from 'react'

import { ModalForm } from './components/ModalForm'
import { SearchBar } from './components/SearchBar'
import { Table } from './components/Table'
import { ChartsModal } from './components/ChartsModal'

import * as api from './api'
import { IPlayer } from './types'
import { TopPlayers } from './components/TopPlayers'

const App = () => {
   const [players, setPlayers] = useState<IPlayer[]>([])
   const [isLoading, setIsLoading] = useState<boolean>(false)
   const [modalActive, setModalActive] = useState<boolean>(false)
   const [activePlayer, setActivePlayer] = useState<IPlayer | null>(null)
   const [chartsActive, setChartsActive] = useState<boolean>(false)
   const [topPlayersActive, setTopPlayersActive] = useState<boolean>(false)
   const [topPlayers, setTopPlayers] = useState<IPlayer[] | null>(null)

   useEffect(() => {
      setIsLoading(true)
      const getPlayers = async () => {
         const res = await fetch('http://localhost:8000/players')
         const resData = await res.json()

         setPlayers(resData)
      }
      getPlayers().then(() => setIsLoading(false))
   }, [])

   useEffect(() => {
      const getTop = async () => {
         const data = await api.getTopPlayers()
         setTopPlayers(data)
      }

      getTop()
   }, [])

   const searchPlayer = async (playerName: string) => {
      const searchedPlayers = await api.searchPlayer(playerName)
      setPlayers(searchedPlayers)
   }

   const insertPlayer = async (player: IPlayer) => {
      const res = await api.insertPlayer(player)
      const copy = [...players]
      copy.unshift(res[0])
      setPlayers(copy)

      const topPlayers = await api.getTopPlayers()
      setTopPlayers(topPlayers)
   }

   const updatePlayer = async (player: IPlayer) => {
      const res = await api.updatePlayer(player)
      const i = players.findIndex((el) => el.PLAYER_ID === player.PLAYER_ID)
      const copy = [...players]

      copy[i] = res[0]
      setPlayers(copy)

      const topPlayers = await api.getTopPlayers()
      setTopPlayers(topPlayers)
   }

   const deletePlayer = async (id: number) => {
      const res = await api.deletePlayer(id)
      console.log(res)

      setPlayers(players.filter((el: any) => el.PLAYER_ID !== id))

      const topPlayers = await api.getTopPlayers()
      setTopPlayers(topPlayers)
   }

   const sortPlayer = async (sortParam: string) => {
      const sortPlayer = await api.sortPlayer(sortParam)
      setPlayers(sortPlayer)
   }

   return (
      <div className="app">
         <div className="app-container">
            <SearchBar
               onSearch={searchPlayer}
               onAdd={() => setModalActive(true)}
               onShowTop={() => setTopPlayersActive(true)}
            />
            {isLoading ? (
               <p>Loading...</p>
            ) : (
               <Table
                  data={players}
                  onDelete={deletePlayer}
                  onItemClick={(player: IPlayer) => setActivePlayer(player)}
                  onSortPlayer={sortPlayer}
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
            {topPlayersActive && topPlayers && (
               <TopPlayers
                  data={topPlayers}
                  onClose={() => setTopPlayersActive(false)}
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
