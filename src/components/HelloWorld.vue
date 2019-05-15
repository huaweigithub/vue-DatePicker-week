<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1>
    <div>
      <Button class="big-btn">Default</Button>
      <Button type="primary">Primary</Button>
      <hr>
    </div>-->
    <div>
      <h3>自定义组件-周期选择器</h3>
      <div class="week-main">
        <div class="week-top" @mouseenter="addweek">
          <Input class="cum_input" placeholder="选择第几周。。。" v-model="weekform.week.name"></Input>
        </div>
        <div class="week-body" @mouseleave="removeweek" v-show="weekShow">
          <div class="week-checkout">
            <span class="flex" @click="prev_week"><<</span>
            <span class="flex weeksel" @click="changeweek">{{ week_select }}</span>
            <span class="flex" @click="next_week">>></span>
          </div>
          <div class="week-content">
            <div
              class="week-number"
              v-for="item in weekarr"
              @click="weekenter"
              :data-datas="item.value"
            >
              <span class="week-text" :data-datas="item.value">{{item.name}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Button, Input } from 'iview'
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Vue.js App',
      weekShow: false,
      week_select: '13-24',
      weekpage: 1,
      weekarr: [],
      weeks: [
        {
          name: '1-12周',
          code: 1,
          value: 1,
        },
        {
          name: '13-24周',
          code: 2,
          value: 2,
        },
        {
          name: '25-36周',
          code: 3,
          value: 3,
        },
        {
          name: '37-48周',
          code: 4,
          value: 4,
        },
        {
          name: '49-53周',
          code: 5,
          value: 5,
        },
      ],
      weekform: {
        week: {
          name: '第2周',
          code: 2,
        }
      }
    };
  },
  methods: {
    addweek() {
      this.weekShow = true;
      this.weekshow();
    },
    removeweek() {
      this.weekShow = false;
    },
    prev_week() {
      if (this.weekpage > 1) {
        this.weekpage--;
        this.weekshow();
      }
    },
    next_week() {
      if (this.weekpage < 5) {
        this.weekpage++;
        this.weekshow();
      }
    },
    changeweek() {
      this.week_select = '选择周段';
      this.weekarr = this.weeks;
    },
    weekenter(val) {
      this.$nextTick(function(){
        let weekedDom = document.getElementsByClassName("week-number");
        let week_text = val.target.innerText;
        let week_code = val.target.dataset.datas;
        if(weekedDom.length == 5 && week_code < 49){
          this.weekpage = week_code;
          this.weekshow();
          // console.log('week_code',week_code)
        }else{
          this.weekform.week = {
            name: week_text,
            code: week_code,
          };
        }
      })

      this.selectedClass();
    },
    // 添加选择样式
    selectedClass() {
      this.$nextTick(function(){
        let weekedDom = document.getElementsByClassName("week-number");
        for (let i = 0; i < weekedDom.length; i++) {
          weekedDom[i].style.background = '';
          let weekData = weekedDom[i].dataset.datas;
          if(this.weekform.week.code == weekData) {
            weekedDom[i].style.background = '#c5c8ce';
          }
        }
      })
    },

    // 展示选择的周列表
    weekshow() {
      this.weeks.map(week => {
        if (this.weekpage == week.code) {
          this.week_select = week.name;
        }
      });
      this.weekarr = [];
      let weekcode = this.weekpage;
      let weeknode_start = (weekcode - 1) * 12 + 1;
      let weeklength = weekcode * 12 + 1;
      if (weekcode < 5) {
        for (let i = weeknode_start; i < weeklength; i++) {
          this.weekarr.push({
            name: `第${i}周`,
            code: weekcode,
            value: i,
          })
        };
      } if (weekcode == 5) {
        for (let i = weeknode_start; i < (weeknode_start + 5); i++) {
          this.weekarr.push({
            name: `第${i}周`,
            code: weekcode,
            value: i,
          })
        };
      };
      this.selectedClass();
    }
  },
  components: {
    Button,
    Input
  }
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>


<style lang="scss">
$color: red;
.hello {
  width: 300px;
  margin: 0 auto;
  .big-btn {
    font-size: 20px;
    &:hover {
      color: $color;
    }
  }
}

.week-main {
  width: 100%;
  .week-body {
    width: 100%;
    position: relative;
    border: {
      width: 1px;
      color: #e7e7e7;
      style: solid;
    }
    .week-checkout {
      width: 100%;
      height: 40px;
      font-size: 14px;
      color: #808695;
      font-weight: bold;
      display: flex;
      // justify-content: space-around;
      // align-items: center;
      border: {
        bottom: {
          width: 2px;
          color: #e7e7e7;
          style: solid;
        }
      }
      .flex {
        display: flex;
        flex: 1;
        justify-content: space-around;
        align-items: center;
        cursor: pointer;
      }
      .weeksel {
        flex: 2;
      }
    }
    .week-content {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: center;
      .week-number {
        display: flex;
        justify-content: center;
        flex-basis: 25%;
        margin: 4px 0;
        cursor: pointer;
        &:hover {
          background: #c5c8ce;
        };
        .week-text{
          padding: 12px 14px;
        }
      }
    }
  }
}
</style>
