import { Injectable } from '@angular/core';
import { IError } from '../contracts/IError';
import { Subject } from 'rxjs';
import { IErrorHandler } from '../contracts/IErrorHandler';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandler implements IErrorHandler<IError>
{
  public error$ = new Subject<IError>;

  public Handle( error: IError)
  {
    this.error$.next(error);
  }
}
