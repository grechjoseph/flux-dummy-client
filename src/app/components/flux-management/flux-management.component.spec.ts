import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluxManagementComponent } from './flux-management.component';

describe('FluxManagementComponent', () => {
  let component: FluxManagementComponent;
  let fixture: ComponentFixture<FluxManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FluxManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FluxManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
