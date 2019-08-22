<template>
  <div>
    <p>    
      <h3>递归组件: <code style="color: red">{{count}}</code></h3>
      <Child :count="count + 1" v-if="count < 3"></Child>
    </p>
    <component :is="isCom"></component>
  </div>
</template>

<script>
import IsChild from './child'
export default {
  name: 'Child',
  props: {
    count: {
      type: Number,
      default: 1,
    }
  },
  data() {
    return {
      isCom: IsChild
    }
  },
  components: {
    IsChild
  }
}
</script>

<style>

</style>