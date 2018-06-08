import {Component, Input, OnInit} from '@angular/core';
import {QuestionBase} from "../../models/question-base";
import {FormGroup} from "@angular/forms";


/**
 * 一个问题
 */
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;

  get isValid() {
    return this.form.controls[this.question.key].valid;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
