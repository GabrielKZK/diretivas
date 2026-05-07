import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InvertePipe } from '../inverte-pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pipes',
  imports: [CommonModule, InvertePipe, FormsModule],
  templateUrl: './pipes.html',
  styleUrl: './pipes.scss',
})
export class Pipes {

  public data: Date = new Date();
  public nome: string = "Fulano de Tal";
  public valor: number = 12345.67;
  public palavra: string = "";

}
