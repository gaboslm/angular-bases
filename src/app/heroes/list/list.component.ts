import { Component } from '@angular/core';
import { Hero } from 'src/app/interfaces/Hero';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent {

  private heroes: Hero[] = [
    {
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Spider-Man.jpg/1200px-Spider-Man.jpg',
      name: 'Peter Parker',
      alter: 'Spiderman',
      age: 23,
      powers: ['Strength', 'Spider']
    },
    {
      image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/42b18699-e456-4242-9656-89983e658695/d6cj4qq-adaedd9f-7c2a-45de-bc2f-ae9895feae31.jpg/v1/fill/w_600,h_849,q_75,strp/man_of_steel___henry_cavill_evil_superman_drawing_by_ruggiart_d6cj4qq-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODQ5IiwicGF0aCI6IlwvZlwvNDJiMTg2OTktZTQ1Ni00MjQyLTk2NTYtODk5ODNlNjU4Njk1XC9kNmNqNHFxLWFkYWVkZDlmLTdjMmEtNDVkZS1iYzJmLWFlOTg5NWZlYWUzMS5qcGciLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.YIsWyDeiYQi0t_Ji7SmFJ-H67jKXzP3YcPdU9qYVQbI',
      name: 'Clark Ken',
      alter: 'Superman',
      age: 40,
      powers: ['Strength', 'Flight', 'VisionOfRay']
    },
    {
      image: 'https://www.sideshow.com/storage/product-images/904950/batman-sonar-suit_dc-comics_square.jpg',
      name: 'Bruce Wane',
      alter: 'Batman',
      age: 40,
      powers: [],
    }
  ]
  public noMoreHeroesImg = 'https://www.fayerwayer.com/resizer/I606tkpzpYhqbwWOOXJQfPSENL8=/800x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/C6FRR2WKRRH5VOVLF4Q4GBSJTY.jpg';
  public lastDeletedHero?: string;

  get getHeroes(){
    return this.heroes;
  }

  deleteLastHero(){
    const deletedHero = this.heroes.pop()

    this.lastDeletedHero = deletedHero?.name
  }
}
