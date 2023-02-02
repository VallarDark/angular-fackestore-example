import { Injectable } from "@angular/core";
import { IError } from "./IError";

@Injectable({
    providedIn: 'root'
  })
export abstract class IErrorHandler<T extends IError>
{
    abstract Handle(error: T): void;
}