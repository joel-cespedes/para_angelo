import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RandomNumberService } from './services/random-number.service';
import { MessageModuleModule } from './pages/dashboard/message-module/message-module.module';
import { ThemeService } from './services/theme.service';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    LoginComponent,
    ReactiveFormsModule,
    MessageModuleModule,
    FormsModule

  ],
  providers: [RandomNumberService, ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
