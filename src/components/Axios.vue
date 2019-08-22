<template>
  <div>
    <h1>axios</h1>
    <button @click="addResult">生成</button>
    <table border="1">
      <thead>
        <tr>
          <th>name</th>
          <th>phone</th>
          <th>username</th>
          <th>email</th>
          <th>city</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in dataTable" :key="item.id">
          <td>{{item.name}}</td>
          <td>{{item.phone}}</td>
          <td>{{item.username}}</td>
          <td>{{item.email}}</td>
          <td>{{item.address.city}}</td>
        </tr>
      </tbody>
    </table>
    <h1 v-for="a in arr">Arr: {{a}}</h1>
    <h1>Obj: {{obj}}</h1>
  </div>
</template>

<script>
import * as HTTP from '../api/api'
export default {
  props: {

  },
  data() {
    return {
      dataTable: [],
      arr: [1,2,3],
      obj: {
        a: 'a',
        b: 'b',
      }
    };
  },
  computed: {

  },
  created() {
    this.add()
  },
  mounted() {

  },
  watch: {

  },
  methods: {
    add() {
      HTTP.getUsers().then(res => { 
        res.isTicked = true
        console.log('res',res)
        this.dataTable = res
      })
    },
    addResult() {
      this.arr[0] = 'first'
      this.obj.a = 'A'
      this.obj.c = 'Ccc';
    }
  },
  components: {

  },
};
</script>

<style scoped >
table {
  text-align: center;
  margin: 0 auto;
}
table tr th,
table tr td {
  padding: 10px 20px;
}
</style>
