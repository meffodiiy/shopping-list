import { DataTypes } from 'sequelize'
import db from '../orm'
import Item from './Item.model'


const List = db.define('List', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false
  },
  title: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  tableName: 'lists',
  timestamps: false
})

List.hasMany(Item, {
  as: 'items',
  foreignKey: 'listId'
})


export default List
