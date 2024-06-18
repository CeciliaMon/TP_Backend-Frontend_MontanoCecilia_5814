export class Producto {
    _id!: string;
    nombre: string;
    descripcion: string;
    imagen: string; //url de una imagen para mostrar
    precio: number;
    stock: number;
    destacado: boolean; // solo algunos productos son destacados

    constructor(){
        this.nombre = "";
        this.descripcion = "";
        this.imagen = "";
        this.precio = 0;
        this.stock = 0;
        this.destacado = false;
    }
}
