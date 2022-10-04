import { Request, Response, NextFunction } from 'express'
import { TItem, TItemWithoutId } from '../types'
import { HTTPError } from '../middlewares/error.middleware'
import { Item } from '../models'
import { v4 } from 'uuid'


type TItemId = Pick<TItem, 'id'>


export const createItem = async (req: Request<{ listId: string }, never, TItemWithoutId>, res: Response, next: NextFunction) => {
  try {
    const id = v4()
    await Item.create({
      id,
      ...req.params,
      ...req.body
    })
    return res.sendStatus(200)
  } catch (error) {
    next(new HTTPError(500, error))
  }
}

export const updateItem = async (req: Request<TItemId, never, Partial<TItemWithoutId>>, res: Response, next: NextFunction) => {
  try {
    await Item.update(req.body, {
      where: req.params
    })
    return res.sendStatus(200)
  } catch (error) {
    next(new HTTPError(500, error))
  }
}

export const deleteItem = async (req: Request<TItemId>, res: Response, next: NextFunction) => {
  try {
    await Item.destroy({
      where: req.params
    })
    return res.sendStatus(200)
  } catch (error) {
    next(new HTTPError(500, error))
  }
}
