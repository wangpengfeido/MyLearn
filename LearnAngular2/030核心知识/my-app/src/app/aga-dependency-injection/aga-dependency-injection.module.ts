import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AbaDependencyInjectionComponent} from './aba-dependency-injection/aba-dependency-injection.component';
import {AgaAbaAbaService} from "./aba-dependency-injection/services/aga-aba-aba.service";
import {AcaHierarchicalDependencyInjectorsComponent} from './aca-hierarchical-dependency-injectors/aca-hierarchical-dependency-injectors.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AbaDependencyInjectionComponent, AcaHierarchicalDependencyInjectorsComponent,],
  providers: [AgaAbaAbaService]
})
export class AgaDependencyInjectionModule {
}
