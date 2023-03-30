import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: [],
})
export class NietoComponent {
  @Input() contador: number;
  @Output() contadorCambio = new EventEmitter<number>();

  constructor() {
    this.contador = 0;
  }

  reset() {
    this.contador = 0;
    this.contadorCambio.emit(0);
  }
}
