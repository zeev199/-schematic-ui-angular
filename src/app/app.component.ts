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
    setTimeout(() => {
      this.Loader = true;
      setTimeout(() => {
        // this.Loader = false;
      }, 1000);
    }, 1000);
  }
  title = 'ClientApp';
  Loader = true;
  menu: IMenuConfig = {
    menuItems: [
      { title: "בדיקה", link: "fsdf" },
      { title: "בדיקה", link: "gre" },
      { title: "בדיקה", link: "ftrsdf" }
    ]
  }
  tblConfig: ITableConfig = {
    basicConfigTable: { ordering: true, paging: false },
    moreConfigTable: { searching: true }
  }
}
