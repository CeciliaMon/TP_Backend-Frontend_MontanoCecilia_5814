import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransaccionConversorComponent } from './transaccion-conversor.component';

describe('TransaccionConversorComponent', () => {
  let component: TransaccionConversorComponent;
  let fixture: ComponentFixture<TransaccionConversorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransaccionConversorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransaccionConversorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
