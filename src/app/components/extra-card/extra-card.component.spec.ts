import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraCardComponent } from './extra-card.component';

describe('ExtraCardComponent', () => {
  let component: ExtraCardComponent;
  let fixture: ComponentFixture<ExtraCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtraCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtraCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
