import { Directive, ElementRef, Renderer2, HostListener, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})

export class StyleDirective {
  @Input('appStyle') color: string = 'blue'
  @Input() fontWeight: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
    //console.log(renderer)
    // this.renderer.setStyle(this.elRef.nativeElement, 'color','blue')
  }

  @HostBinding('style.color') elColor = null;

  @HostListener('click', ['$event.target']) onClick(event: Event) {
    console.log(event)
  }

  @HostListener('mouseenter') onEnter() {
    this.elColor = this.color;
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', this.color)
    // this.renderer.setStyle(this.elRef.nativeElement, 'fontWeight', this.fontWeight)
  }

  @HostListener('mouseleave') onOut() {
    this.elColor = null
    // this.renderer.setStyle(this.elRef.nativeElement, 'color',null)
    // this.renderer.setStyle(this.elRef.nativeElement, 'fontWeight',null)
  }

}