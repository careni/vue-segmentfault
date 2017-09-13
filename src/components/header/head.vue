<template>
	<header class="head">
		<!-- 搜索输入框 -->
		<div class="headSearch">
			<label for="key" class="fa fa-search" :class='{moveLabel:left,removeLabel:right}'></label>

			<input type="text" id="key" placeholder="搜索标签、内容和用户"
				   @focus="move"
				   @blur="remove"
				   :class='{moveInput:left,removeInput:right}'>
		</div>
		<!-- 滑动导航 -->
		<div class="headNav">
			<ul>
				<li v-for='(item,index) in items'
					:class='{active:active[index]}'
					@click='changeActive(index)'
					:key='index'>{{item}}</li>
			</ul>
		</div>
		<!-- 发布头条 -->
		<div class="sendMsg fa fa-pencil-square-o"></div>
		<!-- 排序 -->
		<div class="sort fa fa-reorder" @click.stop.self='showSort'>
			<ul v-if='sortEl'>
				<li v-for='(item,index) in sortItems'
					:class='{sortActive:sortActive[index]}'
					@click.self='addSortActive(index)'
					:key="index">{{item}}</li>
			</ul>
		</div>

	</header>
</template>
<script>
	import '../../style/head.scss';
	export default {
		data () {
			return {
				left: false,//控制输入框内容向左动画
				right: false,//控制输入框内容向右动画
				//导航栏内容
				items: ['JavaScript', 'HTML', 'CSS', 'Android', 'CSS', 'php', 'Python', 'Java', '安全', '程序员'],
				//排序栏内容
				sortItems: ['最新的', '最热的'],
				//导航栏点击active触发
				active: [true],
				//排序栏是否显示
				sortEl: false,
				sortActive: []
			}
		},
		methods: {
			move (){
				this.left = true;
				this.right = false;
			},
			remove () {
				this.left = false;
				this.right = true;
			},
			changeActive (index) {
				this.active = [];
				this.active[index] = true;
			},
			showSort () {
				this.sortEl = !this.sortEl;
				if(this.sortActive.length === 0){
					this.sortActive[0] = true;
				}
			},
			addSortActive (index) {
				this.sortActive = [];
				this.sortActive[index] = true;
			}
		}
	}
</script>
