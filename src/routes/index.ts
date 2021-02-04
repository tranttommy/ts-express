import { Router, Request, Response, NextFunction} from 'express'

export default Router()
  .get('/hello', (req: Request, res: Response) => res.send({ hello: 'world'}))
