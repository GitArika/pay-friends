import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastService } from 'angular-toastify';
import { PaymentFactory } from 'src/app/factorys/payment.factory';
import { DateHelper } from 'src/app/services/date-helper/date.helper';
import { PaymentsService } from 'src/app/services/payments/payments.service';
import { IncludeValidator } from 'src/app/services/validators/include.validator';
import { Validator } from 'src/app/services/validators/validator';

import { IncludeDialogComponent } from './include.dialog.component';

describe('IncludeDialogComponent', () => {
  let component: IncludeDialogComponent;
  let fixture: ComponentFixture<IncludeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IncludeDialogComponent],
      imports: [HttpClientModule, ReactiveFormsModule],
      providers: [PaymentsService, ToastService, DateHelper, PaymentFactory, IncludeValidator, Validator]
    }).compileComponents();
    
    fixture = TestBed.createComponent(IncludeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
