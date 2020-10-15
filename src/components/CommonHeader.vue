<template>
    <header>

        <div class="l-content">
             <el-button type="primary" icon="el-icon-menu" size="mini"></el-button>
             <el-breadcrumb separator="/">
                  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                  <el-breadcrumb-item><a href="/">{{current.label}}</a>
                  </el-breadcrumb-item>
             </el-breadcrumb>
        </div>

        <div class="r-content">
            <el-dropdown trigger="click" size="mini">
              <span class="el-dropdown-link"><img :src="userImg" alt="" class="user"></span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item >个人中心</el-dropdown-item>
                <el-dropdown-item >退出</el-dropdown-item>

              </el-dropdown-menu>
            </el-dropdown>
        </div>
    </header>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState({
            current: state => state.tab.currentMenu
        })
    },
    data(){
        return{
           userImg:require('../assets/images/user.png')
        }
    }
}
</script>
<style lang="scss" scoped>
header {
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: space-between;
}
.r-content {
  .user {
      width: 40px;
      height: 40px;
      border-radius: 50%;
  }
}
.l-content {
    display: flex;
    align-items: center;
    .el-button {
        margin: 20px;
    }
}
</style >

<style lang="scss">

.el-breadcrumb__item {
  .el-breadcrumb__inner {
    color: #ffffff;
  }
  &:last-child {
    .el-breadcrumb__inner {
      color: #ffffff;
    }
  }
}
</style>