<template>
    <div id="app">
        <router-view />
    </div>

</template>

<!--1.引入组件-->
<!--2.挂载组件-->
<!--3.在模板中使用-->
<script>

    export default {
       components:{  /* 前面的组件名称不能和HTML标签一样*/
        },
    }
</script>

<style lang="scss" scoped>
#app {
    color: #33aef0;
    height: 100%;
}

</style>