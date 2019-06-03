import { ApiService, SidebarMenuService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {
  film: any;
  type = 'films';
  totalElements = 7;

  loading = true;

  constructor(private ApiService: ApiService, private SidebarMenuService: SidebarMenuService) { }

  ngOnInit() {
    this.SidebarMenuService.showSidebar();
    this.filmInfo();
  }

  filmInfo() {
    this.ApiService.findType(this.type, this.totalElements).subscribe(data => {
      this.film = data;
      this.loading = false;
    });
  }
}
