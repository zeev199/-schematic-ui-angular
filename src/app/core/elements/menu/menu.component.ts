import { Component, OnInit } from '@angular/core';
import { BaseElement } from '../baseElement';
declare var $: any;
@Component({
  selector: 'elm-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent extends BaseElement<IMenuConfig> implements OnInit {

  initConfig(config: IMenuConfig): void {
    //
  }
  getName(): string {
    return 'Menu';
  }
  render(): void {
    $('.ui.menu a.item')
      .on('click', function () {
        $(this)
          .addClass('active')
          .siblings()
          .removeClass('active');
      });
  }

  constructor() {
    super();
  }
}
export interface IMenuConfig {
  menuItems: Array<{
    title: string;
    link?: string;
    children?: Array<IMenuConfig>;
  }>;

}
