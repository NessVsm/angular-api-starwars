import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SidebarMenuService} from './../../services/api.service';
import { SidebarmenuComponent } from './sidebarmenu.component';
import { from } from 'rxjs';

describe('SidebarmenuComponent', () => {
  let component: SidebarmenuComponent;
  let fixture: ComponentFixture<SidebarmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarmenuComponent ],
      providers: [SidebarMenuService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
