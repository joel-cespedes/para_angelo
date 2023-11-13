import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private filtroSubject = new BehaviorSubject<string>('');
  filtro$ = this.filtroSubject.asObservable();

  actualizarFiltro(filtro: string) {
    this.filtroSubject.next(filtro);
  }

}
