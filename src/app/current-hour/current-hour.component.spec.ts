import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentHourComponent } from './current-hour.component';

describe('CurrentHourComponent', () => {
  let component: CurrentHourComponent;
  let fixture: ComponentFixture<CurrentHourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentHourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentHourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
