import {Injectable} from '@angular/core';
import {AgaAbaAbaService} from "./aga-aba-aba.service";

//@Injectable() 装饰器表示可能需要往这个服务类中注入其它依赖。
/**
 * Angular 只能在带有某种装饰器的类上查找参数信息。任何装饰器都可以，而 @Injectable() 装饰器是各种服务类的标准装饰器。
 * 这样做的原因是：angualr要查找构造方法的参数类型，而只有当带装饰器时，typescript编译器才会保留这些类型信息。（需要配置 emitDecoratorMetadata: true ）
 */
@Injectable()
export class AgaAbaAcaService {

  //服务注入了其他服务
  constructor(private agaAbaAba: AgaAbaAbaService) {
    /**
     * 在服务注入其他服务时，被注入的服务应该是已被提供的
     * 比如这里被注入的服务注入到了模块中
     */
  }

  getSth() {
    return this.agaAbaAba.getSth();
  }

}
