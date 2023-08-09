import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_PATH } from 'src/enviroments/enviroments';
import { IProduct } from '../product/product.interface';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    constructor(private http: HttpClient) { }

    adicionar(product:IProduct){
        return this.http.post<IProduct>(`${API_PATH}products`, product);
    }
}
