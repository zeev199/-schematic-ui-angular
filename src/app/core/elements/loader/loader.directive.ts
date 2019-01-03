import { Directive, ElementRef, Renderer2, OnInit, Input, EventEmitter } from '@angular/core';

@Directive({
  selector: '[elmLoader]'
})
export class LoaderDirective implements OnInit {
  classArr: Array<string> = ['ui', 'active', 'inverted', 'dimmer'];
  loaderChildArr: Array<string> = ['ui', 'text', 'loader'];
  private active = new EventEmitter<boolean>();

  @Input('elmLoader')
  public set elmLoader(v: boolean) {
    this.active.emit(v);
  }
  
  ngOnInit(): void {
    const child = this.renderer.createElement('div');
    const loaderChild = this.renderer.createElement('div');
    this.classArr.forEach(x => {
      this.renderer.addClass(child, x);
    });
    this.loaderChildArr.forEach(x => {
      this.renderer.addClass(loaderChild, x);
    });
    loaderChild.innerHTML = 'Loading';
    this.renderer.appendChild(child, loaderChild);
    this.renderer.appendChild(this.el.nativeElement, child);
    this.active.subscribe(x => {
      if (x)
        this.renderer.addClass(child, 'active');
      else
        this.renderer.removeClass(child, 'active');
    })
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }
}
