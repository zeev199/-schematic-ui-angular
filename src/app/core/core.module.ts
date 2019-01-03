import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementsModule } from './elements/elements.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ElementsModule
  ],
  exports:[ElementsModule]
})
export class CoreModule { }
