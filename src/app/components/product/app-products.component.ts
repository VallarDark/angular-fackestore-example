import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/contracts/IProduct';
import { ProductRepository } from '../../data/productData/ProductRepossitory';

@Component({
  selector: 'app-products',
  templateUrl: './app-products.component.html',
  styleUrls: ['./app-products.component.scss']
})

export class AppProducts implements OnInit{

  private readonly itemsPerPage = 6;
  private readonly repository = new ProductRepository();
  private _products: IProduct[] = [];
  private page = 1;

  public get Products(): IProduct[] {
    return this._products;
  }
  private set Products(value: IProduct[]) {
    this._products = value;
  }

  async moveNextPage(){
      this.page++;
      this._products = await this.repository.GetAll(this.page, this.itemsPerPage);
  }

  async movePpreviousPage(){
    this.page--;
    this._products = await this.repository.GetAll(this.page, this.itemsPerPage);
  }

  async ngOnInit() {
    this._products = await this.repository.GetAll(this.page, this.itemsPerPage);
  }
}
