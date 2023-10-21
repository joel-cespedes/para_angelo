
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class RandomNumberService {
  private numero1: BehaviorSubject<number> = new BehaviorSubject<number>(45);
  private numero2: BehaviorSubject<number> = new BehaviorSubject<number>(24);
  private numero3: BehaviorSubject<number> = new BehaviorSubject<number>(62);

  cambiarNumeros() {
    this.numero1.next(Math.floor(Math.random() * 81));
    this.numero2.next(Math.floor(Math.random() * 81));
    this.numero3.next(Math.floor(Math.random() * 81));
  }

  getNumero1() {
    return this.numero1.asObservable();
  }

  getNumero2() {
    return this.numero2.asObservable();
  }

  getNumero3() {
    return this.numero3.asObservable();
  }
}
