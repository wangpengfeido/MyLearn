import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AaaDisplayingDataComponent } from './aaa-displaying-data/aaa-displaying-data.component';
import { AbaTemplateSyntaxComponent } from './aba-template-syntax/aba-template-syntax.component';
import { AbaAaaComponent } from './aba-template-syntax/aba-aaa/aba-aaa.component';
import { AbaAbaComponent } from './aba-template-syntax/aba-aba/aba-aba.component';
import {FormsModule} from "@angular/forms";
import { AbaAcaComponent } from './aba-template-syntax/aba-aca/aba-aca.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [AaaDisplayingDataComponent, AbaTemplateSyntaxComponent, AbaAaaComponent, AbaAbaComponent, AbaAcaComponent]
})
export class AbaTemplateAndBindingModule { }
