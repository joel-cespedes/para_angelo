import { Component } from '@angular/core';
import { MessageItemComponent } from '../message-item/message-item.component';
import { ClientProfileImageComponent } from '../client-profile-image/client-profile-image.component';


@Component({
  selector: 'app-client-messages',
  templateUrl: './client-messages.component.html',
  styleUrls: ['./client-messages.component.scss']
})
export class ClientMessagesComponent {

  messages = [
    { photoUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80', userName: 'Stephanie', messageText: 'I got your first assignment. It was quite good. 🥳 We can continue with the next assignment.' },
    { photoUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80', userName: 'Mark', messageText: 'Hey, can tell me about progress of project? Im waiting for your response.' },
    { photoUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80', userName: 'David', messageText: 'Awesome! 🤩 I like it. We can schedule a meeting for the next one.' },
    { photoUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80', userName: 'Jessica', messageText: 'I am really impressed! Cant wait to see the final result.' }
  ];

}


