import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from './product.api.service';

@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.component.html',
  styleUrls: ['./my-modal.component.scss']
})
export class MyModalComponent {
  produto: any;

  constructor(private modalService: NgbModal, private productService: ProductService) {}

  atualizarProduto() {
    this.productService.atualizarProduto(this.produto).subscribe(
      (data: any) => {
      },
      (error) => {
        console.error('Erro ao atualizar produto:', error);
      }
    );
  }

  closeModal() {
    this.modalService.dismissAll();
  }

  recarregarPagina() {
    location.reload();
  }
}
