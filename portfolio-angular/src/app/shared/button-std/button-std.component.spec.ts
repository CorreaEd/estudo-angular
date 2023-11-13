import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonStdComponent } from './button-std.component';

describe('ButtonStdComponent', () => {
  let component: ButtonStdComponent;
  let fixture: ComponentFixture<ButtonStdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonStdComponent]
    });
    fixture = TestBed.createComponent(ButtonStdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
