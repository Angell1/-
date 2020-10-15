<template>
    <el-container style="height: 100%">
      <el-aside width="200px" ><v-CommonAside></v-CommonAside></el-aside>
      <el-container>
        <el-header><v-CommonHeader>header</v-CommonHeader></el-header>
        <el-main></el-main>
      </el-container>
    </el-container>
</template>


<script>
    import CommonAside from '../components/CommonAside.vue';   //引入新闻组件
    import CommonHeader from '../components/CommonHeader.vue';   //引入新闻组件
    export default {
       components:{  /* 前面的组件名称不能和HTML标签一样*/
          'v-CommonAside':CommonAside,
          'v-CommonHeader':CommonHeader,
        },
    }
</script>


<style lang="scss" scoped>
.el-header {
    background-color: black;
}
</style>