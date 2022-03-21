import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PretupsNavComponent } from './pretups-nav.component';

describe('NavBarComponent', () => {
  let component: PretupsNavComponent;
  let fixture: ComponentFixture<PretupsNavComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PretupsNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PretupsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

function waitForAsync(arg0: () => void): (done: DoneFn) => Promise<void> {
    throw new Error('Function not implemented.');
}
