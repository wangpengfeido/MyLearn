import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app.routing.module';

import {AppComponent} from './app.component';

import {AaaArchitectureModule} from "./aaa-architecture/aaa-architecture.module";
import {AbaTemplateAndBindingModule} from "./aba-template-and-binding/aba-template-and-binding.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AaaArchitectureModule,
    AbaTemplateAndBindingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
