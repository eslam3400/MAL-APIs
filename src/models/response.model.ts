export interface IResult<T> {
  data?: T;
  pagination?: IPaginationResponse
  error?: string;
  message?: string;
}

export interface IPaginationResponse {
  total_records: number;
  current_page: number;
  total_pages: number;
  next_page: number | null;
  prev_page: number | null;
}

export class Result<T> implements IResult<T> {
  data?: T;
  pagination?: IPaginationResponse | undefined;
  error?: string | undefined;
  message?: string | undefined;
}