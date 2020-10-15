<template>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#33aef0"
      text-color="#fff"
      active-text-color="#ffd04b">

      <el-menu-item :index="item.path" v-for="item in  noChildren " :key="item.path" @click="clickMenu(item)">
        <i :class="'el-icon-'+ item.icon"></i>
        <span slot="title">{{ item.label }}</span>
      </el-menu-item>

      <el-submenu index="index" v-for="(item,index) in  hasChildren " :key="index">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{ item.label }}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item :index="subItem.path" v-for="(subItem,subIndex) in item.children" :key="subIndex" @click="clickMenu(subItem)">{{ subItem.label }}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>



</template>


<script>
export default {
    computed:{
        noChildren(){
            return this.asideMenu.filter(item => !item.children)
        },
        hasChildren(){
            return this.asideMenu.filter(item => item.children)
        }
    },
    data(){
        return{
            asideMenu:[
                {
                    path: '/',
                    label: '首页',
                    icon: 'home'
                },
                {
                    path: '/video',
                    label: '视频管理',
                    icon: 'video-play'
                },
                 {
                    path: '/user',
                    label: '用户管理',
                    icon: 'user'
                },
                {
                    label: '其他',
                    icon: 'user',
                    children:[
                        {
                            path: '/page1',
                            label: '页面1',
                            icon:'setting'
                        },
                         {
                            path: '/page2',
                            label: '页面2',
                            icon:'setting'
                        }
                    ]
                },
            ]
        }
    },
  methods: {
    clickMenu(item) {
      this.$store.commit('selectMenu',item)
    }
  },
}
</script>

<style lang="scss" scoped>
.el-menu{
    height: 100%;
}
</style>
