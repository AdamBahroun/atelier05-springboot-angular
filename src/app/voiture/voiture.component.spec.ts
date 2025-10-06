import { ComponentFixture, TestBed } from '@angular/core/testing';

import { voituresComponent } from './voiture.component';

describe('VoitureComponent', () => {
  let component: voituresComponent;
  let fixture: ComponentFixture<voituresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [voituresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(voituresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
