import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastService } from 'angular-toastify';
import { PaymentFactory } from 'src/app/factorys/payment.factory';
import { DateHelper } from 'src/app/services/date-helper/date.helper';
import { PaymentsService } from 'src/app/services/payments/payments.service';
import { EditValidator } from 'src/app/services/validators/edit.validator';
import { Validator } from 'src/app/services/validators/validator';

import { EditDialogComponent } from './edit.dialog.component';

describe('EditDialogComponent', () => {
  let component: EditDialogComponent;
  let fixture: ComponentFixture<EditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditDialogComponent],
      imports: [HttpClientModule, ReactiveFormsModule],
      providers: [PaymentsService, ToastService, DateHelper, PaymentFactory, EditValidator, Validator]
    }).compileComponents();

    fixture = TestBed.createComponent(EditDialogComponent);
    component = fixture.componentInstance;
    component.payment = {
      id: 1,
      name: 'Ariel',
      username: 'Ariel_Evangelista',
      title: 'Dentista',
      value: 150,
      date: new Date(),
      image: '',
      isPayed: true,
    }
    component.closeEvent({ className: 'modal' } as any);
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
