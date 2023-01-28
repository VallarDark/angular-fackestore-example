import{IProduct} from "../contracts/IProduct"
import { IRating } from "../contracts/IRating";

export class EmptyProduct implements IProduct{
    id: number = 0;
    title: string = '';
    price: number = 0;
    description: string = '';
    category: string = '';
    image: string = '';

    rating: IRating = {rate:0, count:0}
}