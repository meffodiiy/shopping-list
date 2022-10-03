import { DataTypes } from 'sequelize'
import db from '../orm'


const Item = db.define('Item', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false
  },
  listId: {
    type: DataTypes.UUID,
    allowNull: false,
    field: 'list_id'
  },
  index: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  text: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  tableName: 'items',
  timestamps: false
})


export default Item
