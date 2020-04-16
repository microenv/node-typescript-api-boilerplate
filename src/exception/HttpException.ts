class HttpException extends Error {
  public status: number;
  public errorCode: string;
  public errorMessage: string;
  public internalCode?: string;

  constructor(status: number, errorCode: string, errorMessage?: string, internalCode?: string) {
    super(errorMessage);
    this.status = status;
    if (errorMessage === undefined && internalCode === undefined) {
      this.errorCode = 'ERROR';
      this.errorMessage = errorCode;
    } else {
      this.errorCode = errorCode;
      this.errorMessage = errorMessage;
      this.internalCode = internalCode;
    }
  }
}

export default HttpException;
