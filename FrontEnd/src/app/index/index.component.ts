import { Component } from '@angular/core';
import { ProductService } from './product.api.service';
import { IProduct } from '../product/product.interface';

@Component({
  selector: 'app-adicionar-produto',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class AdicionarProdutoComponent {
  productName: string = '';
  productValue: number = 0;

  constructor(private productService: ProductService) {}

  submitForm() {
    const newProduct: IProduct = {
      name: this.productName,
      value: this.productValue,
      // Preencha outras propriedades conforme necessário
    };

    this.productService.adicionar(newProduct).subscribe(
      response => {
        alert('Produto cadastrado com sucesso!');
      },
      error => {
        alert('Erro ao fazer o envio do produto.');
      }
    );

    this.productName = '';
    this.productValue = 0;
  }
}

