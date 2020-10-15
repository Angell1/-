<template>
    <div>
        <v-header></v-header>
        <h2>这是一个新闻组件</h2>
        <ul>
            <li>aaaaaa</li>
            <li>bbbbb</li>
            <li>cccccc</li>
            <li>ddddd</li>
        </ul>

    </div>
</template>
<script>
import Header from './Header.vue';//引入头部组件
export default {
    data(){
        return{
            msg:'我是一个新闻组件'
        }
    },
    components:{
        'v-header':Header,
    }
}
</script>
<style scoped>

</style>
