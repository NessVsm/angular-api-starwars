import { ApiService, SidebarMenuService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit {
  starship: any;
  type = 'starships';
  totalElements = 23;

  loading = true;

  constructor(private ApiService: ApiService, private SidebarMenuService: SidebarMenuService) { }

  ngOnInit() {
    this.starshipInfo();
  }

  starshipInfo() {
    this.ApiService.findType(this.type, this.totalElements).subscribe(data => {
      this.SidebarMenuService.showSidebar();
      this.starship = data;
      this.loading = false;
    });
  }
}
