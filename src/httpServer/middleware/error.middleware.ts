import { NextFunction, Request, Response } from 'express';
import HttpException from 'exception/HttpException';

/**
 * Transforma uma exception em um objeto json para sempre retornar json como response
 */
function errorMiddleware(error: HttpException, req: Request, res: Response, next: NextFunction) {
  const status: number = error.status || 500;
  const errorCode: string = error.errorCode || 'UNKNOWN_ERROR';
  const errorMessage: string = error.errorMessage || error.message || 'Alguma coisa deu errado';

  // console.error('[ERROR] ', status, errorCode, errorMessage);

  const debug: any = {};

  if (error.stack) {
    debug.stack = error.stack;
  }

  res.status(status).json({
    status,
    errorCode,
    errorMessage,
    _debug: debug,
  });
}

export default errorMiddleware;
