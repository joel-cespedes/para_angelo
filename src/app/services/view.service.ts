import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewService {

  private vistaActual: string = 'GridActive';

  getVistaActual(): string {
    return this.vistaActual;
  }

  cambiarVista(nuevaVista: string): void {
    this.vistaActual = nuevaVista;
    localStorage.setItem('vistaPreferida', nuevaVista);
  }

}
