import { Component, Input, TRANSLATIONS } from '@angular/core';

@Component({
  selector: 'app-popup-window',
  templateUrl: './popup-window.component.html',
  styleUrls: ['./popup-window.component.scss']
})

export class PopupWindowComponent {
 
  private _isShown:boolean = false;
  
  public get isShown(): boolean {
    return this._isShown;
  }

  @Input() public title: string = '';

  public close() 
  {
    this._isShown= false;
  }
}