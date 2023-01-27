export interface IRepository{
    GetById(id:number):any,
    GetAll(pageNumber:number, countPerPage: number):any
}