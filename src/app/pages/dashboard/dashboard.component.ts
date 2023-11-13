import { Component, EventEmitter, Output, Renderer2, ElementRef, ViewChild, OnInit, Input, OnDestroy } from '@angular/core';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ApiService } from 'src/app/services/api.service';
import { RandomNumberService } from 'src/app/services/random-number.service';
import { RandomNumbersComponent } from './random-numbers/random-numbers.component';
import { CardMainComponent } from './card-main/card-main.component';

import { ModalService } from 'src/app/services/modal.service';
import { trigger, transition, style, animate } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';

// import { ThemeService } from 'src/app/services/theme.service';
import { SharedService } from 'src/app/services/shared.service';

import { Observable, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    trigger('modalAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('300ms ease-in-out', style({ opacity: 0 })),
      ]),
    ]),
  ]
})
export class DashboardComponent implements OnInit, OnDestroy {


  @Input() cardColor!: string;
  @Input() fontColor!: string;
  @Input() title!: string;
  @Input() descripcion!: string;
  @Output() method!: () => void ;
  @Output() counterClick!: () => void ;


  private filtroSubscription: Subscription | undefined;

  consultaBusqueda: string = '';

  showModalSimple: boolean = false;
  showModalFormulario: boolean = false;

  // view list and grid
  listVisible : boolean = false;
  listActive : boolean = false;
  gridActive : boolean = true;




  mostrarLista() {
    this.listVisible = true;
    this.listActive = true;
    this.gridActive = false;
    localStorage.setItem('vistaSeleccionada', 'lista');
  }

  mostrarCuadricula() {
    this.listVisible = false;
    this.listActive = false;
    this.gridActive = true;
    localStorage.setItem('vistaSeleccionada', 'cuadricula');
  }
  // view list and grid


  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private router: Router,
    private modalType: ModalService,
    private randomValueService: RandomNumberService,
    // private themeService: ThemeService,
    private sharedService: SharedService,
    private ApiService: ApiService,
    private http: HttpClient
    ) {
      this.loadTheme(event!);
    }

    // array de tarjetas
    cards = [
      { cardColor: '#fee4cb', fontColor: '#ff942e', title: 'Modal Simple', descripcion: 'Esto debería levantar un modal que muestre una información y que se pueda cerrar', method: ()=> this.openModal('simple') },
      { cardColor: '#e9e7fd', fontColor: '#4f3ff0', title: 'Modal con formulario', descripcion: 'Esto debería levantar una modal que muestre un formulario que cuando se haga summit se cierre', method: ()=> this.openModal('formulario') },
      { cardColor: ' ', fontColor: ' ', title: 'Esto debería cambiar  los numeros del header (45, 24, 62)', descripcion: 'Los numeros deben cambiar aleatoreamente entre (0 y 80) y despues de 3 segundos volver a los numeros originales (45, 24, 62)', method:() => this.changeRandomValues() },
      { cardColor: '#ffd3e2', fontColor: '#df3670', title: 'Cambiar tema a dark', descripcion: 'si ves el html inicia así <br> html lang="en"  <br><br> si le pones esta clase la pagina se pasa a negro html <br>lang="en" class="dark"  <br>', method: ()=> this.toggleClassTheme(event!)  },
      { cardColor: '#c8f7dc', fontColor: '#34c471', title: 'Este boton debe navegar  la pagina del formulario por lazy loading', descripcion: 'El formulario es el otro html de este proyecto', method: ()=> this.goToLogin() },
      { cardColor: '#d5deff', fontColor: '#4067f9', title: 'Llamar a la api', descripcion: 'Llamar a la api y mostrar en el div verde (abajo) los datos mostrados que recibe de la api con items coloreados (como tu quieras), La api a la que debes llamar y  que te devolvera posts es esta https://jsonplaceholder.typicode.com/posts', method: ()=> this.callApi() },
    ];
    // array de tarjetas



  // All Methods



    ngOnInit(): void {
      // modals
      this.modalType.modal$.subscribe(modalType => {
        this.showModalSimple = false;
        this.showModalFormulario = false;

        if (modalType === 'simple') {
          this.showModalSimple = true;
        } else if (modalType === 'formulario') {
          this.showModalFormulario = true;
        }
      });
      // modals


      if (this.sharedService.filtro$) {
        this.filtroSubscription = this.sharedService.filtro$.subscribe((filtro) => {
          this.consultaBusqueda = filtro;
        });
      }

      // view list and grid
      const vistaSeleccionada = localStorage.getItem('vistaSeleccionada');
      if (vistaSeleccionada === 'lista') {
        this.mostrarLista();
      } else {
        this.mostrarCuadricula();
      }
      // view list and grid




    }
    ngOnDestroy() {
        if (this.filtroSubscription) {
          this.filtroSubscription.unsubscribe();
        }
    }




    // ejecuta funciones de tarjetas
    ejecutarFuncion(metodo: () => void) {
      if (metodo) {
        metodo();
      }
    }

    // ejecuta funciones de tarjetas



    // Change theme

    toggleClassTheme(event: Event) {
      console.log('Toggle Class Theme');
      const htmlElement: HTMLElement | null = this.el.nativeElement.ownerDocument.getElementById('myDashboard');
      if (htmlElement) {
        const hasClass = htmlElement.classList.contains('dark');
        if (hasClass) {
          this.renderer.removeClass(htmlElement, 'dark');
        } else {
          this.renderer.addClass(htmlElement, 'dark');
        }

        this.saveThemeState(!hasClass);
        event.stopPropagation();
      }
    }

    private saveThemeState(isDark: boolean) {
      console.log('Guardar tema en localStorage:', isDark ? 'dark' : 'light');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }

    private loadTheme(event: Event) {
      console.log('Cargar tema desde localStorage');
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
        this.renderer.addClass(document.body, 'dark');
        const htmlElement: HTMLElement | null = this.el.nativeElement.ownerDocument.getElementById('myDashboard');
        if (htmlElement) {
          this.renderer.addClass(htmlElement, 'dark');
        }
        // event.stopPropagation();
      }
    }


    // Change theme



    // Call data API
    callApi() {
      this.ApiService.fetchDataFromApi();
    }
    // Call data API

    // buscador
    mostrarCard(card: any): boolean {
      if (!this.consultaBusqueda) {

        return true;
      }

      const textoBusqueda = this.consultaBusqueda.toLowerCase();
      const tituloEnMinusculas = card.title.toLowerCase();
      const descripcionEnMinusculas = card.descripcion.toLowerCase();

      return tituloEnMinusculas.includes(textoBusqueda) || descripcionEnMinusculas.includes(textoBusqueda);
    }
    // buscador

    // Modals
    openModal(modalType: string): void {
      this.modalType.openModal(modalType);
    }
    // Modals

    // Random numbers
    changeRandomValues() {
        this.randomValueService.generateRandomValues();
    }
    getValues() {
        return this.randomValueService.values;
    }
    // Random numbers

    // Go to login
    goToLogin() {
        this.router.navigateByUrl('/login');
    }
    // Go to login


}
