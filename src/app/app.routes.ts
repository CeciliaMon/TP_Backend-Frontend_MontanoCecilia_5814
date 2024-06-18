import { Routes } from '@angular/router';
import { ProductoDestacadoComponent } from './components/producto-destacado/producto-destacado.component';
import { ProductoFormComponent } from './components/producto-form/producto-form.component';
import { TransaccionConversorComponent } from './components/transaccion-conversor/transaccion-conversor.component';
import { TransaccionComponent } from './components/transaccion/transaccion.component';
import { TicketFormComponent } from './components/ticket-form/ticket-form.component';
import { TicketComponent } from './components/ticket/ticket.component';

export const routes: Routes = [
    {path: 'producto-destacado', component: ProductoDestacadoComponent},
    {path: 'producto-form/:id', component: ProductoFormComponent},
    {path: 'transaccion-conversor/:id', component: TransaccionConversorComponent},
    {path: 'transaccion', component: TransaccionComponent}, //dirigirse a la pagina donde tendran los metodos
    {path: 'ticket-form/:id', component: TicketFormComponent},
    {path: 'ticket', component: TicketComponent}
];
