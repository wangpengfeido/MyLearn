import {Component, OnInit} from '@angular/core';
import {QuestionBase} from "./models/question-base";
import {QuestionTextbox} from "./models/question-textbox";
import {QuestionDropdown} from "./models/question-dropdown";

@Component({
  selector: 'app-aea-dynamic-form',
  templateUrl: './aea-dynamic-form.component.html',
  styleUrls: ['./aea-dynamic-form.component.css']
})
export class AeaDynamicFormComponent implements OnInit {

  questions: QuestionBase<any>[];

  constructor() {
    this.questions = [
      new QuestionTextbox({key: 'one', label: 'one', value: 'aaa', required: true, type: 'text'}),
      new QuestionDropdown({
        key: 'two', label: 'two', value: 'x', required: true,
        options: [{key: 'x', value: 'x'}, {key: 'y', value: 'y'}, {key: 'z', value: 'z'}]
      })
    ]
  }

  ngOnInit() {

  }

  onSave(result) {
    console.log('.......', result);
  }

}
