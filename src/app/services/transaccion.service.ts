import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaccion } from '../models/transaccion';

@Injectable({
  providedIn: 'root'
})
export class TransaccionService {

  urlBase: string = 'http://localhost:3000/api/transaccion/';
  constructor(private _http: HttpClient) { }

  public getConversion(from: string, to: string, amount: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com',
        'X-RapidAPI-Key': 'c6db663476msh598612b49b9b0e2p1f1ac6jsnd48dd6189f01'
      }),
    }

    /*const params = new HttpParams()
    .append('from', from)
    .append('to', to)
    .append('amount', amount);*/

        //generatebasicbase64?data="+data+"&size=500"
    return this._http.get("https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert?from="+from+"&to="+to+"&amount="+amount, httpOptions);
  }

  agregarTransaccion(transaccion: Transaccion): Observable<any>{
    let httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    }

    let body: any = JSON.stringify(transaccion);

    return this._http.post(this.urlBase, body,httpOption);
  }

  getTransacciones(): Observable<any>{
    let httpOption = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams()
    }

    return this._http.get(this.urlBase, httpOption);
  }

  getTransaccionesPorDivisas(mO: string, mD: string): Observable<any>{
    let httpOption = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams()
    }

    const url = `http://localhost:3000/api/transaccion/${mO}/${mD}`;

    return this._http.get(url, httpOption);
  }
}
