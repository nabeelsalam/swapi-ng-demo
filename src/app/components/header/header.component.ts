import { Component, Input } from '@angular/core';

@Component({
  selector: 'header-bar',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    @Input() heading:String; 
}
