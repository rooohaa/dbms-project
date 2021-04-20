import React, { useEffect, useState } from 'react'
import { Modal } from '../Modal'
import { SearchBar } from '../SearchBar'
import { Table } from '../Table/'
import './App.css'

const App = () => {
   const [players, setPlayers] = useState<any>([])
   const [isLoading, setIsLoading] = useState<boolean>(true)
   const [{isOpen, player}, setModal] = useState<{player: any | null, isOpen: boolean}>({player: null, isOpen: false});

   useEffect(() => {
      setPlayers([{
         PLAYER_ACCELERATION: 61,
         PLAYER_ACCURACY_FK: 70,
         PLAYER_AGE: 36,
         PLAYER_AGGRESSION: 58,
         PLAYER_AGILITY: 79,
         PLAYER_ATTACKING: 367,
         PLAYER_BALANCE: 75,
         PLAYER_BALL_CONTROL: 90,
         PLAYER_CLUB: "Vissel Kobe",
         PLAYER_CLUB_PHOTO: "https://cdn.sofifa.com/teams/101146/light_60.png",
         PLAYER_COMPOSURE: 89,
         PLAYER_CONTRACT: "2018 ~ 2021",
         PLAYER_CROSSING: 75,
         PLAYER_CURVE: 80,
         PLAYER_DEFENDING: 181,
         PLAYER_DRIBBLING: 85,
         PLAYER_FINISH: 69,
         PLAYER_FLAG_PHOTO: "https://cdn.sofifa.com/flags/es.png",
         PLAYER_GOALKEEPING: 45,
         PLAYER_HEADING_ACCURACY: 54,
         PLAYER_HEIGHT: "5'7\"",
         PLAYER_ID: 42,
         PLAYER_INTERCEPTIONS: 70,
         PLAYER_JOINED: "Jul 16, 2018",
         PLAYER_JUMPING: 40,
         PLAYER_LONG_PASSING: 83,
         PLAYER_LONG_SHOTS: 70,
         PLAYER_MARKING: 68,
         PLAYER_MENTALITY: 370,
         PLAYER_MOVEMENT: 346,
         PLAYER_NAME: "Iniesta",
         PLAYER_NATIONALITY: "Spain",
         PLAYER_OVERALL_SCORE: 81,
         PLAYER_PENALTIES: 71,
         PLAYER_PHOTO: "https://cdn.sofifa.com/players/000/041/20_120.png",
         PLAYER_POSITIONING: 78,
         PLAYER_POWER: 297,
         PLAYER_REACTIONS: 75,
         PLAYER_SHORT_PASSING: 90,
         PLAYER_SHOT_POWER: 67,
         PLAYER_SKILLS: 408,
         PLAYER_SLIDING_TACKLE: 56,
         PLAYER_SPRINT_SPEED: 56,
         PLAYER_STAMINA: 58,
         PLAYER_STANDLING_TACKLE: 57,
         PLAYER_STRENGTH: 62,
         PLAYER_TEAM_HISTORY: "Vissel Kobe 2018 ~ 2021",
         PLAYER_VALUE: "5.5M",
         PLAYER_VISION: 93,
         PLAYER_VOLLEYS: 79,
         PLAYER_WAGE: "12K",
         PLAYER_WEIGHT: "150lbs"},
         {
            PLAYER_ACCELERATION: 61,
            PLAYER_ACCURACY_FK: 70,
            PLAYER_AGE: 36,
            PLAYER_AGGRESSION: 58,
            PLAYER_AGILITY: 79,
            PLAYER_ATTACKING: 367,
            PLAYER_BALANCE: 75,
            PLAYER_BALL_CONTROL: 90,
            PLAYER_CLUB: "Vissel Kobe",
            PLAYER_CLUB_PHOTO: "https://cdn.sofifa.com/teams/101146/light_60.png",
            PLAYER_COMPOSURE: 89,
            PLAYER_CONTRACT: "2018 ~ 2021",
            PLAYER_CROSSING: 75,
            PLAYER_CURVE: 80,
            PLAYER_DEFENDING: 181,
            PLAYER_DRIBBLING: 85,
            PLAYER_FINISH: 69,
            PLAYER_FLAG_PHOTO: "https://cdn.sofifa.com/flags/es.png",
            PLAYER_GOALKEEPING: 45,
            PLAYER_HEADING_ACCURACY: 54,
            PLAYER_HEIGHT: "5'7\"",
            PLAYER_ID: 43,
            PLAYER_INTERCEPTIONS: 70,
            PLAYER_JOINED: "Jul 16, 2018",
            PLAYER_JUMPING: 40,
            PLAYER_LONG_PASSING: 83,
            PLAYER_LONG_SHOTS: 70,
            PLAYER_MARKING: 68,
            PLAYER_MENTALITY: 370,
            PLAYER_MOVEMENT: 346,
            PLAYER_NAME: "Iniesta",
            PLAYER_NATIONALITY: "Spain",
            PLAYER_OVERALL_SCORE: 81,
            PLAYER_PENALTIES: 71,
            PLAYER_PHOTO: "https://cdn.sofifa.com/players/000/041/20_120.png",
            PLAYER_POSITIONING: 78,
            PLAYER_POWER: 297,
            PLAYER_REACTIONS: 75,
            PLAYER_SHORT_PASSING: 90,
            PLAYER_SHOT_POWER: 67,
            PLAYER_SKILLS: 408,
            PLAYER_SLIDING_TACKLE: 56,
            PLAYER_SPRINT_SPEED: 56,
            PLAYER_STAMINA: 58,
            PLAYER_STANDLING_TACKLE: 57,
            PLAYER_STRENGTH: 62,
            PLAYER_TEAM_HISTORY: "Vissel Kobe 2018 ~ 2021",
            PLAYER_VALUE: "5.5M",
            PLAYER_VISION: 93,
            PLAYER_VOLLEYS: 79,
            PLAYER_WAGE: "12K",
            PLAYER_WEIGHT: "150lbs"},{
         PLAYER_ACCELERATION: 61,
         PLAYER_ACCURACY_FK: 70,
         PLAYER_AGE: 36,
         PLAYER_AGGRESSION: 58,
         PLAYER_AGILITY: 79,
         PLAYER_ATTACKING: 367,
         PLAYER_BALANCE: 75,
         PLAYER_BALL_CONTROL: 90,
         PLAYER_CLUB: "Vissel Kobe",
         PLAYER_CLUB_PHOTO: "https://cdn.sofifa.com/teams/101146/light_60.png",
         PLAYER_COMPOSURE: 89,
         PLAYER_CONTRACT: "2018 ~ 2021",
         PLAYER_CROSSING: 75,
         PLAYER_CURVE: 80,
         PLAYER_DEFENDING: 181,
         PLAYER_DRIBBLING: 85,
         PLAYER_FINISH: 69,
         PLAYER_FLAG_PHOTO: "https://cdn.sofifa.com/flags/es.png",
         PLAYER_GOALKEEPING: 45,
         PLAYER_HEADING_ACCURACY: 54,
         PLAYER_HEIGHT: "5'7\"",
         PLAYER_ID: 41,
         PLAYER_INTERCEPTIONS: 70,
         PLAYER_JOINED: "Jul 16, 2018",
         PLAYER_JUMPING: 40,
         PLAYER_LONG_PASSING: 83,
         PLAYER_LONG_SHOTS: 70,
         PLAYER_MARKING: 68,
         PLAYER_MENTALITY: 370,
         PLAYER_MOVEMENT: 346,
         PLAYER_NAME: "Iniesta",
         PLAYER_NATIONALITY: "Spain",
         PLAYER_OVERALL_SCORE: 81,
         PLAYER_PENALTIES: 71,
         PLAYER_PHOTO: "https://cdn.sofifa.com/players/000/041/20_120.png",
         PLAYER_POSITIONING: 78,
         PLAYER_POWER: 297,
         PLAYER_REACTIONS: 75,
         PLAYER_SHORT_PASSING: 90,
         PLAYER_SHOT_POWER: 67,
         PLAYER_SKILLS: 408,
         PLAYER_SLIDING_TACKLE: 56,
         PLAYER_SPRINT_SPEED: 56,
         PLAYER_STAMINA: 58,
         PLAYER_STANDLING_TACKLE: 57,
         PLAYER_STRENGTH: 62,
         PLAYER_TEAM_HISTORY: "Vissel Kobe 2018 ~ 2021",
         PLAYER_VALUE: "5.5M",
         PLAYER_VISION: 93,
         PLAYER_VOLLEYS: 79,
         PLAYER_WAGE: "12K",
         PLAYER_WEIGHT: "150lbs"}
      ])
      setIsLoading(false)
      // const getPlayers = async () => {
      //    const res = await fetch('http://localhost:8000/players')
      //    const resData = await res.json()

      //    setPlayers(resData)
      // }
      // getPlayers().then(() => setIsLoading(false))
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

   const onUpdate = (state: any) => {
      setModal({player: state, isOpen: true});
   }

   const onChangePlayers = (e: React.FormEvent<HTMLFormElement>, updatedPlayer: any) => {
      e.preventDefault();
      setModal({player: null, isOpen: false});

      const index = players.findIndex((el: any) => el.PLAYER_ID === updatedPlayer.PLAYER_ID)
      setPlayers([...players.slice(0, index), updatedPlayer, ...players.slice(index + 1, players.length)])
   }

   return (
      <div className="app">
         <div className="app-container">
            <SearchBar onSearch={searchPlayer} />
            {isLoading ? (
               <p>Loading...</p>
            ) : (
               <Table data={players} onDelete={onDelete} onUpdate={onUpdate} />
            )}
            { isOpen ? (
               <Modal player={player} onChangePlayers={onChangePlayers} />
            ) : (
               null
            ) 
            }  
         </div>
      </div>
   )
}

export { App }