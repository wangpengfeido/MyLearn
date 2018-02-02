import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AbaModulesComponent} from './aba-modules.component';
import { AcaComponentsComponent } from './aca-components.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AbaModulesComponent,
    AcaComponentsComponent,
  ],
  exports: [AbaModulesComponent]
})
export class AaaArchitectureModule {
}
