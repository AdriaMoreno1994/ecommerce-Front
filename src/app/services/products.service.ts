import {Injectable} from '@angular/core';
import {Purchase} from '../shared/purchase.model';
import {Product} from '../shared/product.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class ProductsService {

    constructor(private http: HttpClient) {
    }

    purchaseProduct(data: Purchase): Observable<any> {
        return this.http.post(
            'http://35.180.252.125:8080/purchase/',
            // 'http://localhost:8080/purchase/',
            data,
            {
                headers: new HttpHeaders({'Content-Type': 'application/json'})
            });
    }

    getProducts(): Observable<any> {
        return this.http.post(
            'http://35.180.252.125:8080/products/',
            // 'http://localhost:8080/products/',
            null,
            {
                headers: new HttpHeaders({'Content-Type': 'application/json'})
            });
    }
}
