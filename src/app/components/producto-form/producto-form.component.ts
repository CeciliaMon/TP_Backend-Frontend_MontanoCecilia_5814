import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/producto.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-producto-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './producto-form.component.html',
  styleUrl: './producto-form.component.css'
})
export class ProductoFormComponent {

  accion: string = "new";
  producto!: Producto;

  constructor(private productoService: ProductoService,private activatedRoute: ActivatedRoute, private router: Router){}

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
      this.producto = new Producto();
    }

    registrarProducto():void{
      this.productoService.agregarProducto(this.producto).subscribe(
        respond => {
          if(respond.status == 1){
            alert("El sector se agrego correctamente");
            this.router.navigate(['producto-destacado']);
          }
        },
        error => {
          alert("Error al registrar");
          console.log(error);
        }
      )
      
    }

    cambiarDestacado(event: any) {
      this.producto.destacado = event.target.checked;
    }
    
}
