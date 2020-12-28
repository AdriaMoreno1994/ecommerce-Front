export class Product {
    public id: number;
    public name: string;
    public imageUrl: string;
    public price?: number;

    constructor(id: number, name: string, imageUrl: string, price: number) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
        this.price = price;
    }
}
