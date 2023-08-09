import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.api.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  produtoObtido: any;
  products: any[] = [];

  constructor(private productService: ProductService, private modalService: NgbModal) {}

  openModal(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  ngOnInit(){
    this.productService.obterTodos().subscribe(data => {
      this.products = data;
    });
  }

  obterProduto(idProduct: number, modalContent: any) {
    this.productService.obterSomenteUm(idProduct).subscribe(
      (data: any) => {
        this.produtoObtido = data;
        this.openModal(modalContent);
      },
      (error) => {
        console.error('Erro ao obter produto:', error);
      }
    );
  }
}
