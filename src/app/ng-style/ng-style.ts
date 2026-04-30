import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ng-style',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-style.html',
  styleUrl: './ng-style.scss',
})
export class NgStyle {

  public tamanho: number = 100;

  aumenta() {
    this.tamanho += 50;
  }

  diminui() {
    this.tamanho -= 50;
  }
}