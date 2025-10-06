import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddvoituresComponent } from './add-voiture.component';

describe('AddVoitureComponent', () => {
  let component: AddvoituresComponent;
  let fixture: ComponentFixture<AddvoituresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddvoituresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddvoituresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
