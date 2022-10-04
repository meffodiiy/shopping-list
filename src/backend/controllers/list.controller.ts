import { Request, Response, NextFunction } from 'express'
import { TList } from '../types'
import { v4 } from 'uuid'
import { Item, List } from '../models'
import { HTTPError } from '../middlewares/error.middleware'


type TListId = Pick<TList, 'id'>
type TListTitle = Pick<TList, 'title'>


const include = {
  model: Item,
  as: 'items'
}


export const createList = async (req: Request<never, never, TListTitle>, res: Response<TListId>, next: NextFunction) => {
  try {
    const id = v4()
    const { title } = req.body
    const listCount = await List.count({
      where: {
        title
      }
    })
    if (listCount > 0)
      return next(new HTTPError(409, 'List with given title already exists.'))
    await List.create({ id, ...req.body })
    res.status(200).json({ id })
  } catch (error) {
    next(new HTTPError(500, error))
  }
}

export const getList = async (req: Request<TListId>, res: Response<TList>, next: NextFunction) => {
  try {
    const list = await List.findOne({
      where: req.params,
      include
    })
    if (!list)
      return next(new HTTPError(404, 'List by given id not found.'))
    res.status(200).json(list.toJSON<TList>())
  } catch (error) {
    next(new HTTPError(500, error))
  }
}

export const getAllLists = async (req: Request, res: Response<Array<TList>>, next: NextFunction) => {
  try {
    const lists = await List.findAll({
      include
    })
    res.status(200).json(lists.map(list => list.toJSON<TList>()))
  } catch (error) {
    next(new HTTPError(500, error))
  }
}

export const updateList = async (req: Request<TListId, never, TListTitle>, res: Response, next: NextFunction) => {
  try {
    const { title } = req.body
    const listCount = await List.count({
      where: {
        title
      }
    })
    if (listCount > 0)
      return next(new HTTPError(409, 'List with given title already exists.'))
    await List.update(req.body, {
      where: req.params
    })
    res.sendStatus(200)
  } catch (error) {
    next(new HTTPError(500, error))
  }
}

export const deleteList = async (req: Request<TListId>, res: Response, next: NextFunction) => {
  try {
    await List.destroy({
      where: req.params
    })
    res.sendStatus(200)
  } catch (error) {
    next(new HTTPError(500, error))
  }
}
