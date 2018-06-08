import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app.routing.module';

import {AppComponent} from './app.component';

import {AaaArchitectureModule} from "./aaa-architecture/aaa-architecture.module";
import {AbaTemplateAndBindingModule} from "./aba-template-and-binding/aba-template-and-binding.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AcaFormModule} from "./aca-form/aca-form.module";
import {AeaBootstrapModule} from "./aea-bootstrap/aea-bootstrap.module";
import {AfaModuleModule} from "./afa-module/afa-module.module";
import {AgaDependencyInjectionModule} from "./aga-dependency-injection/aga-dependency-injection.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AaaArchitectureModule,
    AbaTemplateAndBindingModule,
    AcaFormModule,
    AeaBootstrapModule,
    AfaModuleModule,
    AgaDependencyInjectionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
