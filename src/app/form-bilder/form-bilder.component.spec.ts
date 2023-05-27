import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBilderComponent } from './form-bilder.component';

describe('FormBilderComponent', () => {
  let component: FormBilderComponent;
  let fixture: ComponentFixture<FormBilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBilderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormBilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
