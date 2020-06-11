<template>
  <el-container>
    <el-header class="header-class" height="60px">XX后台管理系统</el-header>
    <el-container class="container-buttom">
      <el-aside class="aside-class" width="200px">
        <el-menu router class="el-menu-vertical-demo" @select="handleSelect">
          <template v-for="(item, index) in menuList">
            <!-- 一级菜单 -->
            <el-submenu :key="index" :index="item.path">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{ item.name }}</span>
              </template>
              <!-- 二级菜单 -->
              <template v-if="item.children.length > 0">
                <el-menu-item
                  v-for="(itemt, indext) in item.children"
                  :key="indext"
                  :index="item.path + '/' + itemt.path"
                  >{{ itemt.name }}
                </el-menu-item>
              </template>
            </el-submenu>
          </template>
        </el-menu>
      </el-aside>
      <el-main>
        <!-- 面包屑导航 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item>{{ firstTitle }}</el-breadcrumb-item>
          <el-breadcrumb-item>{{ secondTitle }}</el-breadcrumb-item>
        </el-breadcrumb>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  data () {
    return {
      menuList: [],
      firstTitle: '订单中心',
      secondTitle: '订单管理'
    }
  },
  mounted () {
    // 获取路由信息
    this.menuList = this.$router.options.routes[0].children
    console.log(this.$route, '路由信息')
  },
  methods: {
    handleSelect (e) {
      this.menuList.forEach(item => {
        if (e.includes(item.path)) {
          this.firstTitle = item.name
          item.children.forEach(itemt => {
            if (e.includes(itemt.path)) {
              this.secondTitle = itemt.name
            }
          })
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.el-container {
  height: 100%;
}

.el-header {
  height: 200px;
}

.container-buttom {
  height: calc(100% - 60px);
}

.el-menu {
  border: none;
  background-color: #35495e;
}

/deep/.el-submenu {
  .el-submenu__title {
    text-align: left;
    color: #fff;

    &:hover {
      background-color: rgb(32, 51, 73);
    }
  }
}

.el-menu-item {
  background-color: #35495e;
  color: #fff;

  &:hover {
    background-color: rgb(32, 51, 73);
  }
  &:focus {
    background-color: rgb(45, 51, 73);
  }
}

.header-class {
  line-height: 60px;
  text-align: left;
  background-color: darkcyan;
  color: #fff;
  font-size: 24px;
  font-weight: bolder;
}

.aside-class {
  background-color: #35495e;
}
</style>
