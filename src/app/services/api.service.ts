import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {


  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {
    console.log('Servicio de api funcionando')
  }

  // getData(): Observable<any> {
  //   return this.http.get(`${this.apiUrl}/dashboard`);
  // }




  getInformation(){
    let headers = new HttpHeaders().set('type-content', 'aplication/json')

    return this.http.get(this.apiUrl, { headers : headers });
  }





}
