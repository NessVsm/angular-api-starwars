import { ApiService, SidebarMenuService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {
  vehicle: any;
  type = 'vehicles';
  totalElements = 39;

  loading = true;

  constructor(private ApiService: ApiService, private SidebarMenuService: SidebarMenuService) { }

  ngOnInit() {
    this.vehicleInfo();
  }
  vehicleInfo() {
    this.ApiService.findType(this.type, this.totalElements).subscribe(data => {
      this.SidebarMenuService.showSidebar();
      this.vehicle = data;
      this.loading = false;
    });
  }

}
