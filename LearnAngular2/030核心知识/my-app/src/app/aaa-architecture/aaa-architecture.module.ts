import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";

import {AcaComponentsComponent} from './aca-components.component';
import {AdaDataBindingComponent} from './ada-data-binding/ada-data-binding.component';
import { AeaDirectiveComponent } from './aea-directive/aea-directive.component';
import { AfaServiceComponent } from './afa-service/afa-service.component';

//定义一个模块
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    AcaComponentsComponent,
    AdaDataBindingComponent,
    AeaDirectiveComponent,
    AfaServiceComponent,
  ],
  exports: [AcaComponentsComponent]
})
export class AaaArchitectureModule {
}
