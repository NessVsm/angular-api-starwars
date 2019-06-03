import { SidebarMenuService } from './../../services/api.service';
import { StartbuttonComponent } from './../startbutton/startbutton.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OpeningComponent } from './opening.component';

describe('OpeningComponent', () => {
  let component: OpeningComponent;
  let fixture: ComponentFixture<OpeningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpeningComponent, StartbuttonComponent ],
      providers: [SidebarMenuService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
