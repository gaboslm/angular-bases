import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dbz-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {
  @Input() image?: string = '';
  @Input() name: string = 'Unkown';
  @Input() power: number = 0;

  DEFAULT_IMAGE = './assets/img/no-character.png';
}
