import { Directive, Renderer2, ElementRef, EventEmitter, Input } from '@angular/core';
import { BaseElement } from '../baseElement';
declare var $: any;
@Directive({
  selector: '[elmModel]'
})
export class ModelDirective extends BaseElement<any> {
  render(): void {
    $('.ui.modal').modal({
      blurring: true
    },'setting', 'transition','horizontal flip');

  }
  getName(): string {
    return 'elmModel';
  }
  initConfig(config: any): void {
    throw new Error("Method not implemented.");
  }
  private active = new EventEmitter<boolean>();

  @Input('elmModel')
  public set elmModel(v: boolean) {
    this.active.emit(v);
  }
  constructor(private el: ElementRef, private renderer: Renderer2) {
    super();
    this.renderer.addClass(el.nativeElement, 'modal');
    this.active
    .subscribe(x => {
      $('.ui.modal').modal(x ? 'show' : 'hide');
    });
  }

}
