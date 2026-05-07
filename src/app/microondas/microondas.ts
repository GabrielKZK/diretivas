import { Component, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-microondas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './microondas.component.html',
  styleUrls: ['./microondas.component.scss']
})
export class MicroondasComponent implements OnDestroy {
  display: string = '0000'; 
  segundosTotais: number = 0;
  timer: any;
  emAndamento: boolean = false;

  // Injetamos o ChangeDetectorRef para forçar o Angular a atualizar a tela
  constructor(private cdr: ChangeDetectorRef) {}

  digitar(num: string) {
    if (this.emAndamento) return;
    let novo = (this.display + num).replace(/^0+/, '');
    if (novo.length > 4) novo = novo.slice(-4);
    this.display = novo.padStart(4, '0');
    this.converterParaSegundos();
  }

  converterParaSegundos() {
    const min = parseInt(this.display.substring(0, 2));
    const seg = parseInt(this.display.substring(2, 4));
    this.segundosTotais = (min * 60) + seg;
  }

  atualizarVisor() {
    const m = Math.floor(this.segundosTotais / 60);
    const s = this.segundosTotais % 60;
    this.display = m.toString().padStart(2, '0') + s.toString().padStart(2, '0');
    
    // FORÇA O ANGULAR A ATUALIZAR O HTML
    this.cdr.detectChanges(); 
  }

  adicionarDezSegundos() {
    this.segundosTotais += 10;
    this.atualizarVisor();
  }

  iniciar() {
    if (this.emAndamento || this.segundosTotais <= 0) return;

    this.emAndamento = true;
    this.timer = setInterval(() => {
      if (this.segundosTotais > 0) {
        this.segundosTotais--; 
        this.atualizarVisor(); // Atualiza a variável e a tela
      } else {
        this.finalizar();
      }
    }, 1000);
  }

  pausar() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
    this.emAndamento = false;
  }

  parar() {
    this.pausar();
    this.segundosTotais = 0;
    this.display = '0000';
    this.cdr.detectChanges();
  }

  finalizar() {
    this.parar();
    alert('Bip! Bip! Finalizado!');
  }

  ngOnDestroy() {
    this.pausar();
  }
}