import { IError } from "../contracts/IError";
import { Guid } from 'guid-ts';


export class Error implements IError
{
    Id: string;
    ErrorCode: number;
    Message: string;

    constructor (errorCode: number, message: string = 'Error') 
    {
        this.Id = Guid.newGuid().toString();
        this.ErrorCode = errorCode;
        this.Message = message;
    }
}