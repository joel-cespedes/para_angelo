import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-message',
  templateUrl: './image-message.component.html',
  styleUrls: ['./image-message.component.scss']
})
export class ImageMessageComponent {
  @Input() photoUrl: string = '';
}
