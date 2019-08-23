<template>
  <ul>
    <li v-for="item in propTreeData" :key="item.menuCode">
      <h2 style="color: grey">{{item.menuName}}</h2>     
      <tree v-if="item.children&&item.children.length" :propTreeData="item.children"></tree>     
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Tree',
  props: {
    propTreeData: Array
  }
}
</script>

<style>

</style>