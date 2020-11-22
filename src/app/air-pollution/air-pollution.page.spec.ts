import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AirPollutionPage } from './air-pollution.page';

describe('AirPollutionPage', () => {
  let component: AirPollutionPage;
  let fixture: ComponentFixture<AirPollutionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirPollutionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AirPollutionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
