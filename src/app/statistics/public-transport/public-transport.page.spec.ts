import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PublicTransportPage } from './public-transport.page';

describe('PublicTransportPage', () => {
  let component: PublicTransportPage;
  let fixture: ComponentFixture<PublicTransportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicTransportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PublicTransportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
