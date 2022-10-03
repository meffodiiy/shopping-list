import { Request, Response } from 'express'
import { TList } from '../types'


type TListId = Pick<TList, 'id'>
type TListTitle = Pick<TList, 'title'>


export const createList = (req: Request<never, never, TListTitle>, res: Response<TListId>) => {
  return res.sendStatus(200)
}

export const getList = (req: Request<TListId>, res: Response<TList>) => {
  return res.sendStatus(200)
}

export const getAllLists = (req: Request, res: Response<Array<TList>>) => {
  return res.sendStatus(200)
}

export const updateList = (req: Request<TListId, never, TListTitle>, res: Response) => {
  return res.sendStatus(200)
}

export const deleteList = (req: Request<TListId>, res: Response) => {
  return res.sendStatus(200)
}
