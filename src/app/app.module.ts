import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Route }   from '@angular/router';
import {HttpClientModule} from '@angular/common/http';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdToolbarModule} from '@angular/material';
import {MdTabsModule} from '@angular/material';
import {MdListModule} from '@angular/material';
import {MdIconModule} from '@angular/material';
import {MdProgressSpinnerModule} from '@angular/material';

import { ApiService } from './services/apiService';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavMenuComponent } from './components/navMenu/navMenu.component';
import { PeopleComponent } from './components/people/people.component';
import { PlanetsComponent } from './components/planets/planets.component';

const routes:Route[] = [
  {
    path: '',
    redirectTo: 'people',
    pathMatch: 'full'
  },
  {
    path: 'people',
    component: PeopleComponent
  },
  {
    path: 'planets',
    component: PlanetsComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavMenuComponent,
    PeopleComponent,
    PlanetsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MdToolbarModule,
    MdTabsModule,
    MdListModule,
    MdIconModule,
    MdProgressSpinnerModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
