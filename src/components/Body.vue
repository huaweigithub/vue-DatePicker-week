<template>
  <div>
    <h3>这是body子组件</h3>
    <input :value="value" v-bind="$attrs" v-on="listeners" />
  </div>
</template>

<script>
export default {
  props: ['value'],
  inheritAttrs: false,
  data() {
    return {
      newvalue: 'value'
    }
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: event =>
          this.$emit('contentInput', event.target.value)
      }
    }
  }
}
</script>

<style>
</style>