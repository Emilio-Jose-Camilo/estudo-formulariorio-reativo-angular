import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGorupComponent } from './form-gorup.component';

describe('FormGorupComponent', () => {
  let component: FormGorupComponent;
  let fixture: ComponentFixture<FormGorupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormGorupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormGorupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
