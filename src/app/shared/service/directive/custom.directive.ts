import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective implements OnInit{
  @Input() tColor:any;

  constructor(private el:ElementRef) { }

  ngOnInit(): void {
      
    this.el.nativeElement.style.color=this.tColor
  }


}
