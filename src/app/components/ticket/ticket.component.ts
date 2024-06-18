import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TicketService } from '../../services/ticket.service';
import { Router } from '@angular/router';
import { Ticket } from '../../models/ticket';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  tipoEs: string = "";
  tickets: Array<Ticket>;
  constructor(private ticketService: TicketService, private router: Router){
    this.tickets = new Array<Ticket>();
    this.obtenerTickets();
  }

  obtenerTickets() {
    this.ticketService.getTickets().subscribe(
      respond => {
        this.tickets = respond;
        console.log(this.tickets);
        }
        )
      }

   obtenerTicketsPorEspectador(){
    this.ticketService.getTicketsPorEspectador(this.tipoEs).subscribe(
      respond => {
        this.tickets = respond;
        console.log(this.tickets);
      }
    )
  }

  agregarTicket():void{
    //redireccionara a al formulario
    this.router.navigate(['ticket-form', 0]);
    }
    elegirTicket(id: string){
    this.router.navigate(["ticket-form", id]);
    }
    borrarTicket(id: string):void{
    this.ticketService.deleteTicket(id).subscribe(
      respond => {
        if(respond.status == 1){
          this.obtenerTickets();
          alert('Ticket eliminado!');
        }
        
      }
    );
    
    }
}
