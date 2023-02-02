export abstract class IRepository<T>
{
    abstract GetById(id: number): Promise<T>;
    abstract GetAll(pageNumber: number, countPerPage: number): Promise<T[]>;
}