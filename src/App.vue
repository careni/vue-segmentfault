<template>
  <div id="app" @click='testVuex'>
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components:{},
  data () {
  	return {
  		username: "xiongfx"
  	}
  },
  methods: {
  	testVuex () {
  		this.$store.state.username = this.username;
  		this.$store.commit("showConName");
  	}
  }
}
</script>

