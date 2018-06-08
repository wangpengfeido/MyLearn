import {Injectable} from '@angular/core';

@Injectable()
export class AgaAbaAhaService {

  constructor() {
  }

  getSth() {
    return 'AgaAbaAhaService';
  }
}

export let agaAbaAhaValue = {
  a: 'aaa',
  getSth() {
    return 'agaAbaAhaValue';
  },
};
