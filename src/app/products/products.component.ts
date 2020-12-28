import {Component, OnInit} from '@angular/core';
import {Product} from '../shared/product.model';
import {HttpClient} from '@angular/common/http';
import {ProductsService} from '../services/products.service';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

    imageUrl = 'https://sc01.alicdn.com/kf/UTB8ou8hOyDEXKJk43Oqq6Az3XXaz.jpg';

    products: Product[] = [
        new Product(1, 'Apple', this.imageUrl, 10),
        new Product(2, 'Apple', this.imageUrl, 10),
        new Product(3, 'Apple', this.imageUrl, 10),
        new Product(4, 'Apple', this.imageUrl, 10),
        new Product(5, 'Apple', this.imageUrl, 10),
        new Product(6, 'Apple', this.imageUrl, 10),
        new Product(7, 'Apple', this.imageUrl, 10),
        new Product(8, 'Apple', this.imageUrl, 10),
    ];

    constructor(private productsService: ProductsService) {
    }

    ngOnInit(): void {
        this.productsService.getProducts().subscribe((responseData: Product[]) => {
                console.log(responseData);

                if (responseData !== undefined && responseData.length >= 1) {
                    this.products = responseData;
                }
            }
        );
    }
}
