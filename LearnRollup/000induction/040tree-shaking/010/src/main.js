// 因为只导入并使用了"a"，所以其他的b和obj等被优化掉了
import {a} from './foo';
import {b} from './foo';

export default function () {
  console.log(a);
}






