import ErrorEnum from "../enums/error.enum";

export class APIError extends Error {
  status: number;

  constructor(error: ErrorEnum, message: string = "") {
    super();
    this.status = error;
    this.message = message;
    switch (error) {
      case ErrorEnum.BadRequest:
        this.name = "Bad request";
        break;
      case ErrorEnum.Forbidden:
        this.name = "Forbidden";
        break;
      case ErrorEnum.NotAuthorized:
        this.name = "Not authorized";
        break;
      case ErrorEnum.NotFound:
        this.name = "Not found";
        break;
    }
    if (this.message.length === 0) this.message = this.name;
  }
}