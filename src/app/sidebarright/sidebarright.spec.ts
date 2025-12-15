import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sidebarright } from './sidebarright';

describe('Sidebarright', () => {
  let component: Sidebarright;
  let fixture: ComponentFixture<Sidebarright>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sidebarright]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sidebarright);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
