import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  heading:String = 'Welcome to the Star Wars Universe...';
  tabs = [
    {
      name:"People",
      route:"people"
    },
    {
      name:"Planets",
      route:"planets"
    }
  ]
}
