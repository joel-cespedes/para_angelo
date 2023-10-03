import { Component } from '@angular/core';
import { MessageInterface } from '../../../interfaces/message-interface';




@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.scss']
})


export class MessageItemComponent {
  public message : MessageInterface[] = [
    {
      name: 'Stephanie',
      coments: 'I got your first assignment. It was quite good. 🥳 We can continue with the next assignment.',
      date: 'Dec, 12',
    },
    {
      name: 'Mark',
      coments: 'Hey, can tell me about progress of project? Im waiting for your response.',
      date: 'Dec, 12',
    },
    {
      name: 'David',
      coments: 'Awesome! 🤩 I like it. We can schedule a meeting for the next one.',
      date: 'Dec, 12',
    },
    {
      name: 'Jessica',
      coments: 'I am really impressed! Cant wait to see the final result.',
      date: 'Dec, 12',
    }
  ]
}
