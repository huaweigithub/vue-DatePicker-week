import Vue from 'vue'
import Vuex from 'vuex'
import { productList, productarr } from './shopList'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 1,
        _loading: false,
        modalarr: null,
        productList,
        productarr
    },

    mutations: {
        loadstart(state) {
            state._loading = true
            console.log('state._loading',state._loading)
        },
        addCount(state,payload) {
            state.count += payload/2
        },
        reductCount(state,payload) {
            state.count -= payload/2
        },
        addshuiguo(state) {
            const copyarr = {...state.productarr}
            state.productList.push(copyarr)
        },
        delshuiguo(state,payload) {
            state.productList.splice(payload,1)
        },
        editmodal(state,payload) {
            const copymodalarr = {...payload}
            state.modalarr = copymodalarr
        },
        handlesumit(state) {
            let {_index} = state.modalarr
            let  _modalarr = state.modalarr
            state.productList[_index].name = _modalarr.name
            state.productList[_index].price = _modalarr.price
            state.productList[_index].number = _modalarr.number
        }
    },

    getters: {
        loadingGetter: state => {
            return state._loading
        }
    },

    actions: {
        addCountAction(context,payload) {
            context.commit('addCount',payload)
        },
        reductCountAction(context,payload) {
            context.commit('reductCount',payload)
        },
        addshuiguoAction(context,payload) {
            context.commit('addshuiguo',payload)
        },
        delAction(context,payload) {
            context.commit('delshuiguo',payload)
        },
        modalAction(context,payload) {
            context.commit('editmodal',payload)
        },
        changeloading(context,payload) {
            console.log('context...')
            setTimeout(() => {
                console.log('延时'+ payload/1000 + 's结束...',payload)
                context.commit('loadstart')                
            }, payload) ;
        }
    }
})