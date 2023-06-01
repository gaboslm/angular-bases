import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  public title: string = 'Mi primera app de Angular';

  public counter: number = 0;

  increaseCounter(): void {
    this.counter += 1;
  }

  decreaseCounter(): void {
    this.counter -= 1;
  }

  resetCounter(): void {
    this.counter = 0;
  }

}
