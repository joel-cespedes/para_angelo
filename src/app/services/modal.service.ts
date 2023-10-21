import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }


  $modal = new EventEmitter<any>();
  $modalF = new EventEmitter<any>();



}
