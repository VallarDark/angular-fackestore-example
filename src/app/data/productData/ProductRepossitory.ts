import { IRepository } from '../../contracts/IRepository';
import { IProduct } from '../../contracts/IProduct';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, firstValueFrom, throwError } from 'rxjs';
import { IErrorHandler } from 'src/app/contracts/IErrorHandler';
import { IError } from 'src/app/contracts/IError';
import { Error } from 'src/app/models/Error';


@Injectable()
export class ProductRepository implements IRepository<IProduct>
{
    private readonly _client: HttpClient;
    private readonly _errorHandler: IErrorHandler<IError>;

    constructor(client: HttpClient, errorHandler: IErrorHandler<IError>) {
        this._client = client;
        this._errorHandler = errorHandler;
    }

    public async GetById(id: number) {
        let data = this._client
            .get<IProduct>(`https://fakestoreapi.com/products/${id}`)
            .pipe(catchError(this.handleError.bind(this)));

        return await firstValueFrom(data);
    }

    public async GetAll(pageNumber: number, countPerPage: number) {
        pageNumber = pageNumber < 1 ? 1 : pageNumber;

        let limit = pageNumber * countPerPage;

        let startIndex = (pageNumber - 1) * countPerPage;

        let queryParams = new HttpParams();

        queryParams = queryParams.append('limit', limit);

        let data = this._client.get<IProduct[]>(
            `https://fakestoreapi.com/products`,
            { params: queryParams })
            .pipe(catchError(this.handleError.bind(this)));

        return (await firstValueFrom(data)).slice(startIndex);
    }

    private handleError(error: HttpErrorResponse) {
        this._errorHandler.Handle(new Error(error.status, error.message));
        return throwError(() => error.message);
    }
}