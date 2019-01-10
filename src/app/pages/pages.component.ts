import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-pages',
  template: `<router-outlet></router-outlet>`
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
