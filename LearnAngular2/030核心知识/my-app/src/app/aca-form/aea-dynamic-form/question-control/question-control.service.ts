import {Injectable} from '@angular/core';
import {QuestionBase} from "../models/question-base";
import {FormControl, FormGroup, Validators} from "@angular/forms";

/**
 * 将问题模型转换为control group
 */
@Injectable()
export class QuestionControlService {

  constructor() {
  }

  /**
   * 转换
   * @param {QuestionBase[]} questions
   */
  toFormGroup(questions: QuestionBase<any>[]) {
    let group: any = {};
    questions.forEach(question => {
      let validators = [];
      question.required && validators.push(Validators.required);
      group[question.key] = new FormControl(question.value || '', validators);
    });
    return new FormGroup(group);
  }
}
