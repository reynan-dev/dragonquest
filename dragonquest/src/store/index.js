import { createStore } from "vuex";

const store = createStore({
	state: {
		token: "",
	},
	getters: {},
	mutations: {
		logUser(state, tokene) {
			state.token = tokene;
		},
	},
	actions: {
		envoieDatae: ({ commit }, user) => {
			commit("logUser", user);
		},
	},
});
export default store;
