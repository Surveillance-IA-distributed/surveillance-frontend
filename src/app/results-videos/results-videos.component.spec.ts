import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsVideosComponent } from './results-videos.component';

describe('ResultsVideosComponent', () => {
  let component: ResultsVideosComponent;
  let fixture: ComponentFixture<ResultsVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultsVideosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultsVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
