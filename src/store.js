import { createStore } from "vuex";
import { baseURL } from '@/config';

const store = createStore({
    state() {
        return {
            data: null,
            packageData: [],
            cityData: [],
            trendDest: [],
            error: null
        }
    },
    mutations: {
        setData(state, payload) {
            state.data = payload;
        },
        setPackageData(state, payload) {
            state.packageData = payload;
        },
        setCityData(state, payload) {
            state.cityData = payload;
        },
        setTrendDest(state, payload) {
            state.trendDest = payload;
        },
        setError(state, payload) {
            state.error = payload;
        },
    },
    actions: {
        
        async fetchData({ commit }) {
            try {
                const response = await fetch(`${baseURL}/apis/packages/index?page=1?limit=10`);
                const { data } = await response.json();
                commit('setData', data.data);
            } catch(error) {
                commit('setError', error);
            }
        },
        async fetchpackageData({ commit }, id) {
            try {
                const resposne = await fetch(`${baseURL}/apis/packages/details/${id}`);
                const { data } = await resposne.json();
                commit('setPackageData', data)
            } catch (error) {
                commit('setError', error);
            }
        },
        async fetchCityData({commit}) {
            try {
                const response = await fetch(`${baseURL}/apis/packages/package_category_with_city_tge`);
                const { data } = await response.json();
                commit('setCityData', data)
            } catch (error) {
                commit('setError', error);
            }
        },
        async fetchTrendingDestination({commit}) {
            try {
                const response = await fetch(`${baseURL}/apis/packages/trending_destinations`);
                const { data } = await response.json();
                commit('setTrendDest', data)
            } catch (error) {
                commit('setErrro', error);
            }
        }
    },
    getters: {
        getData(state) {
            return state.data;
        },
        getpackageData(state) {
            return state.packageData;
        },
        getCityData(state) {
            return state.cityData;
        },
        getTrendDest(state) {
            return state.trendDest;
        },
        getError(state) {
            return state.error;
        }
    }
});

export default store;