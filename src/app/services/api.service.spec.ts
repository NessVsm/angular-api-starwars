import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ApiService, SidebarMenuService} from './api.service';

describe('ApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: ApiService = TestBed.get(ApiService);
    expect(service).toBeTruthy();
  });
});

describe('SidebarMenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [SidebarMenuService]
  }));

  it('should be created', () => {
    const menuservice: SidebarMenuService = TestBed.get(SidebarMenuService);
    expect(menuservice).toBeTruthy();
  });
});
