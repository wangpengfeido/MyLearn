import {QuestionBase} from "./question-base";

/**
 * 下拉框型问题
 */
export class QuestionDropdown extends QuestionBase<string> {
  controlType = 'dropdown';
  options: { key: string, value: string }[];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}
