import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app.routing.module';

import {AppComponent} from './app.component';

import {AaaArchitectureModule} from "./aaa-architecture/aaa-architecture.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AaaArchitectureModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
