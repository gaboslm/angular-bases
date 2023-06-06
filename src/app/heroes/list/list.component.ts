import { Component } from '@angular/core';
import { Hero } from 'src/app/types/Hero';
import { HeroList } from 'src/app/data/heroes.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent {

  private heroes: Hero[] = HeroList

  get getHeroes(){
    return this.heroes;
  }

}
