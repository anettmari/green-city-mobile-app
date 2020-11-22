import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Co2CalculatorPage } from './co2-calculator.page';

describe('Co2CalculatorPage', () => {
  let component: Co2CalculatorPage;
  let fixture: ComponentFixture<Co2CalculatorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Co2CalculatorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Co2CalculatorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
