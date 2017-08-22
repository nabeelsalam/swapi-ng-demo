import { Component } from '@angular/core';
import { ApiService } from '../../services/apiService';

interface Results{
results:any
};

@Component({
  selector: 'people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
  people:any[];
  loading = true;
  constructor(private api:ApiService){
    this.api.callAPi('http://swapi.co/api/people')
    .subscribe((res:Results)=>{
      this.loading = false;
      this.people = res.results;
    });
  }
}
