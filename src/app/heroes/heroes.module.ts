import { NgModule } from "@angular/core";
import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";
import { PowerChooserComponent } from "./power-chooser/power-chooser.component";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    HeroComponent,
    ListComponent,
    PowerChooserComponent,
  ],
  exports: [
    HeroComponent,
    ListComponent,
    PowerChooserComponent
  ]
})
export class HeroesModule {}