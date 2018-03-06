import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AaaDisplayingDataComponent } from './aaa-displaying-data/aaa-displaying-data.component';
import { AbaTemplateSyntaxComponent } from './aba-template-syntax/aba-template-syntax.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AaaDisplayingDataComponent, AbaTemplateSyntaxComponent]
})
export class AbaTemplateAndBindingModule { }
