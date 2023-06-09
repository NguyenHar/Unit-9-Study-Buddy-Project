import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromptListComponent } from './prompt-list.component';

describe('PromptListComponent', () => {
  let component: PromptListComponent;
  let fixture: ComponentFixture<PromptListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromptListComponent]
    });
    fixture = TestBed.createComponent(PromptListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
