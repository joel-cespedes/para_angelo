import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-message-text',
  templateUrl: './message-text.component.html',
  styleUrls: ['./message-text.component.scss']
})
export class MessageTextComponent {
  @Input() messageText: string = '';
}
