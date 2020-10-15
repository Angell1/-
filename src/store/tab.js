
export default {
  state: {
    menu:[],
    currentMenu:{
      path: '/',
      label: '',
      icon: ''
    }
  },
  mutations: {
    selectMenu(state,val){
      if (val.icon !== 'home'){
        state.currentMenu = val
      } else {
        state.currentMenu = {
          path: '/',
          label: '',
          icon: ''
        }
      }

    }
  },
  actions: {}
}
