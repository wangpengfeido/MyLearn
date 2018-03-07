//这里定义了路由
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {AcaComponentsComponent} from './aaa-architecture/aca-components.component';
import {AdaDataBindingComponent} from "./aaa-architecture/ada-data-binding/ada-data-binding.component";
import {AeaDirectiveComponent} from "./aaa-architecture/aea-directive/aea-directive.component";
import {AfaServiceComponent} from "./aaa-architecture/afa-service/afa-service.component";

import {AaaDisplayingDataComponent} from "./aba-template-and-binding/aaa-displaying-data/aaa-displaying-data.component";
import {AbaTemplateSyntaxComponent} from "./aba-template-and-binding/aba-template-syntax/aba-template-syntax.component";

const routes: Routes = [
  {
    path: 'architecture',
    component: AcaComponentsComponent
  }, {
    path: 'dataBinding',
    component: AdaDataBindingComponent,
  }, {
    path: 'directive',
    component: AeaDirectiveComponent,
  }, {
    path: 'service',
    component: AfaServiceComponent,
  }, {
    path: 'displayingData',
    component: AaaDisplayingDataComponent,
  }, {
    path: 'templateSyntax',
    component: AbaTemplateSyntaxComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}





