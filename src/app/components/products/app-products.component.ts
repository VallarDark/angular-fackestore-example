import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/contracts/IProduct';
import { IRepository } from 'src/app/contracts/IRepository';

@Component({
  selector: 'app-products',
  templateUrl: './app-products.component.html',
  styleUrls: ['./app-products.component.scss']
})

export class AppProducts implements OnInit{

  private readonly itemsPerPage = 6;
  private readonly _repository:IRepository<IProduct>;
  private _products: IProduct[] = [];
  private _page = 1;

  public get Page():number
  {
    return this._page;
  }

  constructor(private repository:IRepository<IProduct>) 
  {
    this._repository = repository;
  }

  public get Products(): IProduct[] 
  {
    return this._products;
  }

  public async moveNextPage()
  {
    if(this._products.length < this.itemsPerPage)
    {
      return;
    }

    this._page++;
    await this.updateProducts();
  }

  public async movePpreviousPage()
  {
    if(this._page == 1)
    {
      return;
    }

    this._page--;
    await this.updateProducts();
  }

  public async ngOnInit() {
    await this.updateProducts();
  }

  private async updateProducts()
  {
    this._products = await this.repository.GetAll(this._page, this.itemsPerPage);
  }
}
