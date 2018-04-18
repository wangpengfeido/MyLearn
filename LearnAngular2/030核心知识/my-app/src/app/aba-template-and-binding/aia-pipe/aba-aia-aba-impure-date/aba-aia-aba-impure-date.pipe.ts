import {Pipe, PipeTransform} from '@angular/core';
import {DatePipe} from "@angular/common";

@Pipe({
  name: 'abaAiaAbaImpureDate',
  //将pure标志设为false，这是一个非纯管道
  pure: false,
})
export class AbaAiaAbaImpureDatePipe extends DatePipe {

}
