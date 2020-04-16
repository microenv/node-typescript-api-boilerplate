import HttpException from './HttpException';

export default class UnauthorizedException extends HttpException {
  constructor(errorMessage?: string, internalCode?: string) {
    super(
      403,
      'UNAUTHORIZED',
      errorMessage || 'Você não tem autorização para acessar este recurso',
      internalCode,
    );
  }
}
