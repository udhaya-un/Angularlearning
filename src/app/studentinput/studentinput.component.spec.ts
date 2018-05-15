import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentinputComponent } from './studentinput.component';

describe('StudentinputComponent', () => {
  let component: StudentinputComponent;
  let fixture: ComponentFixture<StudentinputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentinputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
