import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeComponentAutoCompleteComponent } from './tree-component-auto-complete.component';

describe('TreeComponentAutoCompleteComponent', () => {
  let component: TreeComponentAutoCompleteComponent;
  let fixture: ComponentFixture<TreeComponentAutoCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeComponentAutoCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeComponentAutoCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
