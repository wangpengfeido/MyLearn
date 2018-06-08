import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {QuestionBase} from "../../models/question-base";
import {FormGroup} from "@angular/forms";
import {QuestionControlService} from "../../question-control/question-control.service";

/**
 * 一个问卷表单
 */
@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
})
export class QuestionsComponent implements OnInit {

  @Input() questions: QuestionBase<any>[] = [];
  form: FormGroup;

  @Output() onSave = new EventEmitter<any>();

  constructor(private questionControl: QuestionControlService) {
  }

  ngOnInit() {
    this.form = this.questionControl.toFormGroup(this.questions);
  }

  onSubmit() {
    this.onSave.emit(this.form.value);
  }

}
