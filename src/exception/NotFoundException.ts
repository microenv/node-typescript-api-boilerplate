import HttpException from './HttpException';

export default class NotFoundException extends HttpException {
  constructor(errorCode?: string, errorMessage?: string, internalCode?: string) {
    super(
      404,
      errorCode || 'NOT_FOUND',
      errorMessage || 'Recurso não encontrado',
      internalCode,
    );
  }
}
