//这里定义了路由
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {AcaComponentsComponent} from './aaa-architecture/aca-components.component';
import {AdaDataBindingComponent} from "./aaa-architecture/ada-data-binding/ada-data-binding.component";

const routes: Routes = [
  {
    path: 'architecture',
    component: AcaComponentsComponent
  }, {
    path: 'dataBinding',
    component: AdaDataBindingComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}





