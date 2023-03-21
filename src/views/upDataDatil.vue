<template>

  <el-container>
    <el-header>Header

    </el-header>
    <el-container>
      <el-aside width="500px">Aside</el-aside>
      <el-container>
        <el-main>
              <el-table
                  :data="tableData"
                  style="width: 100%"
                  height="300">
                <el-table-column
                    fixed
                    prop="date"
                    label="日期"
                    height="10"
                    width="100">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="开发人员"
                    width="80">
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="更新内容"
                    width="400">
                </el-table-column>
              </el-table>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>

</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        date: '2023-03-17',
        name: 'G',
        address: '造轮子1.0版本：拼数据加逗号，身份证号码加密',
      }, {
        date: '2023-03-21',
        name: 'J',
        address: '造轮子1.1版本：在原来的基础上添加表单处理两种模式',
      }, {
        date: '2023-03-21',
        name: 'G',
        address: '造轮子1.2版本：添加异步任务，防止网站攻击，并发量设置为500次/秒',
      }
      ]
    }
  }
}
</script>


<style>
</style>
