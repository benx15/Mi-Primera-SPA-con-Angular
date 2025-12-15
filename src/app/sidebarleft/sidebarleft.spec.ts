import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sidebarleft } from './sidebarleft';

describe('Sidebarleft', () => {
  let component: Sidebarleft;
  let fixture: ComponentFixture<Sidebarleft>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sidebarleft]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sidebarleft);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
