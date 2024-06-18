import { Component } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../models/producto';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto-destacado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './producto-destacado.component.html',
  styleUrl: './producto-destacado.component.css'
})
export class ProductoDestacadoComponent {
  productos: Array<Producto>;
  constructor(private productoService: ProductoService, private router:Router){
    this.productos = new Array<Producto>();
    this.getProductosDestacados();
  }

  getProductosDestacados(){
    this.productoService.getProductosDestacados().subscribe(
      result =>{
        let vproducto: Producto = new Producto();
        result.forEach((element:any) =>{
          Object.assign(vproducto, element);
          this.productos.push(vproducto);
          vproducto = new Producto();
        });
      }
    )
  }

  agregarProducto():void{
    //redireccionara a al formulario
    this.router.navigate(['producto-form', 0]);
    }
    elegirTicket(producto: Producto):void{
    this.router.navigate(["producto-form", producto._id])
    }

}
