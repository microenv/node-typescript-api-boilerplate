import HttpException from './HttpException';

export default class H500Exception extends HttpException {
  constructor(errorMessage?: string, internalCode?: string) {
    super(
      500,
      'SERVER_ERROR',
      errorMessage,
      internalCode,
    );
  }
}
