import { Component, EventEmitter, Output, Renderer2, ElementRef, ViewChild } from '@angular/core';


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

    toggleClassTheme() {


      const htmlElement: HTMLElement | null = this.el.nativeElement.ownerDocument.getElementById('myDashboard');
      if (htmlElement) {
        const hasClass = htmlElement.classList.contains('dark');
        if (hasClass) {
          this.renderer.removeClass(htmlElement, 'dark');
        } else {
          this.renderer.addClass(htmlElement, 'dark');
        }
      }
    }





}
