import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutFloatingCardComponent } from './about-floating-card.component';

describe('AboutFloatingCardComponent', () => {
  let component: AboutFloatingCardComponent;
  let fixture: ComponentFixture<AboutFloatingCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutFloatingCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutFloatingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
