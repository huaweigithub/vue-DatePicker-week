<template>
  <div id="app">
    <div class="nav">
      <router-link to="/" class="navlink" exact replace>Home</router-link>
      <router-link to="/slot/123" class="navlink" append replace>Slot</router-link>
      <router-link :to="{name: 'Vuex', params: {userId: 123}}" class="navlink" replace>Vuex</router-link>
      <router-link :to="{path: '/computed'}" class="navlink" replace>Computed</router-link>
      <router-link :to="{path: '/axios'}" class="navlink" replace>Axios</router-link>
      <router-link :to="{path: '/handsontable'}" class="navlink" replace>Handsontable</router-link>
      <router-link :to="{path: '/content'}" class="navlink" replace>高阶组件</router-link>
    </div>
    <keep-alive>

    <router-view class="nav-view" :key="$route.fullpath"></router-view>
    </keep-alive>
    <!-- <router-view class="nav-view two-view" name="two"></router-view> -->
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
.nav{
  margin-bottom: 20px
}
.navlink{
  display: inline-block;
  font-size: 16px;
  padding: 12px 10px;
}
.active{
  color: red
}
</style>
