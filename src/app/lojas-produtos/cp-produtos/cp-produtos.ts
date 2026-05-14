import { Component } from '@angular/core';
import { ProductList } from '../product-list/product-list';

@Component({
  selector: 'app-cp-produtos',
  standalone: true,
  imports: [ProductList],
  templateUrl: './cp-produtos.html',
  styleUrl: './cp-produtos.scss',
})
export class CpProdutos {}
