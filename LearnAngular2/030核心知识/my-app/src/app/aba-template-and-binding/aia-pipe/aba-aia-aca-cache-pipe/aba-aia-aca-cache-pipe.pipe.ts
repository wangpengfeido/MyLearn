import {Pipe, PipeTransform} from '@angular/core';

/**
 * 一个带缓存的管道
 */
@Pipe({
  name: 'abaAiaAcaCachePipe',
  pure: false,
})
export class AbaAiaAcaCachePipePipe implements PipeTransform {

  cachedValue;
  cachedData;

  transform(value: any, args?: any): any {
    console.log('........before',value,this.cachedValue);
    if (this.cachedValue !== value) {
      console.log('........after',value);
      this.cachedValue = value;
      //这里可以对服务器发起一些请求
      setTimeout(() => {
        console.log('........timeout after',value);
        this.cachedData = 'something from server' + Math.random();
        // this.cachedData = {text: 'something from server' + Math.random()};
      }, 3000);
    }
    return this.cachedData;
  }

}
