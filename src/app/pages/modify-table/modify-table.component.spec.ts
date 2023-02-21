import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyTableComponent } from './modify-table.component';

describe('ModifyTableComponent', () => {
  let component: ModifyTableComponent;
  let fixture: ComponentFixture<ModifyTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
