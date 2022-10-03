import { Router } from 'express'
import {
  createItem,
  updateItem,
  deleteItem
} from '../controllers/item.controller'


const router = Router()


router.post('/:listId', createItem)
router.patch('/:id', updateItem)
router.delete('/:id', deleteItem)


export default router
