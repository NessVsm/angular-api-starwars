import { ApiService, SidebarMenuService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {
  planeta: any;
  type =  'planets';
  totalElements = 61;

  loading = true;

  constructor(private ApiService: ApiService, private SidebarMenuService: SidebarMenuService) { }

  ngOnInit() {
    this.planetInfo();
  }

  planetInfo() {
    this.SidebarMenuService.showSidebar();

    this.ApiService.findType(this.type, this.totalElements).subscribe(data => {
      this.planeta = data;
      this.loading = false;
    });
  }
}
