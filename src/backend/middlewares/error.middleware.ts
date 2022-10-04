import { NextFunction, Request, Response } from 'express'


export class HTTPError extends Error {
  status: number
  error: string

  constructor (status: number, error: unknown) {
    const errorMessage = String(error)
    super(errorMessage)
    this.status = status
    this.error = errorMessage
  }
}

const errorMiddleware = (httpError: HTTPError, req: Request, res: Response, next: NextFunction) => {
  const { status, error } = httpError
  res.status(status).json({ error })
  next()
}


export default errorMiddleware
