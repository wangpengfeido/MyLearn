import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AaaDisplayingDataComponent } from './aaa-displaying-data/aaa-displaying-data.component';
import { AbaTemplateSyntaxComponent } from './aba-template-syntax/aba-template-syntax.component';
import { AbaAaaComponent } from './aba-template-syntax/aba-aaa/aba-aaa.component';
import { AbaAbaComponent } from './aba-template-syntax/aba-aba/aba-aba.component';
import {FormsModule} from "@angular/forms";
import { AbaAcaComponent } from './aba-template-syntax/aba-aca/aba-aca.component';
import { AcaLifecycleHookComponent } from './aca-lifecycle-hook/aca-lifecycle-hook.component';
import { AbaAcaAaaComponent } from './aca-lifecycle-hook/aba-aca-aaa/aba-aca-aaa.component';
import { AdaComponentCommunicationComponent } from './ada-component-communication/ada-component-communication.component';
import { AbaAdaAaaComponent } from './ada-component-communication/aba-ada-aaa/aba-ada-aaa.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [AaaDisplayingDataComponent, AbaTemplateSyntaxComponent, AbaAaaComponent, AbaAbaComponent, AbaAcaComponent, AcaLifecycleHookComponent, AbaAcaAaaComponent, AdaComponentCommunicationComponent, AbaAdaAaaComponent]
})
export class AbaTemplateAndBindingModule { }
