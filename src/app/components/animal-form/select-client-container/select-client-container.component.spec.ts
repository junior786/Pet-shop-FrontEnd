import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectClientContainerComponent } from './select-client-container.component';

describe('SelectClientContainerComponent', () => {
  let component: SelectClientContainerComponent;
  let fixture: ComponentFixture<SelectClientContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectClientContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectClientContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
