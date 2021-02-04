import { Router, Request, Response } from 'express'

export default Router()
  .get('/hello', (req: Request, res: Response) => res.send({ hello: 'world'}))
