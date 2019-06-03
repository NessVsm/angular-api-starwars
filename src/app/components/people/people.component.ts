import { ApiService, SidebarMenuService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  people: any;
  type = 'people';
  totalElements = 87;

  loading = true;

  constructor(private ApiService: ApiService, private SidebarMenuService: SidebarMenuService) { }

  ngOnInit() {
    this.peopleInfo();
  }

  peopleInfo() {
    this.ApiService.findType(this.type, this.totalElements).subscribe(data => {
      this.SidebarMenuService.showSidebar();
      this.people = data;
      this.loading = false;
    });
  }
}
