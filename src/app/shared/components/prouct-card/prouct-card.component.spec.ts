import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProuctCardComponent } from './prouct-card.component';

describe('ProuctCardComponent', () => {
  let component: ProuctCardComponent;
  let fixture: ComponentFixture<ProuctCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProuctCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProuctCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
