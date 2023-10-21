import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ModalFormComponent } from '../pages/dashboard/modal-form/modal-form.component';
import { ModalSimpleComponent } from '../pages/dashboard/modal-simple/modal-simple.component';
import { CardModalSimpleComponent } from '../pages/dashboard/card-modal-simple/card-modal-simple.component';
import { CardModalFormComponent } from '../pages/dashboard/card-modal-form/card-modal-form.component';
import { ClientMessagesComponent } from '../pages/dashboard/client-messages/client-messages.component';
import { MessageItemComponent } from '../pages/dashboard/message-item/message-item.component';
import { CardChangeThemeComponent } from '../pages/dashboard/card-change-theme/card-change-theme.component';
import { CardToLoginComponent } from '../pages/dashboard/card-to-login/card-to-login.component';
import { DataApiComponent } from '../pages/dashboard/data-api/data-api.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { RandomNumbersComponent } from '../pages/dashboard/random-numbers/random-numbers.component';
import { CardRandomNumbersComponent } from '../pages/dashboard/card-random-numbers/card-random-numbers.component';






@NgModule({
  declarations: [
    ModalSimpleComponent,
    CardModalSimpleComponent,
    CardModalFormComponent,
    ClientMessagesComponent,
    MessageItemComponent,
    CardChangeThemeComponent,
    CardToLoginComponent,
    DataApiComponent,
    ModalFormComponent,
    RandomNumbersComponent,
    CardRandomNumbersComponent
  ],
  exports:[
    HeaderComponent,
    ModalSimpleComponent,
    CardModalSimpleComponent,
    CardModalFormComponent,
    ClientMessagesComponent,
    MessageItemComponent,
    CardChangeThemeComponent,
    CardToLoginComponent,
    DataApiComponent,
    HttpClientModule,
    BrowserAnimationsModule,
    ModalFormComponent,
    RandomNumbersComponent,
    CardRandomNumbersComponent
  ],
  imports: [
    CommonModule,
    HeaderComponent,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
