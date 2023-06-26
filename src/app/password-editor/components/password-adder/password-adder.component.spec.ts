import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordAdderComponent } from './password-adder.component';

describe('PasswordAdderComponent', () => {
  let component: PasswordAdderComponent;
  let fixture: ComponentFixture<PasswordAdderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PasswordAdderComponent]
    });
    fixture = TestBed.createComponent(PasswordAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
