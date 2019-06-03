import { ApiService, SidebarMenuService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.scss']
})
export class SpeciesComponent implements OnInit {
  specie: any;
  type = 'species';
  totalElements = 37;

  loading = true;

  constructor(private ApiService: ApiService, private SidebarMenuService: SidebarMenuService) { }

  ngOnInit() {
    this.specieInfo();
  }

  specieInfo() {
    this.ApiService.findType(this.type, this.totalElements).subscribe(data => {
      this.SidebarMenuService.showSidebar();
      this.specie = data;
      this.loading = false;
    });
  }
}
