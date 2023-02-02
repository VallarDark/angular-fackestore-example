import { Injectable } from '@angular/core';
import { IError } from '../contracts/IError';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  private readonly _errors: IError[] = [];
  private _errors$ = new Subject<IError[]>;

  public get errors$(){
    return this._errors$;
  }

  public Add(error: IError) {
    this._errors.push(error);
    this._errors$.next(this._errors);
  }

  public Remove(id: string) {
    let index = this._errors.findIndex(e => e.Id == id);

    if (index == -1) {
      return;
    }

    this._errors.splice(index, 1);
    this._errors$.next(this._errors);
  }
}
