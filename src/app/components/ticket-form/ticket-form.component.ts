import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TicketService } from '../../services/ticket.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Ticket } from '../../models/ticket';
import { EspectadorService } from '../../services/espectador.service';
import { Espectador } from '../../models/espectador';

@Component({
  selector: 'app-ticket-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ticket-form.component.html',
  styleUrl: './ticket-form.component.css'
})
export class TicketFormComponent {

  ticket!: Ticket;
  //espectador: Espectador;
  tickets: Array<Ticket>;
  espectadores: Array<Espectador>;
  accion: string = "new"; //accion tendra los valores de new y update

  constructor(private ticketService: TicketService,private espectadorService: EspectadorService, private router: Router, private activatedRoute: ActivatedRoute){
    //this.ticket = new Ticket();
    //this.espectador = new Espectador();
    this.tickets = new Array<Ticket>();
    this.espectadores = new Array<Espectador>();
    this.iniciarVariable();
    this.cargarEspectador();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['id'] == "0"){
      this.accion = "new";
      this.iniciarVariable();
      }else{
      this.accion = "update";
      this.cargarTicket(params['id']);
      }
      });
    }

    iniciarVariable(){
      this.ticket = new Ticket();
    }

    registrarTicket():void{
      this.ticketService.addTicket(this.ticket).subscribe(
        respond => {
          if(respond.status == 1){
            alert("El ticket se agrego correctamente");
            this.router.navigate(['ticket']);
          }
        },
        error => {
          alert("Error al registrar");
          console.log(error);
        }
      );
      this.ticket = new Ticket(); 
    }

    /*cargarTicket(id: string): void 
  {
    console.log(this.ticket);
    this.ticketService.getTicket(id).subscribe
    (
      (result) => 
      {
        this.ticket = result; 
        this.ticket.espectador = this.espectadores.find(espectador => (espectador._id === this.ticket.espectador._id))!;
      },
      (error: any) => 
      {
        console.log(error);
      }
    );
  }*/


    cargarTicket(id: string){
      this.ticketService.getTicket(id).subscribe(
        respond => {
          //this.ticket = respond;
          //console.log(this.ticket);
         Object.assign(this.ticket, respond);
        this.ticket.espectador = this.espectadores.find(espectador => (espectador._id === this.ticket.espectador._id))!;
        }
      )
    }

    cargarEspectador(){
      this.espectadorService.getEspectadores().subscribe(
        respond => {
          this.espectadores = respond;
          });
    }
    

    atras():void{
      this.router.navigate(['ticket']);
    }

    modificarTicket(){
      this.ticketService.putTicket(this.ticket).subscribe(
        respond => {
          if(respond.status == 1){
            alert("El ticket se actualizo correctamente");
            this.router.navigate(['ticket']);
          }
        },
        error => {
          console.log(error);
          alert("El sector no se actualizo correctamente");
        }
      )
    }
}
