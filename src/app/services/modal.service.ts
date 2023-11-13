import { EventEmitter, Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }


  private modalSubject = new Subject<string>();

  modal$ = this.modalSubject.asObservable();

  openModal(modalType: string): void {
    this.modalSubject.next(modalType);
  }
  // $modal = new EventEmitter<any>();
  // $modalF = new EventEmitter<any>();



}
