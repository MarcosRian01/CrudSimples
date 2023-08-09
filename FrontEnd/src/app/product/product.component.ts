import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.api.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MyModalComponent } from '../my-modal/my-modal.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  produtoObtido: any;
  products: any[] = [];

  constructor(private productService: ProductService, private modalService: NgbModal) {}

  ngOnInit(){
    this.productService.obterTodos().subscribe(data => {
      this.products = data;
    });
  }

  obterProduto(idProduct: string) {
    this.productService.obterSomenteUm(idProduct).subscribe(
      (data: any) => {
        this.abrirModal(data);
      },
      (error) => {
        console.error('Erro ao obter produto:', error);
      }
    );
  }

  excluirProduto(idProduct: string){
    if (confirm('Tem certeza de que deseja excluir este produto?')) {
      this.productService.excluirProduto(idProduct).subscribe(
        (data: any) => {
          location.reload();
        },
        (error) => {
          console.error('Erro ao excluir produto:', error);
        }
      );
    }
  }

  abrirModal(produto: any){
    const modalRef = this.modalService.open(MyModalComponent);
    modalRef.componentInstance.produto = produto;
  }

}
