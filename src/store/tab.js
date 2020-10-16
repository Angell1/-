
export default {
  state: {
    menu:[],
    currentMenu:{
      path: '/',
      name:'home',
      label: '',
      icon: ''
    },
    tablist:[
        {
          path: '/',
          label: '首页',
          name:'home',
          icon: 'home'
        },

    ],
  },
  mutations: {
    selectMenu(state,val){
      if (val.name !== 'home'){
        state.currentMenu = val
        //如果val不存在，则添加
        let result = state.tablist.findIndex(item => item.name === val.name)
        result === -1 ? state.tablist.push(val) : ''
      } else {
        state.currentMenu = {
          path: '/',
          name:'home',
          label: '',
          icon: ''
        }
      }
    },
    closeTab(state,val) {
      let result = state.tablist.findIndex(item => item.name === val.name)
      state.tablist.splice(result,1)

    }

  },
  actions: {}
}
