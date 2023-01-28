import { IRepository } from '../../contracts/IRepository';
import { IProduct } from '../../contracts/IProduct';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';


@Injectable()
export class ProductRepository implements IRepository<IProduct>
{
    private _client: HttpClient;

    constructor(client: HttpClient) {
        this._client = client;
    }

    public async GetById(id: number)
    {
        let data = this._client
            .get<IProduct>(`https://fakestoreapi.com/products/${id}`);    

        return await firstValueFrom(data);
    }

    public async GetAll(pageNumber: number, countPerPage: number) 
    {
        pageNumber = pageNumber < 1 ? 1 : pageNumber;

        let limit = pageNumber * countPerPage;

        let startIndex = (pageNumber - 1)  * countPerPage;

        let queryParams = new HttpParams();

        queryParams = queryParams.append('limit', limit);

        let data = this._client.get<IProduct[]>(
            `https://fakestoreapi.com/products`,
            { params: queryParams})
        
        return (await firstValueFrom(data)).slice(startIndex);
    }
}