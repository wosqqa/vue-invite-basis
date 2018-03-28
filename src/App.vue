<template>
	<div id="app">
			<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: 'app',
		data() {
			return {
				isLogin: false,
			};
		},
		created(){
		},
		mounted() {
			this.homeLogin();
    	},
    	methods: {
	    	homeLogin(){//首屏区别加载
	    		console.log('首屏区别加载')
	    	}
    	}
	}

</script>

<style lang="scss">
</style>
