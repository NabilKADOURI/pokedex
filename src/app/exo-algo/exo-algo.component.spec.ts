import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoAlgoComponent } from './exo-algo.component';

describe('ExoAlgoComponent', () => {
  let component: ExoAlgoComponent;
  let fixture: ComponentFixture<ExoAlgoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExoAlgoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExoAlgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
