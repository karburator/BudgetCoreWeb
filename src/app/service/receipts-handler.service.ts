import { Injectable } from '@angular/core';
import {Receipt} from "../model/Receipt";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReceiptsHandlerService {

  constructor(private http: HttpClient) { }

  getReceipts(): Observable<Receipt[]> {
    // const httpHeaders = new HttpHeaders({ 'Access-Control-Allow-Origin': '*' });
    // const options = { headers: httpHeaders };
    // return this.http.get<Receipt[]>(`http://localhost:5000/reciept`, options);
    return this.http.get<Receipt[]>(`http://localhost:5000/reciept`);
  }

  getReceipt(id: number): Observable<Receipt> {
    return this.http.get<Receipt>(`http://localhost:5000/reciept/${id}`);
  }
}
