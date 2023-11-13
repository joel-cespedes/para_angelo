import { Component, Input } from '@angular/core';
import { MessageInterface } from '../../../interfaces/message-interface';
import { MessageTextComponent } from '../message-text/message-text.component';
import { ImageMessageComponent } from '../image-message/image-message.component';
import { UsserNameMessageComponent } from '../usser-name-message/usser-name-message.component';



@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.scss']
})


export class MessageItemComponent {


  @Input() messageData: { photoUrl: string, userName: string, messageText: string } = {
    photoUrl: '',
    userName: '',
    messageText: ''
  };
  @Input() index: number = 0;

}
