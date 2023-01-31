import { Subject } from "rxjs";
import { IError } from "./IError";

export abstract class IErrorHandler<T extends IError> 
{
    abstract Handle(error:T): void;
    abstract error$: Subject<IError>;
}