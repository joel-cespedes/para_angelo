import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ApiService {


  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  private apiDataSubject = new Subject<any>();

  apiData$ = this.apiDataSubject.asObservable();

  constructor(private http: HttpClient) {}

  // Nuevo método para llamar a la API y notificar a los suscriptores
  fetchDataFromApi(): void {
    let headers = new HttpHeaders().set('type-content', 'application/json');

    this.http.get(this.apiUrl, { headers: headers })
      .subscribe((data: any) => {
        console.log('Datos de la API:', data);
        this.apiDataSubject.next(data);
      });
  }



}
