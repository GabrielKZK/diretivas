import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpProdutos } from './cp-produtos/cp-produtos';



@NgModule({
  declarations: [],
  imports: [CommonModule, CpProdutos],
    exports: [CpProdutos]
})
export class LojasProdutosModule { }
