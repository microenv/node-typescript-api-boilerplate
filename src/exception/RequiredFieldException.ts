import H400Exception from './H400Exception';

export default class RequiredFieldException extends H400Exception {
  constructor(fieldName: string, internalCode?: string) {
    super(
      `O campo "${fieldName}" é obrigatório`,
      internalCode,
    );
  }
}
