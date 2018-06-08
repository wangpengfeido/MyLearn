import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AcaFrequentlyUsedModuleModule} from "./aca-frequently-used-module/aca-frequently-used-module.module";
import {AdaTypeOfFeatureModulesComponent} from './ada-type-of-feature-modules/ada-type-of-feature-modules.component';
import {AeaEntryComponentModule} from "./aea-entry-component/aea-entry-component.module";
import {AfaFeatureModulesModule} from "./afa-feature-modules/afa-feature-modules.module";
import {AhaSingletonServiceModule} from "./aha-singleton-service/aha-singleton-service.module";
import {AjaSharingModuleModule} from "./aja-sharing-module/aja-sharing-module.module";
import {AkaNgmoduleModule} from "./aka-ngmodule/aka-ngmodule.module";

@NgModule({
  imports: [
    CommonModule,
    AcaFrequentlyUsedModuleModule,
    AeaEntryComponentModule,
    AfaFeatureModulesModule,
    AhaSingletonServiceModule,
    AjaSharingModuleModule,
    AkaNgmoduleModule,
  ],
  declarations: [AdaTypeOfFeatureModulesComponent],
  exports: [],

})
export class AfaModuleModule {
}

