import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_PATH } from 'src/enviroments/enviroments';
import { IProduct } from './product.interface';

@Injectable({
    providedIn: 'root'
  })

export class ProductService {
    constructor(private http: HttpClient) { }

    obterTodos(){
        return this.http.get<IProduct[]>(`${API_PATH}products`)
    }

    obterSomenteUm(idProduct: number){
        return this.http.get<IProduct>(`${API_PATH}products/${idProduct}`)
    }
}
