import { Component } from '@angular/core';
import { ApiService } from '../../services/apiService';

interface Results{
  results:any
  };

@Component({
  selector: 'planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent {
  planets:any[];
  loading = true;
  constructor(private api:ApiService){
    this.api.callAPi('http://swapi.co/api/planets')
    .subscribe((res:Results)=>{
      this.loading = false;
      this.planets = res.results;
    });
  }
}
