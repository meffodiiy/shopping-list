import { Router } from 'express'
import {
  createList,
  getList,
  getAllLists,
  updateList,
  deleteList
} from '../controllers/list.controller'


const router = Router()


router.post('/', createList)
router.get('/:id', getList)
router.get('/', getAllLists)
router.patch('/:id', updateList)
router.delete('/:id', deleteList)


export default router
