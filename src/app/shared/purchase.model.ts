import {Product} from './product.model';

export class Purchase {
    public id?: number;
    public product: Product;
    public email: string;

    constructor(product: Product, email: string) {
        this.product = product;
        this.email = email;
    }
}
