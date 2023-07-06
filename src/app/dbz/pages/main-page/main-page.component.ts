import { Component } from '@angular/core';
import { Character } from '../../interfaces/Character';

@Component({
  selector: 'app-dbz-main',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  characters: Character[] = [
    {
      image: 'https://www.fayerwayer.com/resizer/I606tkpzpYhqbwWOOXJQfPSENL8=/800x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/C6FRR2WKRRH5VOVLF4Q4GBSJTY.jpg',
      name: 'Goku',
      power: 20000
    },
    {
      image: 'https://lens-storage.storage.googleapis.com/png/64613dc9f39e48868a0c6c5c21a2523b',
      name: 'Picolo',
      power: 900,
    }
  ] 
}
