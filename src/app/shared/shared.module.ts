import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { DataApiComponent } from '../pages/dashboard/data-api/data-api.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { RandomNumbersComponent } from '../pages/dashboard/random-numbers/random-numbers.component';
import { CardMainComponent } from '../pages/dashboard/card-main/card-main.component';
import { DashboardMenuComponent } from '../pages/dashboard/dashboard-menu/dashboard-menu.component';
import { ModalHandlerComponent } from '../pages/dashboard/modal-handler/modal-handler.component';






@NgModule({
  declarations: [
    DataApiComponent,
    RandomNumbersComponent,
    CardMainComponent,
    DashboardMenuComponent,
    ModalHandlerComponent
  ],
  exports:[
    HeaderComponent,
    DataApiComponent,
    HttpClientModule,
    BrowserAnimationsModule,
    RandomNumbersComponent,
    CardMainComponent,
    DashboardMenuComponent,
    ModalHandlerComponent
  ],
  imports: [
    CommonModule,
    HeaderComponent,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
