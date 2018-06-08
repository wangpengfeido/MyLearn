import {Component, OnInit} from '@angular/core';

/**
 * 应用的组件树有一个平行的注入器树
 * 每个组件实例都有自己的注入器
 */

/**
 * 注入器冒泡。angular会先再本组件自身的注入器中查找依赖，如果找不到，会再向上往父注入器和祖先注入器中查找
 */

/**
 * 如果在不同层级注入了同一个服务，向上查找最近的那个服务配置会屏蔽掉远的那个
 * 它们是不同的实例
 */

/**
 * 场景1：隔离服务，使服务只能在某个范围内访问。
 */

/**
 * 场景2：多重编辑会话。当有多个会话时，可以创建多个服务来分别缓存、存储、操作这些实例
 * 注意：一个组件的多个实例有其各自的注入器
 */

/**
 * 场景3：专门的提供商。在更深层的组件中，可能会需要上层依赖的更特殊的实现。
 */
@Component({
  selector: 'app-aca-hierarchical-dependency-injectors',
  templateUrl: './aca-hierarchical-dependency-injectors.component.html',
  styleUrls: ['./aca-hierarchical-dependency-injectors.component.css']
})
export class AcaHierarchicalDependencyInjectorsComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
