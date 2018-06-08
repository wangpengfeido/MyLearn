import {Component, Inject, Injector, OnInit, Optional} from '@angular/core';
import {AgaAbaAaaService} from "./services/aga-aba-aaa.service";
import {AgaAbaAcaService} from "./services/aga-aba-aca.service";
import {AgaAbaAdaService} from "./services/aga-aba-ada.service";
import {AgaAbaAeaAaaService} from "./services/aga-aba-aea-aaa.service";
import {AgaAbaAeaAbaService} from "./services/aga-aba-aea-aba.service";
import {AgaAbaAfaAaaService} from "./services/aga-aba-afa-aaa.service";
import {AgaAbaAfaAbaService} from "./services/aga-aba-afa-aba.service";
import {AgaAbaAgaAaaService} from "./services/aga-aba-aga-aaa.service";
import {AgaAbaAgaAbaService} from "./services/aga-aba-aga-aba.service";
import {AgaAbaAhaService, agaAbaAhaValue} from "./services/aga-aba-aha.service";
import {
  AgaAbaAiaService,
  AgaAbaAiaServiceProvider
} from "app/aga-dependency-injection/aba-dependency-injection/services/aga-aba-aia.service";
import {AGA_ABA_AJA, agaAbaAja, AgaAbaAjaInterface} from "./services/aga-aba-aja.service";
import {AgaAbaAkaService} from "./services/aga-aba-aka.service";

class MyOptional {

}

@Component({
  selector: 'app-aba-dependency-injection',
  templateUrl: './aba-dependency-injection.component.html',
  styleUrls: ['./aba-dependency-injection.component.css'],
  providers: [AgaAbaAaaService, AgaAbaAcaService,
    //多种注册提供商的方式
    /**
     * 对象字面量。
     * provide 属性保存的是令牌 (token)，它作为键值 (key) 使用，用于定位依赖值和注册提供商。
     * 第二个是一个提供商定义对象。 可以把它看做是指导如何创建依赖值的配方。 有很多方式创建依赖值…… 也有很多方式可以写配方。
     */
    {provide: AgaAbaAdaService, useClass: AgaAbaAdaService},
    /**
     * 备选提供商
     * 此时请求AgaAbaAeaAaaService，实际返回的是AgaAbaAeaAbaService
     */
    {provide: AgaAbaAeaAaaService, useClass: AgaAbaAeaAbaService},
    /**
     * 带依赖的提供商。
     */
    {provide: AgaAbaAfaAaaService, useClass: AgaAbaAfaAbaService},
    /**
     * 别名类提供商
     * 此时AgaAbaAgaAaaService只是AgaAbaAgaAbaService的一个别名，将先前注册的提供商指定别名令牌。
     * 并不会创建新的服务实例。同样，如果先前没有注册该提供商会找不到。
     * 而使用useClass会创建一个新的服务实例，这样的话就会有同一个服务的两个实例，只是它们的令牌不同。
     */
    AgaAbaAgaAbaService,
    {provide: AgaAbaAgaAaaService, useExisting: AgaAbaAgaAbaService},
    /**
     * 值提供商
     */
    {provide: AgaAbaAhaService, useValue: agaAbaAhaValue},
    /**
     * 工厂提供商
     */
    AgaAbaAiaServiceProvider,
    /**
     * 非类依赖
     * 对于一些值等依赖，没有对象作为令牌，这时可以用InjectionToken作为令牌
     */
    {provide: AGA_ABA_AJA, useValue: agaAbaAja},
    AgaAbaAkaService,
  ],
})
export class AbaDependencyInjectionComponent implements OnInit {

  constructor(
    //它在component中被注册提供商
    public agaAbaAaa: AgaAbaAaaService,
    //它在ngModule中被注册提供商（详情查看本模块）
    public agaAbaAba: AgaAbaAaaService,
    /**
     * 在模块中注册会被注册到根注入器，在组件中注册会被注册到子注入器
     * 每个组件会创建子注入器，子组件注入器又是其父组件注入器的子注入器
     * 懒加载的模块也会创建子注入器
     * 服务在注入器的范围内是单例的。反之，在子注入器中重复注入会创建新的实例。
     */

    //这个服务注入了其他服务（详情查看本服务）
    public agaAbaAca: AgaAbaAcaService,
    ///////////////////////
    public agaAbaAda: AgaAbaAdaService,
    public agaAbaAeaAaa: AgaAbaAeaAaaService,
    public agaAbaAfaAaa: AgaAbaAfaAaaService,
    public agaAbaAgaAaa: AgaAbaAgaAaaService,
    public agaAbaAgaAba: AgaAbaAgaAbaService,
    public agaAbaAhaValue: AgaAbaAhaService,
    public agaAbaAia: AgaAbaAiaService,
    //////////////////////////////////////////////
    /**
     * 注入器维护一个内部的令牌-提供商映射表。在注入时，会用依赖值的类型在映射表中查找。
     */
    //使用Inject装饰器，injectionToken作为令牌。这里AgaAbaAjaInterface其实没有任何作用，只是指定了强类型。
    @Inject(AGA_ABA_AJA) public agaAbaAja: AgaAbaAjaInterface,
    //可选依赖。当依赖找不到时不会报错
    @Optional() public myOptional: MyOptional,
    /**
     * 直接使用注入器
     * 注入器也是可注入的服务
     * 要尽量避免这样使用，因为导致不能从构造方法中得知需要的所有依赖
     */
    public injector: Injector,
  ) {

  }

  ngOnInit() {
    console.log('agaAbaAaa', this.agaAbaAaa.getSth());
    console.log('agaAbaAba', this.agaAbaAba.getSth());
    console.log('agaAbaAca', this.agaAbaAca.getSth());
    console.log('agaAbaAda', this.agaAbaAda.getSth());
    console.log('agaAbaAeaAaa', this.agaAbaAeaAaa.getSth());
    console.log('agaAbaAfaAaa', this.agaAbaAfaAaa.getSth());
    console.log('agaAbaAgaAaa', this.agaAbaAgaAaa.getSth());
    console.log('agaAbaAgaAba', this.agaAbaAgaAba.getSth());
    console.log('agaAbaAhaValue', this.agaAbaAhaValue.getSth());
    console.log('agaAbaAia', this.agaAbaAia.getSth());
    console.log('agaAbaAja', this.agaAbaAja);
    console.log('myOptional', this.myOptional);

    let agaAbaAka: AgaAbaAkaService = this.injector.get(AgaAbaAkaService, null);
    console.log('agaAbaAka', agaAbaAka.getSth());
  }

}
