import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AaaDisplayingDataComponent} from './aaa-displaying-data/aaa-displaying-data.component';
import {AbaTemplateSyntaxComponent} from './aba-template-syntax/aba-template-syntax.component';
import {AbaAaaComponent} from './aba-template-syntax/aba-aaa/aba-aaa.component';
import {AbaAbaComponent} from './aba-template-syntax/aba-aba/aba-aba.component';
import {FormsModule} from "@angular/forms";
import {AbaAcaComponent} from './aba-template-syntax/aba-aca/aba-aca.component';
import {AcaLifecycleHookComponent} from './aca-lifecycle-hook/aca-lifecycle-hook.component';
import {AbaAcaAaaComponent} from './aca-lifecycle-hook/aba-aca-aaa/aba-aca-aaa.component';
import {AdaComponentCommunicationComponent} from './ada-component-communication/ada-component-communication.component';
import {AbaAdaAaaComponent} from './ada-component-communication/aba-ada-aaa/aba-ada-aaa.component';
import {AbaAdaAbaComponent} from './ada-component-communication/aba-ada-aba/aba-ada-aba.component';
import {AbaAdaAcaComponent} from './ada-component-communication/aba-ada-aca/aba-ada-aca.component';
import {AeaComponentStyleComponent} from './aea-component-style/aea-component-style.component';
import {AbaAeaAaaComponent} from './aea-component-style/aba-aea-aaa/aba-aea-aaa.component';
import {AbaAeaAbaComponent} from './aea-component-style/aba-aea-aba/aba-aea-aba.component';
import {AbaAeaAcaComponent} from './aea-component-style/aba-aea-aca/aba-aea-aca.component';
import {AfaDynamicComponentComponent} from './afa-dynamic-component/afa-dynamic-component.component';
import {AgaAttributeDirectiveComponent} from './aga-attribute-directive/aga-attribute-directive.component';
import {AbaAgaAaaDirective} from './aga-attribute-directive/aba-aga-aaa.directive';
import {AbaAfaInsertOneComponent} from './afa-dynamic-component/aba-afa-insert-one/aba-afa-insert-one.component';
import {AbaAfaInsertTwoComponent} from './afa-dynamic-component/aba-afa-insert-two/aba-afa-insert-two.component';
import {AbaAfaHostDirective} from './afa-dynamic-component/aba-afa-host.directive';
import {AbaAfaDynamicComponentComponent} from './afa-dynamic-component/aba-afa-dynamic-component/aba-afa-dynamic-component.component';
import {AhaStructuralDirectivesComponent} from './aha-structural-directives/aha-structural-directives.component';
import {AbaAhaAaaDirective} from './aha-structural-directives/aba-aha-aaa.directive';
import {AjaAnimationComponent} from './aja-animation/aja-animation.component';
import {AiaPipeComponent} from './aia-pipe/aia-pipe.component';
import {AbaAiaAaaPipePipe} from './aia-pipe/aba-aia-aaa-pipe/aba-aia-aaa-pipe.pipe';
import { AbaAiaAbaImpureDatePipe } from './aia-pipe/aba-aia-aba-impure-date/aba-aia-aba-impure-date.pipe';
import { AbaAiaAcaCachePipePipe } from './aia-pipe/aba-aia-aca-cache-pipe/aba-aia-aca-cache-pipe.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [AaaDisplayingDataComponent, AbaTemplateSyntaxComponent, AbaAaaComponent, AbaAbaComponent, AbaAcaComponent,
    AcaLifecycleHookComponent, AbaAcaAaaComponent, AdaComponentCommunicationComponent, AbaAdaAaaComponent, AbaAdaAbaComponent,
    AbaAdaAcaComponent, AeaComponentStyleComponent, AbaAeaAaaComponent, AbaAeaAbaComponent, AbaAeaAcaComponent,
    AfaDynamicComponentComponent, AgaAttributeDirectiveComponent, AbaAgaAaaDirective, AbaAfaInsertOneComponent, AbaAfaInsertTwoComponent,
    AbaAfaHostDirective, AbaAfaDynamicComponentComponent, AhaStructuralDirectivesComponent, AbaAhaAaaDirective, AjaAnimationComponent,
    AiaPipeComponent, AbaAiaAaaPipePipe, AbaAiaAbaImpureDatePipe, AbaAiaAcaCachePipePipe],
  entryComponents: [AbaAfaInsertOneComponent, AbaAfaInsertTwoComponent],
})
export class AbaTemplateAndBindingModule {
}
