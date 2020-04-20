import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import { api } from "./AxiosStore";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        profile: {},
        blogs: [],
        activeBlog: {},
        comments: {}
    },
    mutations: {
        setProfile(state, profile) {
            state.profile = profile;
        },

        setBlogs(state, blogs) {
            state.blogs = blogs
        },

        setActiveBlog(state, blog) {
            state.activeBlog = blog
        }
    },
    actions: {
        setBearer({}, bearer) {
            api.defaults.headers.authorization = bearer;
        },
        resetBearer() {
            api.defaults.headers.authorization = "";
        },
        async getProfile({ commit }) {
            try {
                let res = await api.get("profile");
                commit("setProfile", res.data);
            } catch (error) {
                console.error(error);
            }
        },

        async getBlog({ commit, dispatch }, blogId) {
            try {
                let res = await api.get(`blogs/${blogId}`)
                console.log('activeBlog', res.data)
                commit('setActiveBlog', res.data)
            } catch (error) {
                console.error(error)
            }
        },

        // async addComment({ commit, dispatch }) {
        //     try {
        //         let res = await api.post('blogs', newBlog)
        //         dispatch('getcomment')
        //     } catch (error) {
        //         console.error(error)
        //     }
        // },

        async addBlog({ commit, dispatch }, newBlog) {
            try {
                let res = await api.post('blogs', newBlog)
                dispatch('getBlogs')
            } catch (error) {
                console.error(error)
            }
        },

        async deleteBlog({ commit, dispatch }, blogId) {
            try {
                await api.delete('blogs/' + blogId)
                dispatch('getBlogs')
            } catch (error) {
                console.error(error)
            }
        },

        async getBlogs({ commit, dispatch }) {
            try {
                let res = await api.get('blogs')
                commit('setBlogs', res.data)
            } catch (error) {
                console.error(error)
            }
        },

    },
});