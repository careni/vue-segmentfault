import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const store = new Vuex.Store({
	state: {
		username:'hello gun'
	},
	mutations: {
		showConName (state) {
			console.log(state.username);
		}
	},
	actions: {

	},
	getters: {

	}
})

export default store
