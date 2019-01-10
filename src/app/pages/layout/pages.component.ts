import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    $('.footer-menu')
      .sidebar({
        transition: 'scale down',
        context: $('.main'),
        dimPage: false,
        closable: false
      })
  }
  toggleFooterSidebar() {
    $('.footer-menu')
      .sidebar('toggle');
  }

}
