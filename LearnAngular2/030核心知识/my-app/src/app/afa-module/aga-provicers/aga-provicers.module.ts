import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AfaAgaService} from "./afa-aga/afa-aga.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  /**
   * 服务提供商
   */
  providers: [AfaAgaService],
})
export class AgaProvicersModule {
}

/*
* 当你把服务提供商添加到根模块的 providers 数组中时，它就在整个应用程序中可用了。
* 另外，当你导入一个带有服务提供商的模块时，其中的服务提供商也同样对整个应用中的类是可用的
* */
/*
* 当使用惰性加载时,在它们的 providers 数组中列出的服务都是不可用的，因为根注入器并不知道这些模块。
* 当 Angular 的路由器惰性加载一个模块时，它会创建一个新的注入器。这个注入器是应用的根注入器的一个子注入器。如果路由器在惰性加载时创建组件， Angular 会更倾向于使用从这些提供商中创建的服务实例，而不是来自应用的根注入器的服务实例。
* 任何在惰性加载模块的上下文中创建的组件（比如路由导航），都会获取该服务的局部实例，而不是应用的根注入器中的实例。而外部模块中的组件，仍然会收到来自于应用的根注入器创建的实例。
* 虽然你可以使用惰性加载模块来提供实例，但不是所有的服务都能惰性加载。比如，像路由之类的模块只能在根模块中使用。
* */
/*
* 另一种限定提供商作用域的方式是把要限定的服务添加到组件的 providers 数组中。组件中的提供商和 NgModule 中的提供商是彼此独立的。
* @Component({providers:[]})
* */

