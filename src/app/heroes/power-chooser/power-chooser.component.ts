import { Component, EventEmitter, Input, Output } from '@angular/core';
import type { Power } from '../../types/Power';
import { HeroPowerList } from 'src/app/data/hero-power.service';

@Component({
  selector: 'app-heroes-power-chooser',
  templateUrl: './power-chooser.component.html',
  styleUrls: ['./power-chooser.component.scss']
})

export class PowerChooserComponent {

  @Input() includedPowers: Power[] = []
  @Output() change = new EventEmitter<Power>();
  @Output() close = new EventEmitter<void>();

  private powers: Power[] = HeroPowerList;

  get getPowers(){
    return this.powers;
  }

  changePower(power: Power): void {
    this.change.emit(power)
  }

  onClose(){
    this.close.emit()
  }

  alreadyHasPower(power: Power): boolean{
    return this.includedPowers.includes(power)
  }

}
