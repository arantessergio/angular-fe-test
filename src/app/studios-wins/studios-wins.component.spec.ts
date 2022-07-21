import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudiosWinsComponent } from './studios-wins.component';

describe('StudiosWinsComponent', () => {
  let component: StudiosWinsComponent;
  let fixture: ComponentFixture<StudiosWinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudiosWinsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudiosWinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
