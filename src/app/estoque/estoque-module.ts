import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemRegistrationComponent } from './item-registration/item-registration';
import { ItemListComponent } from './item-list/item-list';
import { EstoqueMainComponent } from './estoque-main/estoque-main';

@NgModule({
  declarations: [
    ItemRegistrationComponent,
    ItemListComponent,
    EstoqueMainComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    EstoqueMainComponent
  ]
})
export class EstoqueModule {}