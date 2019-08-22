<template>
  <div class="vuex">
    <h3>vuex project demo..</h3>
    <h3>路由传参的值: {{this.$route.params.userId}}</h3>
    <div class="content">
      <div class="left">
        <div class="loading" v-show="!loadingState">
          <h3>loading...</h3>
        </div>
        <Table class="table" v-if="loadingState" height="280" :columns="columns1" :data="data">
          <template slot-scope="{ row, index }" slot="action">
            <Button
              type="error"
              @click="del(row,index)"
              size="small"
              shape="circle"
              icon="md-trash"
            ></Button>
            <Button
              type="primary"
              @click="edit(row,index)"
              size="small"
              shape="circle"
              icon="md-create"
            ></Button>
          </template>
        </Table>
      </div>
      <div class="right">
        <div class="item">
          <label for>水果名称:</label>
          <Input placeholder="输入水果名称" name="name" v-model="name" @on-change="onchange"></Input>
        </div>
        <div class="item">
          <label for>水果价钱:</label>
          <Input
            placeholder="输入水果价钱"
            type="number"
            name="price"
            v-model="price"
            @on-change="onchange"
          ></Input>
        </div>
        <div class="item">
          <label for>水果数量:</label>
          <Input
            placeholder="输入水果数量"
            type="number"
            name="number"
            v-model="number"
            @on-change="onchange"
          ></Input>
        </div>
        <div class="item item-btn">
          <Button type="primary" @click="addfood">添加</Button>
        </div>
      </div>
    </div>

    <div>
      <h3>{{this.$store.state.count}}</h3>
      <Button type="primary" @click="add">加1</Button>
      <Button type="primary" @click="reduct">减1</Button>
    </div>

    <Modal v-model="openmodel" title="修改信息" @on-ok="handsubmit">
      <div class="item item-modal">
        <label for>水果名称:</label>
        <Input placeholder="输入水果名称" name="name" v-model="modalname" @on-change="onhandchange"></Input>
      </div>
      <div class="item item-modal">
        <label for>水果价钱:</label>
        <Input
          placeholder="输入水果价钱"
          type="number"
          name="price"
          v-model="modalprice"
          @on-change="onhandchange"
        ></Input>
      </div>
      <div class="item item-modal">
        <label for>水果数量:</label>
        <Input
          placeholder="输入水果数量"
          type="number"
          name="number"
          v-model="modalnumber"
          @on-change="onhandchange"
        ></Input>
      </div>
    </Modal>
  </div>
</template>


<script>
import { Table, Input, Button, Modal } from 'iview';
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      columns1: [
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Price',
          key: 'price'
        },
        {
          title: 'Number',
          key: 'number'
        },
        {
          title: '操作',
          slot: 'action',
          width: 100,
        }
      ],
      loading: this.$store.state._loading,
      name: '',
      price: '',
      number: '',
      modalname: '',
      modalprice: '',
      modalnumber: '',
      modalArr: null,
      data: this.$store.state.productList,
      productarr: this.$store.state.productarr,
      count: this.$store.state.count,
      openmodel: false,
    }
  },

  components: {
    Table,
    Input,
    Button,
    Modal
  },
  methods: {
    onchange(e) {
      let { value, name } = e.target
      this.productarr[name] = value
    },

    onhandchange(e) {
      let { value, name } = e.target
      this.modalArr[name] = value
    },

    addfood() {
      if (this.name != '' && this.price != '' && this.number != '') {
        this.$store.commit('addshuiguo')
        this.name = ''
        this.price = ''
        this.number = ''
      }
    },

    add() {
      // this.$store.commit('addCount')
      this.$store.dispatch('addCountAction', Math.floor(Math.random() * 10))
    },

    reduct() {
      // this.$store.commit('reductCount')
      this.$store.dispatch('reductCountAction', Math.floor(Math.random() * 10))
    },

    del(row, index) {
      // this.$store.dispatch('delAction',index)
      this.$store.commit('delshuiguo', index)
    },

    edit(row, index) {
      this.openmodel = true
      this.$store.commit('editmodal', row)
      this.$store.dispatch('modalAction', row)
      this.modalArr = this.$store.state.modalarr
      this.modalname = this.$store.state.modalarr.name
      this.modalprice = this.$store.state.modalarr.price
      this.modalnumber = this.$store.state.modalarr.number
    },

    handsubmit() {
      this.loading = false
      if (this.modalname != '' && this.modalprice != '' && this.modalnumber != '') {
        this.$store.commit('handlesumit', this.modalArr)
      }
      // setTimeout(() => {
      //   this.$store.dispatch('changeloading',1000)
      //   this.loading = this.$store.state._loading        
      // }, 1000);    

      this.$store.dispatch('changeloading', 2000)
    },
  },

  watch: {
    loading(value) {
      console.log(this.$store.getters.loadingGetter)
      console.log('watch value', value)
      this.loading = this.$store.getters.loadingGetter
    }
  },

  computed: {
    loadingState(){
      return this.$store.getters.loadingGetter
    }
  },

  beforeCreate() {
    this.$router.push({ query: {userId: 123} })
    console.log('beforeCreate.........')
  },

  created() {
    console.log('created.........')
    this.$router.push({ params: {userId: 123} })
    console.log('this.$router',this.$route.params.userId)
    
  },


  mounted() {
    console.log('mounted.........')
    this.$store.dispatch('changeloading', 2000)
    // this._loading = this.$store.getters.loadingGetter
    // this.loading = this.$store.state._loading 

    // setTimeout(() => {
    //   this.$store.dispatch('changeloading',1000)      
    //   this.loading = this.$store.state._loading
    // }, 1000);
  }
}
</script>

<style lang="scss" scoped>
label {
  display: inline-block;
  margin-bottom: 4px;
}
.vuex {
  width: 60%;
  margin: 0 auto;
  .content {
    display: flex;
  }
  .left {
    display: flex;
    flex: 2;
    padding-right: 20px;
    .table {
      width: 100%;
    }
  }
  .right {
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    .item {
      width: 100%;
      text-align: left;
    }
    .item-btn {
      text-align: right;
    }
  }
}
.item-modal {
  margin-bottom: 10px;
}
</style>

