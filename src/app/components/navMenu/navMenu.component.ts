import { Component, Input } from '@angular/core';

@Component({
  selector: 'nav-menu',
  templateUrl: './navMenu.component.html',
  styleUrls: ['./navMenu.component.css']
})
export class NavMenuComponent {
    @Input() tabs:any[]; 
}
