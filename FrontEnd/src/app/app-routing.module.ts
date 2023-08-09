import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarProdutoComponent } from './index/index.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path: '', component: AdicionarProdutoComponent},
  {path: 'product', component: ProductComponent}
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
