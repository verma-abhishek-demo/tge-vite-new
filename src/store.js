import { createStore } from "vuex";
import { baseURL } from '@/config';
import axios from 'axios';

const store = createStore({
    state() {
        return {
            data: null,
            packageData: [],
            cityData: [],
            citySlugData: [],
            searchCity: [],
            trendPackage: [],
            currentPage: 1,
            activity: [],
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
        setCitySlugData(state, payload) {
            state.citySlugData = payload;
        },
        setSearchCity(state, payload) {
            state.searchCity = payload;
        },
        setTrendPackage(state, payload) {
            state.trendPackage = payload;
        },
        setError(state, payload) {
            state.error = payload;
        },
        setCurrentPage(state, page) {
            state.currentPage = page;
        },
        setActivity(state, payload) {
            state.activity = payload;
        }
    },
    actions: {
        
        async fetchData({ commit }, page = 1) {
            try {
                const response = await fetch(`${baseURL}/apis/packages/index?page=${page}&limit=9`);
                const { data } = await response.json();
                commit('setData', data.data);
                commit('setCurrentPage', page);
            } catch(error) {
                commit('setError', error);
            }
        },
        async fetchpackageData({ commit }, id) {
            try {
                const resposne = await fetch(`${baseURL}/apis/packages/details/${id}`);
                const { data } = await resposne.json();
                commit('setPackageData', data);
            } catch (error) {
                commit('setError', error);
            }
        },
        async fetchCityData({commit}) {
            try {
                const response = await fetch(`${baseURL}/apis/packages/package_category_with_city_tge`);
                const { data } = await response.json();
                commit('setCityData', data);
            } catch (error) {
                commit('setError', error);
            }
        },
        async fetchCitySlugData({commit}, citySlug) {
            try {
                const response = await fetch(`${baseURL}/apis/packages/package_with_city`);
                const { data } = await response.json();
                console.log('verAAA', data);
                const filteredData = data.data.filter(item => item.citySlug == citySlug);
                console.log('vermaAbhi', filteredData);
                commit('setCitySlugData', filteredData);
            } catch (error) {
                commit('setError', error);
            }
        },
        async fetchSearchCity({commit}, query) {
            try {
                const response = await fetch(`${baseURL}/apis/packages/city/${query}`);
                const { data } = await response.json();
                console.log('mer naam', data);
                commit('setSearchCity', data);
            } catch (error) {
                commit('setError', error);
            }
        },
        async fetchTrendPackage({commit}) {
            try {
                const resposne = await axios.get(`${baseURL}/apis/packages/package_tranding_tge`);
                const { data } = resposne.data;
                commit('setTrendPackage', data);
            } catch (error) {
                commit('setError', error);
            }
        },
        async fetchActivities({commit}, page = 2) {
            try {
                const response = await axios.get(`${baseURL}/apis/packages/typePacakge/${page}`);
                const { data } = response.data;
                commit('setActivity', data);
            } catch (error) {
                commit('setError', error);
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
        getCitySlugData(state) {
            return state.citySlugData;
        },
        getSearchCity(state) {
            return state.searchCity;
        },
        getTrendPackage(state) {
            return state.trendPackage;
        },
        getError(state) {
            return state.error;
        },
        getCurrentPage(state) {
            return state.currentPage;
        },
        getActivity(state) {
            return state.activity;
        }
    }
});

export default store;