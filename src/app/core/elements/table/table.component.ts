import { Component, OnInit } from '@angular/core';
import { BaseElement } from '../baseElement';
declare var $: any;
@Component({
  selector: 'elm-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent extends BaseElement<ITableConfig> {
  render(): void {
    // $('table').DataTable(this.config.configTable);
    $('table').DataTable({ ...this.config.basicConfigTable, ...this.config.moreConfigTable });
  }
  getName(): string {
    return 'Table';
  }
  initConfig(config: ITableConfig): void {
  }

  constructor() {
    super();
  }
}
export interface ITableConfig {
  basicConfigTable: {
    responsive?: boolean,
    paging?: boolean,
    ordering?: boolean,
    info?: boolean,
    searching?: boolean,
  };
  moreConfigTable?: any;

}
