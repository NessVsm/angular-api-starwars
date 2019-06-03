import { SidebarMenuService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebarmenu',
  templateUrl: './sidebarmenu.component.html',
  styleUrls: ['./sidebarmenu.component.scss']
})
export class SidebarmenuComponent implements OnInit {

  constructor(private sidebar: SidebarMenuService) { }

  ngOnInit() {
  }

}
