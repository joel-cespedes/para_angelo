import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveRoutingModule } from './reactive-routing.module';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CardMainActionsComponent } from './dashboard/card-main-actions/card-main-actions.component';
import { CardChangeThemeComponent } from './dashboard/card-change-theme/card-change-theme.component';
import { CardToLoginComponent } from './dashboard/card-to-login/card-to-login.component';
import { DataApiComponent } from './dashboard/data-api/data-api.component';



@NgModule({
  declarations: [
    CardMainActionsComponent,
    CardChangeThemeComponent,
    CardToLoginComponent,
    DataApiComponent
  ],
  imports: [
    CommonModule,
    ReactiveRoutingModule
  ]
})
export class ReactiveModule { }
