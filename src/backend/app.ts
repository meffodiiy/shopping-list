import path from 'path'
import * as fs from 'fs'
import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import { ListRouter, ItemRouter } from './routes'
import { testDBConnection } from './orm'
import { errorMiddleware } from './middlewares'


const PORT = 2911
const STATIC_DIR = path.resolve(__dirname, '../../dist/frontend')


const app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(STATIC_DIR))

app.use('/list', ListRouter)
app.use('/item', ItemRouter)

app.get(['/', '/:id', '/:id/edit'], (req: Request, res: Response) => {
  const indexHTML = path.resolve(STATIC_DIR, 'index.html')
  if (!fs.existsSync(indexHTML))
    return res.sendStatus(404)
  res.sendFile(indexHTML)
})

app.use(errorMiddleware)


testDBConnection()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App is listening on port ${PORT}`)
    })
  })
  .catch(console.error)
