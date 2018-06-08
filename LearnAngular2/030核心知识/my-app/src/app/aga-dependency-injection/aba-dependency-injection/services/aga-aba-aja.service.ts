import {InjectionToken} from '@angular/core';

export interface AgaAbaAjaInterface {
  a;
  b;
}

export let agaAbaAja: AgaAbaAjaInterface = {
  a: 'aaa',
  b: 'bbb',
};

//创建InjectionToken
export const AGA_ABA_AJA = new InjectionToken<AgaAbaAjaInterface>('AgaAbaAjaInterface');
// export const AGA_ABA_AJA = new InjectionToken<any>('AgaAbaAjaInterface');
