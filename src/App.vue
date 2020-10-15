<template>
    <div id="app">
        <router-view />
    </div>

</template>

<!--1.引入组件-->
<!--2.挂载组件-->
<!--3.在模板中使用-->
<script>
    import Header from './components/Header.vue';   //引入首页组件
    import Sidebar from './components/Sidebar.vue';   //引入新闻组件
    export default {
       components:{  /* 前面的组件名称不能和HTML标签一样*/
          'v-Header':Header,    //挂载Header组件
          'v-Sidebar':Sidebar,    //挂载新闻组件
        },
    }
</script>

<style lang="scss" scoped>
#app {
    color: #33aef0;
    height: 100%;
}

</style>