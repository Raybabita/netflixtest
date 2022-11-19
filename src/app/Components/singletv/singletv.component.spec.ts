import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingletvComponent } from './singletv.component';

describe('SingletvComponent', () => {
  let component: SingletvComponent;
  let fixture: ComponentFixture<SingletvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingletvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingletvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
