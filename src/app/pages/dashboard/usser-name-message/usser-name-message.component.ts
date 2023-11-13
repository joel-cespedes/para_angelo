import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-usser-name-message',
  templateUrl: './usser-name-message.component.html',
  styleUrls: ['./usser-name-message.component.scss']
})
export class UsserNameMessageComponent {
  @Input() userName: string = '';
}
