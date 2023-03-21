<template>
  <div>
    <el-form ref="elForm" :model="formData" :rules="rules" size="medium" label-width="100px">
      <el-form-item label="请输入" prop="str">
        <el-input v-model="formData.str" type="textarea" placeholder="请输入：一行表示一条数据
   1.原生表单：List<NameValuePair> formParams = new ArrayList<>(); 最后一行为变量命名, 例如formParams-webResponse，不输入就默认
   2.map表单：Map<String,String> paramMap = Maps.newLinkedHashMap(); 最后一行为变量命名, 例如paramMap-webResponse，不输入就默认"
                  :autosize="{minRows: 8, maxRows: 4}" :style="{width: '100%'}"></el-input>
      </el-form-item>

      <el-form-item label="选择类型" prop="type">
        <el-radio-group v-model="formData.type" size="medium">
          <el-radio v-for="(item, index) in typeOptions" :key="index" :label="item.value"
                    :disabled="item.disabled">{{ item.label }}
          </el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item size="large">
        <el-button type="primary" @click="submitForm">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>


      <el-form-item label="结果输出" prop="resStr">
        <el-input v-model="resStr" type="textarea" placeholder="提交后结果显示区域" hide-required-asterisk="false"
                  :autosize="{minRows: 8, maxRows: 8}" :style="{width: '100%'}"></el-input>
      </el-form-item>

    </el-form>

    <div>
      <div style="padding-left: 10px;float: left">
        <el-main>
          <div style="margin-left:0px; line-height:0px;float: left">访问记录</div>
          <el-table
              :data="iptableData"
              style="width: 100%;margin-top: 10px"
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
                label="ip"
                width="80">
            </el-table-column>
            <el-table-column
                prop="address"
                label="访问次数"
                width="100">
            </el-table-column>
          </el-table>
        </el-main>
      </div>

      <div style="padding-left: 200px;;float: left">
        <el-main>
          <div style="margin-left:0px; line-height:0px;float: left">程序更新日志</div>
          <el-table
              :data="devtableData"
              style="width: 100%;margin-top: 10px"
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
                width="500">
            </el-table-column>
          </el-table>
        </el-main>
      </div>
    </div>
  </div>
</template>
<script>
import {sendMsg} from "./api";

export default {
  components: {},
  props: [],
  data() {
    return {
      devtableData: [{
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
      ],
      iptableData: [{
        date: '2023-03-17',
        name: '127.0.0.1',
        address: '5200',
      }, {
        date: '2023-03-21',
        name: '127.0.0.2',
        address: '6523',
      }, {
        date: '2023-03-21',
        name: '127.0.0.3',
        address: '1235',
      }
      ],
      formData: {
        str: undefined,
        type: 1,
      },
      rules: {
        str: [{
          required: true,
          message: '请输入请输入',
          trigger: 'blur'
        }],
        type: [{
          required: true,
          message: '选择类型不能为空',
          trigger: 'change'
        }],
      },
      typeOptions: [{
        "label": "id加单引号",
        "value": 1
      }, {
        "label": "Name加单引号",
        "value": 2
      }, {
        "label": "身份证加密",
        "value": 3
      }, {
        "label": "原生表单",
        "value": 4
      }, {
        "label": "MAP表单",
        "value": 5
      }
      ],
      resStr: "",
    }
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
  },
  methods: {
    submitForm() {
      this.$refs.elForm.validate(valid => {
        if (valid) {
          sendMsg(this.formData).then(response => {
            // this.$alert("发送成功")
            this.resStr = response.msg;
            // this.$alert("msg：" + this.resStr)
          }).catch(() => {

          })
        }
      })
    },
    resetForm() {
      this.$refs['elForm'].resetFields()
      this.resStr = "";
    },
  }
}

</script>

<style>

</style>
