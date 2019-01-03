import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { TableComponent } from './table/table.component';
import { LoaderDirective } from './loader/loader.directive';
import { ModelDirective } from './model/model.directive';

@NgModule({
  declarations: [MenuComponent, TableComponent, LoaderDirective, ModelDirective],
  exports: [MenuComponent, TableComponent,LoaderDirective,ModelDirective],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ElementsModule { }
