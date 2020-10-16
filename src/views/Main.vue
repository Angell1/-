<template>
    <el-container style="height: 100%">
      <el-aside width="200px" ><v-CommonAside></v-CommonAside></el-aside>
      <el-container>
        <el-header><v-CommonHeader>header</v-CommonHeader></el-header>
        <v--common-tab></v--common-tab>
        <el-main>
            <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
</template>


<script>
    import CommonAside from '../components/CommonAside.vue';   //引入左侧栏
    import CommonHeader from '../components/CommonHeader.vue';   //引入header
    import CommonTab from '../components/CommonTab.vue';   //引入header
    export default {
       components:{  /* 前面的组件名称不能和HTML标签一样*/
           'v-CommonAside':CommonAside,
           'v-CommonHeader':CommonHeader,
           'v-CommonTab':CommonTab,
        },
    }
</script>


<style lang="scss" scoped>
.el-header {
    background-color: black;
}
</style>