import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataFromApiComponent } from './data-from-api.component';

describe('DataFromApiComponent', () => {
  let component: DataFromApiComponent;
  let fixture: ComponentFixture<DataFromApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataFromApiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataFromApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
