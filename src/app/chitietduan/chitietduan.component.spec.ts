import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitietduanComponent } from './chitietduan.component';

describe('ChitietduanComponent', () => {
  let component: ChitietduanComponent;
  let fixture: ComponentFixture<ChitietduanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChitietduanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChitietduanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
