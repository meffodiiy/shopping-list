import { Sequelize } from 'sequelize'


require('dotenv').config({ path: './.env' })
const { PASSWORD } = process.env


const db = new Sequelize(`postgresql://postgres:${PASSWORD}@localhost:5432/shoppinglist`, {
  logging: false
})
export default db


export const testDBConnection = async () => {
  try {
    await db.authenticate()
    console.log('Connection to database has been established successfully!')
  } catch (error) {
    throw new Error(`Unable to connect to the database: ${error}`)
  }

  try {
    await db.sync()
    console.log('All models have been synchronized successfully!')
  } catch (error) {
    throw new Error(`Failed to synchronize models: ${error}`)
  }
}
