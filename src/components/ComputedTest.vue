<template>
  <div>
    <input v-model="example0" />
    <input v-model="example1" />
    <input v-model="example2.inner0" />
    <hr />
    <ComputedA :propTreeData="treeData"></ComputedA>
  </div>
</template>
<script>
import ComputedA from './ComputedA'
export default {
  name: 'Tree',
  data() {
    return {
      example0: "",
      example1: "",
      example2: {
        inner0: 1,
        innner1: 2
      },
      treeData: [
        {
          id: "1",
          menuName: "笑傲江湖",
          menuCode: "1",
          children: [
            {
              menuName: "令狐冲",
              menuCode: "10"
            },
            {
              menuName: "东方不败",
              menuCode: "11"
            }
          ]
        },
        {
          id: "2",
          menuName: "射雕英雄",
          menuCode: "2",
          children: [
            {
              menuName: "蓉儿",
              menuCode: "20"
            },
            {
              menuName: "郭靖",
              menuCode: "21"
            }
          ]
        }
      ]
    }
  },
  watch: {
    example0(curVal, oldVal) {
      console.log(curVal, oldVal);
    },
    example1: 'a',//值可以为methods的方法名
    example2: {
      //注意：当观察的数据为对象或数组时，curVal和oldVal是相等的，因为这两个形参指向的是同一个数据对象
      handler(curVal, oldVal) {
        console.log(curVal, oldVal)
      },
      deep: true
    }
  },
  methods: {
    a(curVal, oldVal) {
      conosle.log(curVal, oldVal)
    }
  },
  components: {
    ComputedA
  }
}
</script>