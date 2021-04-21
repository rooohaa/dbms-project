import express from 'express'
import oracledb from 'oracledb'
import cors from 'cors'

import { dbConfig } from './dbConfig.js'

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT
const PORT = 8000 || process.env.PORT

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

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
   const result = await connection.execute(
      'SELECT * FROM DATASETFINAL WHERE ROWNUM <= 30'
   )

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

app.put('/players/:id', async (req, res) => {
   const id = req.params.id
   const updatedPlayer = req.body

   console.log(id, updatedPlayer)
})

app.delete('/players/:id', async (req, res) => {
   const id = req.params.id

   await connection.execute(`DELETE FROM DATASETFINAL WHERE PLAYER_ID=${id}`)
})

app.listen(PORT, () => {
   console.log(`Server is running on PORT ${PORT}`)
})
