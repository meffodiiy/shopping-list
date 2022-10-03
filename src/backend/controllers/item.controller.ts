import { Request, Response } from 'express'
import { TItem, TItemWithoutId } from '../types'


type TItemId = Pick<TItem, 'id'>


export const createItem = (req: Request<{ listId: string }, never, TItemWithoutId>, res: Response) => {
  return res.sendStatus(200)
}

export const updateItem = (req: Request<TItemId, never, Partial<TItemWithoutId>>, res: Response) => {
  return res.sendStatus(200)
}

export const deleteItem = (req: Request<TItemId>, res: Response) => {
  return res.sendStatus(200)
}
