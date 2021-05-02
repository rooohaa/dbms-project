import express from 'express'
import oracledb from 'oracledb'
import cors from 'cors'

import { dbConfig } from './dbConfig.js'

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT
oracledb.autoCommit = true
const PORT = 8000 || process.env.PORT

const app = express()

const logger = (req, res, next) => {
   console.log(`${req.method} : ${req.url}`)
   next()
}

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.use(logger)

let connection

async function start() {
   try {
      connection = await oracledb.getConnection(dbConfig)
   } catch (err) {
      console.error(err)
   }
}

await start()

app.get('/players', async (req, res) => {
   const result = await connection.execute('SELECT * FROM DATASETFINAL')

   const playerName = req.query.keyword

   if (playerName) {
      const searched = await connection.execute(
         `SELECT * FROM DATASETFINAL WHERE PLAYER_NAME LIKE '%${playerName}%'`
      )
      res.json(searched.rows)
   } else {
      res.json(result.rows)
   }
})

app.get('/players/sort', async (req, res) => {
   const players = await connection.execute('SELECT * FROM DATASETFINAL')
   const sortParam = req.query.keyword

   let result

   if (sortParam) {
      switch (sortParam) {
         case 'age':
            result = await connection.execute(
               'SELECT * FROM DATASETFINAL ORDER BY PLAYER_AGE DESC'
            )
            res.json(result.rows)
            break
         case 'ova':
            result = await connection.execute(
               'SELECT * FROM DATASETFINAL ORDER BY PLAYER_OVERALL_SCORE DESC'
            )
            res.json(result.rows)
            break
         case 'pot':
            result = await connection.execute(
               'SELECT * FROM DATASETFINAL ORDER BY PLAYER_PHYSICS_OVERALL DESC'
            )
            res.json(result.rows)
            break
         case 'value':
            result = await connection.execute(
               'SELECT * FROM DATASETFINAL ORDER BY PLAYER_VALUE DESC'
            )
            res.json(result.rows)
            break
      }
   } else {
      res.json(players.rows)
   }
})

app.get('/top-players', async (req, res) => {
   const result = await connection.execute('SELECT * FROM RECOMMENDATION_TABLE')
   res.json(result.rows)
})

app.post('/players', async (req, res) => {
   const {
      PLAYER_ID,
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
   } = req.body

   await connection.execute(
      `BEGIN
         insert_package.insert_procedure(:PLAYER_ID, :PLAYER_NAME, :PLAYER_AGE, :PLAYER_NATIONALITY, :PLAYER_CLUB, :PLAYER_CONTRACT, :PLAYER_JOINED, :PLAYER_VALUE, :PLAYER_WAGE, :PLAYER_ATTACKING, :PLAYER_SKILLS, :PLAYER_ACCELERATION, :PLAYER_POWER, :PLAYER_STRENGTH);
      END;`,
      {
         PLAYER_ID,
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
      }
   )

   const data = await connection.execute(
      `SELECT * FROM DATASETFINAL WHERE PLAYER_ID = ${PLAYER_ID}`
   )
   res.json(data.rows)
})

app.put('/players/:id', async (req, res) => {
   const {
      PLAYER_ID,
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
   } = req.body

   await connection.execute(
      `BEGIN
         update_package.update_procedure(:PLAYER_ID, :PLAYER_NAME, :PLAYER_AGE, :PLAYER_NATIONALITY, :PLAYER_CLUB, :PLAYER_CONTRACT, :PLAYER_JOINED, :PLAYER_VALUE, :PLAYER_WAGE, :PLAYER_ATTACKING, :PLAYER_SKILLS, :PLAYER_ACCELERATION, :PLAYER_POWER, :PLAYER_STRENGTH);
      END;`,
      {
         PLAYER_ID,
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
      }
   )

   const data = await connection.execute(
      `SELECT * FROM DATASETFINAL WHERE PLAYER_ID = ${PLAYER_ID}`
   )
   res.json(data.rows)
})

app.delete('/players/:id', async (req, res) => {
   const id = req.params.id

   await connection.execute(
      `BEGIN
         delete_package.delete_procedure(:id);
      END;`,
      {
         id,
      }
   )

   res.json({ message: 'Succesfully deleted' })
})

app.listen(PORT, () => {
   console.log(`Server is running on PORT ${PORT}`)
})
