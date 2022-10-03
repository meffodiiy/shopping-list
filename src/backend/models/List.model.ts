import { DataTypes, Model } from 'sequelize'
import db from '../orm'
import Item from './Item.model'
import { TListWithoutItems } from '../types'


const List = db.define<Model<TListWithoutItems>>('List', {
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
