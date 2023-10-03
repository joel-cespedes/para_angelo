import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, timer } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RandomNumberService {

  private initialValue = 50;
  private currentValueSubjects: BehaviorSubject<number>[] = [];

  constructor() {
    // Inicializa los BehaviorSubject para los tres valores
    for (let i = 0; i < 3; i++) {
      this.currentValueSubjects.push(new BehaviorSubject<number>(this.initialValue));
    }
  }

  // Método para obtener el valor actual para un índice dado
  getCurrentValue(index: number): Observable<number> {
    return this.currentValueSubjects[index].asObservable();
  }

  // Método para iniciar el cambio aleatorio y restaurar después de 3 segundos para un índice dado
  startRandomChange(index: number): void {
    timer(3000)
      .pipe(
        switchMap(() => {
          const randomValue = Math.floor(Math.random() * 81);
          return timer(0, 100).pipe(
            map((tick) => {
              const newValue = this.initialValue + (randomValue - this.initialValue) * (tick / 30);
              this.currentValueSubjects[index].next(newValue);
            })
          );
        })
      )
      .subscribe(() => {
        this.currentValueSubjects[index].next(this.initialValue);
      });
  }



}
