import path from 'path'
import * as fs from 'fs'
import express from 'express'
import bodyParser from 'body-parser'
import { ListRouter, ItemRouter } from './routes'


const PORT = 2911
const STATIC_DIR = path.resolve(__dirname, '../../dist/frontend')


const app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(STATIC_DIR))

app.get('/', (req, res) => {
  const indexHTML = 'index.html'
  if (!fs.existsSync(`${STATIC_DIR}/${indexHTML}`))
    return res.sendStatus(404)
  res.sendFile(indexHTML)
})

app.use('/list', ListRouter)
app.use('/item', ItemRouter)


app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`)
})
