/* eslint-disable semi */
<template>
  <el-container class="project">
    {{textList}}
    <el-tabs v-model="tabName"
             @tab-click="handleClick">
      <template v-for="(tab,tabIndex) in tabList">
        <el-tab-pane :key="tabIndex"
                     :label="tab.label"
                     :name="tab.name">
          <div v-for="(text,textIndex) in textList"
               :key="textIndex"
               class="box">
            <div class="box-item">
              <div class="box-item-top">
                <el-upload action=""
                           class="avatar-uploader"
                           :auto-upload="false"
                           :show-file-list="false"
                           :on-change="selectNoticeImg">
                  <img v-if=" text.text1!== ''"
                       :src="text.text1"
                       class="avatar" />
                  <i v-else
                     class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
                <div class="btns-box">
                  <el-button type="danger"
                             size="mini"
                             @click="deleteHandler(textIndex)">删除</el-button>
                  <el-switch v-model="valueList[textIndex]"
                             active-color="#13ce66"
                             inactive-color="#ddd">
                  </el-switch>
                </div>
              </div>
              <div class="box-item-bottom">
                跳转链接：<el-input size="mini"></el-input>
              </div>
            </div>
            <div v-if="valueList[textIndex]===true"
                 class="box-item">
              <div class="box-item-top">
                <el-upload action=""
                           class="avatar-uploader"
                           :auto-upload="false"
                           :show-file-list="false"
                           :on-change="selectNoticeImg">
                  <img v-if=" text.text2!== ''"
                       :src="text.text2"
                       class="avatar" />
                  <i v-else
                     class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
                <div class="btns-box">
                  <el-button type="danger"
                             size="mini"
                             @click="deleteHandler(textIndex)">删除</el-button>
                </div>
              </div>
              <div class="box-item-bottom">
                跳转链接：<el-input size="mini"></el-input>
              </div>
            </div>
          </div>
          <div v-if="showAddBtn"
               class="add-btn"
               @click="addItem">添加</div>
        </el-tab-pane>
      </template>
    </el-tabs>
  </el-container>
</template>
<script>
export default {
  data () {
    return {
      num: 1,
      showAddBtn: true,
      textList: [],
      valueList: [],
      tabName: 'first', // 初始化默认选中第一个tab
      tabList: [
        { label: '首页', name: 'first' },
        { label: '分类', name: 'second' },
        { label: '我的', name: 'third' },
        { label: '完善信息', name: 'fourth' }
      ]
    }
  },
  mounted () {
    console.log('第一个')
    this.textList = [
      {
        text1:
          'https://ipi-mzh.oss-cn-hangzhou.aliyuncs.com/file/upload/mango/20200528/20200528153744_dl8b.png',
        text2:
          'https://ipi-mzh.oss-cn-hangzhou.aliyuncs.com/file/upload/mango/20200528/20200528153744_dl8b.png'
      }
    ]
  },
  methods: {
    addItem () {
      if (this.textList.length <= 5) {
        this.textList.push({ text1: '', text2: '' })
      }
      if (this.textList.length === 6) {
        this.showAddBtn = false
      }
    },
    deleteHandler (textIndex) {
      console.log(textIndex, '0000')
      this.textList.splice(textIndex, 1)
      if (this.textList.length <= 5) {
        this.showAddBtn = true
      }
      if (this.textList.length >= 6) {
        this.showAddBtn = false
      }
      if (this.textList.length === 0) {
        this.textList.push({ text1: '', text2: '' })
      }
    },
    handleClick (tab) {
      if (tab.index === '0') {
        console.log('第一个')
        this.textList = [
          {
            text1:
              'https://ipi-mzh.oss-cn-hangzhou.aliyuncs.com/file/upload/mango/20200528/20200528153744_dl8b.png',
            text2:
              'https://ipi-mzh.oss-cn-hangzhou.aliyuncs.com/file/upload/mango/20200528/20200528153744_dl8b.png'
          }
        ]
      }
      if (tab.index === '1') {
        console.log('第二个')
        this.textList = [
          {
            text1:
              'https://ipi-mzh.oss-cn-hangzhou.aliyuncs.com/file/upload/mango/20200528/20200528154711_9xyk.png',
            text2:
              'https://ipi-mzh.oss-cn-hangzhou.aliyuncs.com/file/upload/mango/20200528/20200528154711_9xyk.png'
          }
        ]
      }
      if (tab.index === '2') {
        console.log('第三个')
        this.textList = [
          {
            text1:
              'https://ipi-mzh.oss-cn-hangzhou.aliyuncs.com/file/upload/mango/20200528/20200528155821_kbu9.png',
            text2:
              'https://ipi-mzh.oss-cn-hangzhou.aliyuncs.com/file/upload/mango/20200528/20200528155821_kbu9.png'
          }
        ]
      }
      if (tab.index === '3') {
        console.log('第四个')
        this.textList = [
          {
            text1:
              'https://ipi-mzh.oss-cn-hangzhou.aliyuncs.com/file/upload/mango/20200528/20200528162346_xvct.png',
            text2:
              'https://ipi-mzh.oss-cn-hangzhou.aliyuncs.com/file/upload/mango/20200528/20200528162346_xvct.png'
          }
        ]
      }
    }
  }
}
</script>
<style lang='scss' scoped>
.project {
  display: flex;
  flex-direction: column;
  padding: 30px;
}

.box {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  width: 100%;
  height: 150px;
  // border: 1px solid red;
}

.add-btn {
  width: 80px;
  height: 80px;
  // border: 1px solid red;
}

.el-input {
  width: 400px;
}

.box-item {
  width: 50%;
  text-align: left;
  // border: 1px solid red;
}

.box-item-top {
  display: flex;
  width: 100%;
}

.box-item-bottom {
  font-size: 12px;
}

.avatar-uploader {
  width: 50%;
}

/deep/.avatar-uploader .el-upload {
  width: 100%;
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 100%;
  height: 100px;
  line-height: 100px;
  text-align: center;
}
.avatar {
  width: 100%;
  height: 100px;
  display: block;
  object-fit: scale-down;
}

.btns-box {
  display: flex;
  align-items: center;
  height: 100px;
  margin-left: 30px;
}

.el-input {
  width: 30%;
}
</style>
