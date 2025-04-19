import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanVideoComponent } from './scan-video.component';

describe('ScanVideoComponent', () => {
  let component: ScanVideoComponent;
  let fixture: ComponentFixture<ScanVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScanVideoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScanVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
