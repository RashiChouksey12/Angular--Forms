import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TampleteComponent } from './tamplete.component';

describe('TampleteComponent', () => {
  let component: TampleteComponent;
  let fixture: ComponentFixture<TampleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TampleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TampleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
