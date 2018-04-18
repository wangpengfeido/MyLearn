import {Pipe, PipeTransform} from '@angular/core';

/**
 * 自定义一个管道，执行输入项乘参数
 */
@Pipe({
  name: 'abaAiaAaaPipe'
})
export class AbaAiaAaaPipePipe implements PipeTransform {

  transform(value: number, arg: number = 10): any {
    return value * arg;
  }

}
