import HttpException from './HttpException';

export default class ConflictException extends HttpException {
  constructor(errorMessage?: string) {
    super(
      409,
      'CONFLICT',
      errorMessage || 'Este payload causou conflito com dados já existentes.',
    );
  }
}
