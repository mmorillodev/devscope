import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BgHardworkComponent } from './bg-hardwork.component';

describe('BgHardworkComponent', () => {
  let component: BgHardworkComponent;
  let fixture: ComponentFixture<BgHardworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BgHardworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BgHardworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
