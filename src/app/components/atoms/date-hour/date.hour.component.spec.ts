import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { DpDatePickerModule } from 'ng2-date-picker';

import { DateHourComponent } from './date.hour.component';

describe('DateHourComponent', () => {
  let component: DateHourComponent;
  let fixture: ComponentFixture<DateHourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DateHourComponent],
      imports: [FormsModule, DpDatePickerModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateHourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
