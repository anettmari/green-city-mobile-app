import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CyclistPage } from './cyclist.page';

describe('CyclistPage', () => {
  let component: CyclistPage;
  let fixture: ComponentFixture<CyclistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CyclistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CyclistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
