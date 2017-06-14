import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackRideComponent } from './track-ride.component';

describe('TrackRideComponent', () => {
  let component: TrackRideComponent;
  let fixture: ComponentFixture<TrackRideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackRideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackRideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
