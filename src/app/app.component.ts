import { Component, OnInit } from '@angular/core';
import { IMenuConfig } from './core/elements/menu/menu.component';
import { ITableConfig } from './core/elements/table/table.component';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {

    // fix menu
    //   $('.ui.sticky')
    // .sticky({
    //   context: '.main'
    // });
    $('.ui.sidebar')
  .sidebar({
    transition: 'scale down',
    context: $('.main'),
    dimPage: false, 
    closable: false
  })
  }
  toggleSidebar() {
    $('.ui.sidebar')
      .sidebar('toggle');
  }
}




