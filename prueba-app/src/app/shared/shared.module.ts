import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ModalFormComponent } from './modal-form/modal-form.component';
import { ModalSimpleComponent } from './modal-simple/modal-simple.component';
import { CardModalSimpleComponent } from '../pages/dashboard/card-modal-simple/card-modal-simple.component';
import { CardModalFormComponent } from '../pages/dashboard/card-modal-form/card-modal-form.component';
import { ClientMessagesComponent } from '../pages/dashboard/client-messages/client-messages.component';
import { MessageItemComponent } from '../pages/dashboard/message-item/message-item.component';
import { CardChangeThemeComponent } from '../pages/dashboard/card-change-theme/card-change-theme.component';
import { CardToLoginComponent } from '../pages/dashboard/card-to-login/card-to-login.component';
import { DataApiComponent } from '../pages/dashboard/data-api/data-api.component';





@NgModule({
  declarations: [
    ModalSimpleComponent,
    CardModalSimpleComponent,
    CardModalFormComponent,
    ClientMessagesComponent,
    MessageItemComponent,
    CardChangeThemeComponent,
    CardToLoginComponent,
    DataApiComponent
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
    DataApiComponent
  ],
  imports: [
    CommonModule,
    HeaderComponent
  ]
})
export class SharedModule { }
