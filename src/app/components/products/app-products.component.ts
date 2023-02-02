import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/contracts/IProduct';
import { IRepository } from 'src/app/contracts/IRepository';

@Component({
  selector: 'app-products',
  templateUrl: './app-products.component.html',
  styleUrls: ['./app-products.component.scss']
})

export class AppProducts implements OnInit {
  private readonly _repository: IRepository<IProduct>;
  private _products: IProduct[] = [];
  private _page = 1;

  public searchPhrase: string = '';

  @Input() columns: number = 3;
  @Input() rows: number = 2;
  @Input() header: string = 'Products';

  public get isLastPage(): boolean {
    return this._products.length < this.GetPageCount();
  }

  public get isFirstPage(): boolean {
    return this._page == 1;
  }

  public get Page(): number {
    return this._page;
  }

  constructor(private repository: IRepository<IProduct>) {
    this._repository = repository;
  }

  public get Products(): IProduct[] {
    if (this.searchPhrase.length == 0) {
      return this._products;
    }

    // It's locale page search. Fakestore api can't receive products by filters..

    let normalizedSearchPhrase = this.searchPhrase.toLocaleLowerCase();

    return this._products.filter(p => p.title.toLocaleLowerCase().includes(normalizedSearchPhrase)
      || p.description.toLocaleLowerCase().includes(normalizedSearchPhrase));
  }

  public async moveNextPage() {
    if (this._products.length < this.GetPageCount()) {
      return;
    }

    this._page++;
    await this.updateProducts();
  }

  public async movePpreviousPage() {
    if (this._page == 1) {
      return;
    }

    this._page--;
    await this.updateProducts();
  }

  public async ngOnInit() {
    await this.updateProducts();
  }

  private async updateProducts() {
    this._products = await this.repository.GetAll(this._page, this.GetPageCount());
  }

  private GetPageCount(): number {
    return this.columns * this.rows;
  }
}
