import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_PATH } from 'src/enviroments/enviroments';
import { IProduct } from '../product/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  atualizarProduto(produto: IProduct) {
    return this.http.put<IProduct>(`${API_PATH}products/${produto.idProduct}`, produto);
  }
  
}
