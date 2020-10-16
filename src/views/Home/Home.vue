<template>
    <el-row class="home">
        <el-col :span="8">
            <el-card shadow="hover" style="height: 290px;">
                <div class = "userinfo">
                    <p >用户名</p>
                    <p >个人信息 </p>
                    <p >权限 </p>
                </div>
                <div class = "login-info">
                    <p >上次登录时间:<span>2020-10-16</span></p>
                    <p >上次登录地点:<span>未知</span></p>
                </div>
            </el-card>
            <el-card shadow="hover" style="height: 520px;">
                <el-table :data="tableData">
                    <el-table-column v-for="(val,key) in tableLabel" :key="key" :prop="key" :label="val">

                    </el-table-column>
                </el-table>
            </el-card>

        </el-col>

        <el-col :span="16">
            <div class="num">
                   <el-card shadow="hover" v-for="item in 6" :key="item">
                       <i class="icon"></i>
                       <div class="detail">
                           <p>今日支付订单</p>
                           <p>1234</p>
                       </div>
                   </el-card>
            </div>
            <el-card shadow="hover">
                <div style="height: 280px">

                </div>
            </el-card>
            <div class="graph">
                   <el-card shadow="hover">
                        <div style="height: 280px">

                        </div>
                   </el-card>
                  <el-card shadow="hover">
                        <div style="height: 280px">

                        </div>
                   </el-card>
            </div>
        </el-col>
    </el-row>
</template>

<script>

export default {
    data() {
        return {
            // userImg: require,
            countData: [],
            tableData: [],
            tableLabel:{
                name:'课程名',
                todayBuy:'今日购买',
                monthBuy:'本月购买',
                totalBuy:'总购买',
            }
        }
    },
    methods: {
        getTableData() {
            this.$http.get('/home/getData').then(res => {
                res = res.data
                console.log(res.data)
                this.tableData = res.data.tableData
                console.log(this.tableData)
            })
            }
        },
        created() {
            this.getTableData()
        }
}
</script>
<style lang="scss" scoped>
@import "src/assets/scss/home";
</style>
