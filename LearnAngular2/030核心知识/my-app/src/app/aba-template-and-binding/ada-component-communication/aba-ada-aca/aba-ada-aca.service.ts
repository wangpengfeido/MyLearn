import {Injectable} from '@angular/core';

@Injectable()
export class AbaAdaAcaService {

  constructor() {
  }

  count = 0;

  add() {
    this.count++;
  }

}
