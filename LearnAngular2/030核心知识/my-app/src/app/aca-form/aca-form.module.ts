import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AaaUserInputComponent} from './aaa-user-input/aaa-user-input.component';
import {AbaTemplateDrivenFormComponent} from './aba-template-driven-form/aba-template-driven-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AdaReactiveFormComponent} from './ada-reactive-form/ada-reactive-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [AaaUserInputComponent, AbaTemplateDrivenFormComponent, AdaReactiveFormComponent]
})
export class AcaFormModule {
}
