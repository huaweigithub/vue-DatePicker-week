<template>
  <div class="main">
    <h1>这是父组件...</h1>
		<h3>路由传参的值: {{this.$route.params.slotnumber}}</h3>
    <hr>
    <template>
      <slot-child :parentslot='username' :parentval='msg' @attrchild='selectattr'>
        <p>插槽内容...</p>
        <p slot="oneslot">这是有名字的插槽1</p>
        <p>这是m有名字的插槽</p>
        <div slot="threeslot" slot-scope="user">
          <ul>
            <li v-for="item in user.datas">
              <p>{{item}}</p>
            </li>
          </ul>
        </div>

				<div class="parent-fore" slot="userarr" slot-scope="USERARR">
					<ul>
						<li v-for="item in USERARR.username">
							{{item.name}} - {{item.age}}
						</li>
					</ul>
				</div>
      </slot-child>
    </template>
		<h3>子组件传的值: {{attrChild}}</h3>

		<hr />
		<hr />

		<h1>递归组件</h1>
		<MoreChild></MoreChild>
  </div>
</template>


<script>
export default {	
	data() {
		return {
			username: ['aa','bb','cc','dd','ee','ff'],
			msg: [
				{
					id: 1,
					name: 'jack',
				},
				{
					id: 2,
					name: 'lonny',
				},
			],
			attrChild:''
		}
	},
	methods: {
		selectattr(data) {
			this.attrChild = data
			console.log('data',data)
		}
	}
}
</script>
