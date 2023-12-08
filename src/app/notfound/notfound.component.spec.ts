import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NOTfoundComponent } from './notfound.component';

describe('NOTfoundComponent', () => {
  let component: NOTfoundComponent;
  let fixture: ComponentFixture<NOTfoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NOTfoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NOTfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
