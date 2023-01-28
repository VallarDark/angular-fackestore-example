import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/contracts/IProduct';
import { EmptyProduct } from 'src/app/models/EmptyProduct';

@Component({
  selector: 'app-product',
  templateUrl: './app-product.component.html',
  styleUrls: ['./app-product.component.scss']
})

export class AppProduct 
{
  @Input() product:IProduct = new EmptyProduct();

  showDetails = false;
  titleIsHover = false;
}