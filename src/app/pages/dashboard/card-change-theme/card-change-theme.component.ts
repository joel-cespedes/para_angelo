import { Component, EventEmitter, Output, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { ClicksCounterService } from 'src/app/services/clicks-counter.service';

@Component({
  selector: 'app-card-change-theme',
  templateUrl: './card-change-theme.component.html',
  styleUrls: ['./card-change-theme.component.scss'],
  providers: [ClicksCounterService]
})
export class CardChangeThemeComponent {

    clickCount: number | undefined;

    constructor(
      private renderer: Renderer2,
      private el: ElementRef,
      private ClicksCounterService: ClicksCounterService) {
        this.ClicksCounterService.clickCount$.subscribe((count) => {
          this.clickCount = count;
        });
      }

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
      this.ClicksCounterService.incrementClick();


    }




}
