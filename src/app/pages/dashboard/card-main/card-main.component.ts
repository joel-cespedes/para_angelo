import { Component, EventEmitter, Output, Renderer2, ElementRef, ViewChild, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-card-main',
  templateUrl: './card-main.component.html',
  styleUrls: ['./card-main.component.scss'],
  // providers: [ClicksCounterService]
})
export class CardMainComponent implements OnInit {

  @Input() cardColor!: string;
  @Input() fontColor!: string;
  @Input() title!: string;
  @Input() descripcion!: string;
  @Output() method!: () => void ;
  @Input() titulos: string[] = [];


  @Output() click: EventEmitter<void> = new EventEmitter<void>();

  private localStorageKey!: string;
  clickCount: number = 2;

  ngOnInit() {
    this.localStorageKey = `clickCount_${this.title}`;

    // Lee el valor almacenado en localStorage cuando se carga el componente
    const storedClickCount = localStorage.getItem(this.localStorageKey);
    if (storedClickCount) {
      this.clickCount = parseInt(storedClickCount, 10);
    }
  }


  onClick() {
    this.clickCount++;
    if( this.clickCount > 9 ){
      this.clickCount = 2
    }
    // Almacena el nuevo valor en localStorage utilizando la clave única
    localStorage.setItem(this.localStorageKey, this.clickCount.toString());
    // Emite el evento click
    this.click.emit();
  }


  constructor() {}



}
