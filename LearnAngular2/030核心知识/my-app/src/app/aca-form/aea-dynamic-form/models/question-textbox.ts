import {QuestionBase} from './question-base';

/**
 * 输入框型问题
 */
export class QuestionTextbox extends QuestionBase<string> {
  controlType = 'textbox';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
