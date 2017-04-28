import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ShedulesListComponent} from './schedules-list.component';

describe('ShedulesListComponent', () => {
  let component: ShedulesListComponent;
  let fixture: ComponentFixture<ShedulesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShedulesListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShedulesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
