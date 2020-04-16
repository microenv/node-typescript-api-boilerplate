import HttpException from './HttpException';

export default class H400Exception extends HttpException {
  constructor(errorMessage?: string, internalCode?: string) {
    super(
      400,
      'BAD_REQUEST',
      errorMessage,
      internalCode,
    );
  }
}
