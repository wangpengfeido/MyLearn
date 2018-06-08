import {Injectable} from '@angular/core';
import {AgaAbaAbaService} from "./aga-aba-aba.service";
import {AgaAbaAfaAaaService} from "./aga-aba-afa-aaa.service";

@Injectable()
export class AgaAbaAfaAbaService extends AgaAbaAfaAaaService {

  constructor(private agaAbaAba: AgaAbaAbaService) {
    super();
  }

  getSth() {
    return this.agaAbaAba.getSth();
  }

}
