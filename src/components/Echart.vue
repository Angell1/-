<template>
    <div style="height: 100%" ref="echart">
        echart
    </div>
</template>

<script>
    import echart from 'echarts'
    export default {
        props:{
            chartData:{
                type:Object,
                default(){
                    return {}
                }
            },
        },
        data(){
            return{
                echart:null,
                axisOption:{},

            }
        }
}
</script>
<style lang="scss" scoped>

</style>
