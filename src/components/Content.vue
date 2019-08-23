<template>
  <div>
    <h1>
      这是高阶组件父组件
    </h1>
    <Body :value="value" label="密码" placeholder="请填写密码" @contentInput="handleInput"></Body>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '123'
    }
  },
  methods: {
    handleInput(value) {
      console.log(value)
      this.value = value
    }
  }
}
</script>

<style>

</style>