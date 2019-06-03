import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartbuttonComponent } from './startbutton.component';

describe('StartbuttonComponent', () => {
  let component: StartbuttonComponent;
  let fixture: ComponentFixture<StartbuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartbuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
