import { HttpClientModule } from '@angular/common/http';
import { ApiService, SidebarMenuService } from './services/api.service';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarmenuComponent } from './components/sidebarmenu/sidebarmenu.component';
import { OpeningComponent } from './components/opening/opening.component';
import { StartbuttonComponent } from './components/startbutton/startbutton.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { PeopleComponent } from './components/people/people.component';
import { FilmsComponent } from './components/films/films.component';
import { SpeciesComponent } from './components/species/species.component';
import { StarshipsComponent } from './components/starships/starships.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { Error404Component } from './error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    OpeningComponent,
    StartbuttonComponent,
    PlanetsComponent,
    PeopleComponent,
    SidebarmenuComponent,
    FilmsComponent,
    SpeciesComponent,
    StarshipsComponent,
    VehiclesComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports: [
    RouterModule
  ],
  providers: [ApiService, SidebarMenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
