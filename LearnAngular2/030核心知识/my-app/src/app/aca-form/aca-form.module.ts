import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AaaUserInputComponent} from './aaa-user-input/aaa-user-input.component';
import {AbaTemplateDrivenFormComponent} from './aba-template-driven-form/aba-template-driven-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AdaReactiveFormComponent} from './ada-reactive-form/ada-reactive-form.component';
import {AcaFormValidationComponent} from './aca-form-validation/aca-form-validation.component';
import {SyncRegValidatorDirective} from './aca-form-validation/custom-validation/sync-reg-validator.directive';
import {AsyncRegValidatorDirective} from './aca-form-validation/custom-validation/async-reg-validator.directive';
import {AeaDynamicFormComponent} from './aea-dynamic-form/aea-dynamic-form.component';
import {QuestionComponent} from './aea-dynamic-form/components/question/question.component';
import {QuestionsComponent} from './aea-dynamic-form/components/questions/questions.component';
import {QuestionControlService} from "./aea-dynamic-form/question-control/question-control.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [QuestionControlService],
  declarations: [AaaUserInputComponent, AbaTemplateDrivenFormComponent, AdaReactiveFormComponent,
    AcaFormValidationComponent, SyncRegValidatorDirective, AsyncRegValidatorDirective,
    AeaDynamicFormComponent, QuestionComponent, QuestionsComponent]
})
export class AcaFormModule {
}
