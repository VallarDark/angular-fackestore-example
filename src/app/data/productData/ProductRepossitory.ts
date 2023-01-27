import { IRepository } from '../../contracts/IRepository';
import { IProduct } from '../../contracts/IProduct';

export class ProductRepository implements IRepository
{
    async GetById(id: number) 
    {
        return await fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json() as unknown as IProduct);
    }

    async GetAll(pageNumber: number, countPerPage: number) 
    {
        pageNumber = pageNumber < 1 ? 1 : pageNumber;

        let limit = pageNumber * countPerPage;

        let startIndex = (pageNumber - 1)  * countPerPage;

        let data = await fetch(`https://fakestoreapi.com/products?limit=${limit}`)
        .then(res=>res.json() as unknown as IProduct[]);

        return data.slice(startIndex);      
    }
}