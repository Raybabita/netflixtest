import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvepisodeComponent } from './tvepisode.component';

describe('TvepisodeComponent', () => {
  let component: TvepisodeComponent;
  let fixture: ComponentFixture<TvepisodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvepisodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvepisodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
