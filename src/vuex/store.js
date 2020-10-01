import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        searchData: ['Curry', 'Lebron', 'George', 'Harden','Leonard', 'Irving', 'Davis'],
        filteredData: [],
        value: '' ,
        modal: false
    },
    mutations: {
        SET_VALUE_TO_STATE(state, value) {
            state.value = value;
        },
        FILTER_DATA(state, value) {
            state.filteredData = state.searchData.filter(item => {
                return item.toLocaleLowerCase().startsWith(value.toLocaleLowerCase());
            });
        }
    },
    actions: {
        SET_FILTERED_DATA({commit}, value) {
            commit('FILTER_DATA', value);
        },
        SET_VALUE({commit}, value) {
            commit('SET_VALUE_TO_STATE', value);
        }
    },
    getters: {
        FILTERED_DATA(state) {
            return state.filteredData;
        },
        VALUE(state) {
            return state.value;
        },
        MODAL(state) {
            return state.modal;
        }
    }
});

export default store;