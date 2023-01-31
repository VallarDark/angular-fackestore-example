import { Component, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { IError } from 'src/app/contracts/IError';
import { IErrorHandler } from 'src/app/contracts/IErrorHandler';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent {
  @Input() title:string='';

  private _errorHandler:IErrorHandler<IError>

  public get error$(): Subject<IError>{
    return this._errorHandler.error$;
  }

  constructor(errorHandler:IErrorHandler<IError>) {
    this._errorHandler = errorHandler;
  }
}
