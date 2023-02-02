import { Component, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { IError } from 'src/app/contracts/IError';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent {
  @Input() name: string = '';

  private _errorService: ErrorService

  public get errors$(): Subject<IError[]> {
    return this._errorService.errors$;
  }

  constructor(private errorService: ErrorService) {
    this._errorService = errorService;
  }
}
