import { Component } from '@angular/core';
import { ProductList } from '../product-list/product-list';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-cp-produtos',
  standalone: true,
  imports: [ProductList, ProductCard],
  templateUrl: './cp-produtos.html',
  styleUrl: './cp-produtos.scss',
})
export class CpProdutos {}
