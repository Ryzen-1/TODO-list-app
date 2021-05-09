import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TODOsComponent } from './todos.component';

describe('TODOsComponent', () => {
  let component: TODOsComponent;
  let fixture: ComponentFixture<TODOsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TODOsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TODOsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
