import { Component } from '@angular/core';
import { TransaccionService } from '../../services/transaccion.service';
import { Transaccion } from '../../models/transaccion';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-transaccion-conversor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './transaccion-conversor.component.html',
  styleUrl: './transaccion-conversor.component.css'
})
export class TransaccionConversorComponent {
  //resultado!: number;
  /*from: string ="";
  to: string = "";
  amount : number = 0;*/
  transaccion!: Transaccion;
  accion: string = "new";

  constructor(private transaccionServicio: TransaccionService, private activatedRoute: ActivatedRoute, private router: Router){}

  obtenerCantidad(){
    this.transaccionServicio.getConversion(this.transaccion.monedaOrigen, this.transaccion.monedaDestino, this.transaccion.cantidadOrigen).subscribe(
    (response:any) => {
      console.log(response);
      this.transaccion.tasaConversion = response.result;
      this.transaccion.cantidadDestino = response.result;
    },
    (error:any) => {
      console.log(error);
    }
  )
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['id'] == "0"){
      this.accion = "new";
      this.IniciarVariable();
      }/*else{
      this.accion = "update";
      this.cargarProducto(params['id']);
      }*/
      });
    }
    IniciarVariable(){
      this.transaccion = new Transaccion();
    }

    registrarTransaccion():void{
      this.transaccionServicio.agregarTransaccion(this.transaccion).subscribe(
        respond => {
          if(respond.status == 1){
            alert("La transaccion se agrego correctamente");
            //this.router.navigate(['producto-destacado']);
          }
        },
        error => {
          alert("Error al registrar");
          console.log(error);
        }
      )
      
    }
}
