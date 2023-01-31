import { Component, Input } from '@angular/core';
import { IError } from 'src/app/contracts/IError';
import { Error } from 'src/app/models/Error';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent 
{
  @Input() ErrorCode: number = 0;
  @Input() Message: string = "";

  public Error: IError = new Error(this.ErrorCode, this.Message);
}
