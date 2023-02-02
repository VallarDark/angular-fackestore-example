import { Component, Input, OnInit } from '@angular/core';
import { IError } from 'src/app/contracts/IError';
import { Error } from 'src/app/models/Error';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent {

  @Input() error: IError = new Error();

  private readonly _errorService: ErrorService;

  constructor(errorService: ErrorService) {
    this._errorService = errorService;
  }

  public close() {
    console.log('rem')
    this._errorService.Remove(this.error.Id)
  }
}
