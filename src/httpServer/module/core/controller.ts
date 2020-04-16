import { Request, Response, NextFunction } from 'express';

export function getIndex(req: Request, res: Response, next: NextFunction) {
  try {
    res.json({
      status: 'OK',
    });
  } catch (error) {
    next(error);
  }
}
