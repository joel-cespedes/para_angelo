import { Component, EventEmitter, Output, Renderer2, ElementRef } from '@angular/core';


@Component({
  selector: 'app-card-change-theme',
  templateUrl: './card-change-theme.component.html',
  styleUrls: ['./card-change-theme.component.scss']
})
export class CardChangeThemeComponent {

    // @Output() changeTheme = new EventEmitter();

    // darkMode : boolean = false;

    // cambiarTema() {
    //   this.changeTheme.emit( this.darkMode );
    // }

    constructor(private renderer: Renderer2, private el: ElementRef) {}

    addClassTheme() {
      const htmlElement = this.el.nativeElement.ownerDocument.getElementById('myDashboard');
      this.renderer.addClass(htmlElement, 'dark');
    }





}
