import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    });
  });

  // 1st spec (test)
  it('should create the app', async(() => {
    // Create instance of AppComponent.
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    // Make sure instance was created.
    expect(app).toBeTruthy();
  }));

  // 2nd spec (test)
  it(`should have as title 'app works!'`, async(() => {
    // Create instance of AppComponent.
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    // Check property.
    expect(app.title).toEqual('app works!');
  }));

  it('display my name', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.debugElement.componentInstance;
    expect(app.myName).toEqual('Andrew');
  }));
});
