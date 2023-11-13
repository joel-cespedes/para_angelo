import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageMessageComponent } from '../image-message/image-message.component';
import { UsserNameMessageComponent } from '../usser-name-message/usser-name-message.component';
import { MessageTextComponent } from '../message-text/message-text.component';
import { ClientMessagesComponent } from '../client-messages/client-messages.component';
import { MessageItemComponent } from '../message-item/message-item.component';



@NgModule({
  declarations: [
    ImageMessageComponent,
    UsserNameMessageComponent,
    MessageTextComponent,
    ClientMessagesComponent,
    MessageItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ClientMessagesComponent
  ]
})
export class MessageModuleModule { }
