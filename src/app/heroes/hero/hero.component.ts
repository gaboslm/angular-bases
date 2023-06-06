import { Component, Input, OnInit } from '@angular/core';
import type { Power } from 'src/app/types/Power';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  @Input() name: string = 'Unknow';
  @Input() alter: string = 'Unknow';
  @Input() age: number = 0;
  @Input() powers: Power[] = [];

  private currentPowers: Power[] = []
  public choosing: boolean = false;

  ngOnInit() {
    this.currentPowers = this.powers;
  }

  chooseAPower(e: MouseEvent){
    this.choosing = true;
  }

  closePowerChooser(){
    this.choosing = false
  }

  togglePower(power: Power): void{
    if(!this.currentPowers.includes(power)) {
      this.currentPowers.push(power)
    }else{
      this.currentPowers.splice(this.currentPowers.indexOf(power), 1)
    }
  }

}
