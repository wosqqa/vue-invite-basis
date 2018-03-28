<template>
	<div class="header">
			新的首页home
	</div>
</template>

<script>
	import {getSystemNotificationByTime} from '../api/api';
	export default {
		data() {
			return {
				user: '',
			}
		},
		created(){
		},
		mounted() {//初始化数据
		},
		watch: {
			'$route.path': function(){
				this.$nextTick(function(){
					this.routerActive = this.$route.path;
				})
			}
		},
		methods: {
			isLoginSeesion(){

			}
		}

	}

</script>

<style scoped lang="scss">
</style>
