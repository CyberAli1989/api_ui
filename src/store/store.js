import {createStore} from "vuex";
import {AxiosClient} from "../AxiosClient.js";

export const store = createStore({
    state: {
        user: {
            token: null,
            data: {
                name: null,
                login: null,
            }
        }
    },
    getters: {},
    actions: {
        registerUser({commit}, payload) {
            return AxiosClient.post('/auth/register', payload).then((response) => {
                if (response.data.success) {
                    commit('setUser', payload)
                    return response.data;
                }
            });
        },
        verifyCode({commit}, payload) {
            return AxiosClient.post('/auth/verify-code', payload).then((response) => {
                if (response.data.success) {
                    commit('setUser', response.data)
                    return response.data;
                }
            }).catch((error) => {
                return error.response.data;
            });
        }
    },
    mutations: {
        setUser(state, payload) {
            state.user.token = payload?.data?.token
            state.user.data.name = payload.name ? payload.name : payload.data.user.name;
            state.user.data.login = payload.login ? payload.login : (payload.data.user.phone !== null ? payload.data.user.phone : payload.data.user.email);
            sessionStorage.setItem('USER', JSON.stringify(state.user));
        }
    }
})