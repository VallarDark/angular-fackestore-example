import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/contracts/IProduct';

@Component({
  selector: 'app-product',
  templateUrl: './app-product.component.html',
  styleUrls: ['./app-product.component.scss']
})

export class AppProduct implements IProduct
{
  
  showDetails = false;
    
  @Input() id: number = 0;
  @Input() price: number = 0;
  @Input() description: string = '';
  @Input() category: string = '';
  @Input() image: string = '';
  @Input() rating!: { rate: number; count: number; };
  @Input() title ='';
}