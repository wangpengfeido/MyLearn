import {Injectable} from '@angular/core';
import {AgaAbaAdaService} from "./aga-aba-ada.service";

@Injectable()
export class AgaAbaAiaService {

  constructor(private isAuthorized) {
  }

  getSth() {
    if (this.isAuthorized) {
      return 'AgaAbaAiaService';
    } else {
      return 'not Authorized';
    }
  }
}

/**
 * 服务工厂
 * 创建它的目的是能从其他服务获取信息
 * 不直接注入的原因是服务不应该有权限访问这个服务，而工厂可以有权限
 */
let AgaAbaAiaServiceFactory = (agaAbaAda) => {
  return new AgaAbaAiaService(!!agaAbaAda.getSth());
};

/**
 * 服务提供商
 * 导出它的原因是让它可复用
 */

export let AgaAbaAiaServiceProvider = {
  provide: AgaAbaAiaService,
  useFactory: AgaAbaAiaServiceFactory,
  // deps 属性是提供商令牌数组。注入器会解析这些令牌并注入到工厂中
  deps: [AgaAbaAdaService],
};
