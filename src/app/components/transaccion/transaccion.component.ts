import { Component } from '@angular/core';
import { TransaccionService } from '../../services/transaccion.service';
import { Transaccion } from '../../models/transaccion';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { error } from 'console';

@Component({
  selector: 'app-transaccion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './transaccion.component.html',
  styleUrl: './transaccion.component.css'
})
export class TransaccionComponent {
  monedaO: string = "";
  monedaD: string = "";
  //transaccion!: Transaccion;
  transacciones: Array<Transaccion>;
  //transaccionesDivisas: Array<Transaccion>;
  constructor(private transaccionService: TransaccionService) {
    this.transacciones = new Array<Transaccion>();
    //this.transaccionesDivisas = new Array<Transaccion>();
    this.obtenerTransacciones();
  }

  obtenerTransacciones() {
    this.transaccionService.getTransacciones().subscribe(
      respond => {
        this.transacciones = respond;
        console.log(this.transacciones);
        }
        )
      }

   obtenerTransaccionesPorDivisas(){
    this.transaccionService.getTransaccionesPorDivisas(this.monedaO, this.monedaD).subscribe(
      respond => {
        this.transacciones = respond;
      }
    )
  }
}
