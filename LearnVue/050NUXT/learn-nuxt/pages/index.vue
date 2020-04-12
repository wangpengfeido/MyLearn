<template>
  <div class="index">
    <ul>
      <li>
        <div>路由</div>
        <ul>
          <li><nuxt-link to="/baaRouter/baaBase">基础路由</nuxt-link></li>
          <li>
            <nuxt-link to="/baaRouter/bbaDinamic/23">动态路由</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/baaRouter/bbbDinamicRequired/23">
              动态路由(必选)
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/baaRouter/bcaValidateParam/230">
              路由参数校验
            </nuxt-link>
          </li>
          <li>
            <div>嵌套路由</div>
            <ul>
              <li>
                <nuxt-link to="/baaRouter/bdaNested/nested/">index</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/baaRouter/bdaNested/nested/one">one</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/baaRouter/bdaNested/nested/two">two</nuxt-link>
              </li>
            </ul>
          </li>
          <li>
            <nuxt-link to="/baaRouter/beaNestedDinamic/23/45">
              动态嵌套路由
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/baaRouter/bebUnknownNested/sdf/fdgjkl">
              未知嵌套深度的动态嵌套路由
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/baaRouter/bfaTransitions">
              过渡动效
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/baaRouter/bgaMiddleware">
              中间件
            </nuxt-link>
          </li>
        </ul>
      </li>
      <li>
        <div>布局</div>
        <ul>
          <li>
            <nuxt-link to="/bbaViews/bbaCustomLayout">自定义布局</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/bbaViews/bbaErrorPage/sdf">
              自定义错误页面
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/bbaViews/bdaHtmlHead">
              html head
            </nuxt-link>
          </li>
        </ul>
      </li>
      <li>
        <div>异步数据</div>
        <ul>
          <li>
            <nuxt-link to="/bcaAsyncData/bbaAsyncDataMethod">
              asyncData 方法
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/bcaAsyncData/bcaContext/aaa">
              context对象
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/bcaAsyncData/bdaListenQuery/aaa">
              监听query参数改变
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/bcaAsyncData/beaHandlingError">
              错误处理
            </nuxt-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>

<style></style>
