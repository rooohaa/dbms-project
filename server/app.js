import express from 'express'
import oracledb from 'oracledb'
import cors from 'cors'

import { dbConfig } from './dbConfig.js'

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT
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
   const result = await connection.execute(
      'SELECT * FROM DATASETFINAL WHERE ROWNUM <= 100'
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

app.post('/players', async (req, res) => {
   console.log(req.body)
})

app.put('/players/:id', async (req, res) => {
   const id = req.params.id
   const updatedPlayer = req.body

   console.log(id, updatedPlayer)
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
})

app.listen(PORT, () => {
   console.log(`Server is running on PORT ${PORT}`)
})
