<template>
  <div class="child-slot">
    <h3>這是子組件...</h3>
    <slot></slot>
    <div class="two-slot">
      <slot name="oneslot"></slot>
      <slot name="twoslot"></slot>
      <slot name="threeslot" :datas="userName"></slot>
    </div>
    <div class="three">
      <h2>下面是父元素传子元素的插槽</h2>
      <ul>
        <li v-for="item in parentslot">{{item}}</li>
      </ul>
    </div>

    <div class="foreslot" slot="action">
      <slot name="userarr" :username="userarr"></slot>
    </div>

    <h1>父组件传的值</h1>
    <p>{{parentval}}</p>
    <ul>
      <li v-for="item in parentval">id: {{item.id}} - name: {{item.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['parentval', 'parentslot'],
  data() {
    return {
      userName: ['zhangsan', 'lisi', 'wanwu', 'zhaoliu', 'tianqi', 'xiaoba'],
      userarr: [
        {
          name: 'xiaoming',
          age: 23
        },
        {
          name: 'xiaohua',
          age: 25
        },
        {
          name: 'xiaowang',
          age: 26
        },
      ]
    }
  },
  mounted() {
    this.$emit('attrchild', this.userarr)
  },

}
</script>

