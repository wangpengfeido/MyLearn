//这里定义了路由
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {AcaComponentsComponent} from './aaa-architecture/aca-components.component';
import {AdaDataBindingComponent} from "./aaa-architecture/ada-data-binding/ada-data-binding.component";
import {AeaDirectiveComponent} from "./aaa-architecture/aea-directive/aea-directive.component";
import {AfaServiceComponent} from "./aaa-architecture/afa-service/afa-service.component";

import {AaaDisplayingDataComponent} from "./aba-template-and-binding/aaa-displaying-data/aaa-displaying-data.component";
import {AbaTemplateSyntaxComponent} from "./aba-template-and-binding/aba-template-syntax/aba-template-syntax.component";
import {AcaLifecycleHookComponent} from "./aba-template-and-binding/aca-lifecycle-hook/aca-lifecycle-hook.component";
import {AdaComponentCommunicationComponent} from "./aba-template-and-binding/ada-component-communication/ada-component-communication.component";
import {AeaComponentStyleComponent} from "./aba-template-and-binding/aea-component-style/aea-component-style.component";
import {AfaDynamicComponentComponent} from "./aba-template-and-binding/afa-dynamic-component/afa-dynamic-component.component";
import {AgaAttributeDirectiveComponent} from "./aba-template-and-binding/aga-attribute-directive/aga-attribute-directive.component";
import {AhaStructuralDirectivesComponent} from "./aba-template-and-binding/aha-structural-directives/aha-structural-directives.component";
import {AjaAnimationComponent} from "./aba-template-and-binding/aja-animation/aja-animation.component";
import {AaaUserInputComponent} from "./aca-form/aaa-user-input/aaa-user-input.component";
import {AiaPipeComponent} from "./aba-template-and-binding/aia-pipe/aia-pipe.component";
import {AbaTemplateDrivenFormComponent} from "./aca-form/aba-template-driven-form/aba-template-driven-form.component";
import {AdaReactiveFormComponent} from "./aca-form/ada-reactive-form/ada-reactive-form.component";
import {AcaFormValidationComponent} from "./aca-form/aca-form-validation/aca-form-validation.component";
import {AeaDynamicFormComponent} from "./aca-form/aea-dynamic-form/aea-dynamic-form.component";
import {AeaAaaComponent} from "./aea-bootstrap/aea-aaa/aea-aaa.component";
import {AdaTypeOfFeatureModulesComponent} from "./afa-module/ada-type-of-feature-modules/ada-type-of-feature-modules.component";
import {AbaDependencyInjectionComponent} from "app/aga-dependency-injection/aba-dependency-injection/aba-dependency-injection.component";
import {AcaHierarchicalDependencyInjectorsComponent} from "./aga-dependency-injection/aca-hierarchical-dependency-injectors/aca-hierarchical-dependency-injectors.component";

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
  }, {
    path: 'lifecycleHook',
    component: AcaLifecycleHookComponent,
  }, {
    path: 'componentCommunication',
    component: AdaComponentCommunicationComponent,
  }, {
    path: 'componentStyle',
    component: AeaComponentStyleComponent,
  }, {
    path: 'dynamicComponent',
    component: AfaDynamicComponentComponent,
  }, {
    path: 'attributeDirective',
    component: AgaAttributeDirectiveComponent,
  }, {
    path: 'structuralDirectives',
    component: AhaStructuralDirectivesComponent,
  }, {
    path: 'pipe',
    component: AiaPipeComponent,
  }, {
    path: 'animation',
    component: AjaAnimationComponent,
  }, {
    path: 'userInput',
    component: AaaUserInputComponent,
  }, {
    path: 'templateDrivenForm',
    component: AbaTemplateDrivenFormComponent,
  }, {
    path: 'formValidation',
    component: AcaFormValidationComponent,
  }, {
    path: 'reactiveForm',
    component: AdaReactiveFormComponent,
  }, {
    path: 'dynamicForm',
    component: AeaDynamicFormComponent,
  }, {
    path: 'aeaAaa',
    component: AeaAaaComponent,
  }, {
    path: 'adaTypeOfFeatureModulesComponent',
    component: AdaTypeOfFeatureModulesComponent,
  }, {
    path: 'AbaDependencyInjection',
    component: AbaDependencyInjectionComponent,
  }, {
    path: 'AcaHierarchicalDependencyInjectorsComponent',
    component: AcaHierarchicalDependencyInjectorsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}





