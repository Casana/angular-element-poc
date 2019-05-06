import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from "@angular/elements";
import { MyLoginComponent } from './my-login/my-login.component';

@NgModule({
  declarations: [
    MyLoginComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [
    MyLoginComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {
  constructor(
    private injector: Injector
  ) {
    const loginWeb = createCustomElement(MyLoginComponent, { injector });
    customElements.define('my-web-login', loginWeb);
  }
  ngDoBootstrap() {}
}
