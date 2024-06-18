import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  urlBase: string = 'http://localhost:3000/api/ticket/';

  constructor(private _http: HttpClient) { }

  getTickets(): Observable<any>{
    let httpOption = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams()
    }

    return this._http.get(this.urlBase, httpOption);
  }

  deleteTicket(id: string): Observable<any>{
    let httpOption = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams()
    }

    return this._http.delete(this.urlBase + id, httpOption);
  }

  getTicketsPorEspectador(tipoEs: string): Observable<any>{
    let httpOption = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams()
    }

    const url = `http://localhost:3000/api/ticket/${tipoEs}`;

    return this._http.get(url, httpOption);
  }

  addTicket(ticket: Ticket): Observable<any>{
    let httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    }

    let body: any = JSON.stringify(ticket);

    return this._http.post(this.urlBase, body,httpOption);
  }

  putTicket(ticket: Ticket): Observable<any>{
    let httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    }
    let body: any = JSON.stringify(ticket);
    return this._http.put(this.urlBase + ticket._id, body, httpOption);
  }

  getTicket(_id: string): Observable<any>{
    let httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    }

    return this._http.get(this.urlBase + _id, httpOption);
  }

}
