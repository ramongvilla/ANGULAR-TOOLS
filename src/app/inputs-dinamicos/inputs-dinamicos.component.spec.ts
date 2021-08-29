import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputsDinamicosComponent } from './inputs-dinamicos.component';

describe('InputsDinamicosComponent', () => {
  let component: InputsDinamicosComponent;
  let fixture: ComponentFixture<InputsDinamicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputsDinamicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputsDinamicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
