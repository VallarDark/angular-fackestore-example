import { Injectable } from '@angular/core';
import { IError } from '../contracts/IError';
import { IErrorHandler } from '../contracts/IErrorHandler';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class UserShownErrorHandler implements IErrorHandler<IError>
{
  private readonly _errorService: ErrorService;

  constructor(errorService: ErrorService) {
    this._errorService = errorService;
  }

  public Handle(error: IError) {
    console.log(error.Message);
    this._errorService.Add(error);
  }
}
