import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AhaAaaSingletonServiceModule} from "./aha-aaa-singleton-service/aha-aaa-singleton-service.module";
import {AhaAbaForRootModule} from "./aha-aba-for-root/aha-aba-for-root.module";
import {AhaAcaPreventReimportModule} from "./aha-aca-prevent-reimport/aha-aca-prevent-reimport.module";

@NgModule({
  imports: [
    CommonModule,
    AhaAaaSingletonServiceModule,
    AhaAbaForRootModule.forRoot({}),
    AhaAcaPreventReimportModule,
  ],
  declarations: []
})
export class AhaSingletonServiceModule {
}
