<template>
  <el-container>
    <div>图片预览组件</div>
    <div>
      <img
        class="previewer-demo-img"
        v-for="(item, index) in list"
        :src="item.src"
        width="100"
        @click="show(index)"
        :key="index"
      />
      <previewer ref="previewer" :list="list" :options="options"> </previewer>
    </div>
  </el-container>
</template>
<script>
// eslint-disable-next-line semi
import vuePicturePreview from 'vue-picture-preview';

export default {
  components: {
    Previewer: vuePicturePreview
  },
  data () {
    return {
      list: [
        {
          msrc:
            'https://tva1.sinaimg.cn/thumbnail/006y8mN6ly1g95rjyub5bj30go0b40wc.jpg',
          src:
            'https://tva1.sinaimg.cn/large/006y8mN6ly1g95rjyub5bj30go0b40wc.jpg',
          w: 600,
          h: 400
        },
        {
          msrc:
            'https://tva1.sinaimg.cn/thumbnail/006y8mN6ly1g95rmt8pq4j30go0b4n28.jpg',
          src:
            'https://tva1.sinaimg.cn/large/006y8mN6ly1g95rmt8pq4j30go0b4n28.jpg',
          w: 600,
          h: 400
        },
        {
          msrc:
            'https://tva1.sinaimg.cn/thumbnail/006y8mN6ly1g95rn3grt6j30go0b4n0w.jpg',
          src:
            'https://tva1.sinaimg.cn/large/006y8mN6ly1g95rn3grt6j30go0b4n0w.jpg',
          w: 600,
          h: 400
        }
      ],
      options: {
        getThumbBoundsFn (index) {
          // eslint-disable-next-line
          let thumbnail = document.querySelectorAll(".previewer-demo-img")[
            index
          ]
          // get window scroll Y
          let pageYScroll =
            window.pageYOffset || document.documentElement.scrollTop
          // optionally get horizontal scroll
          // get position of element relative to viewport
          let rect = thumbnail.getBoundingClientRect()
          // w = width
          return { x: rect.left, y: rect.top + pageYScroll, w: rect.width }
          // Good guide on how to get element coordinates:
          // http://javascript.info/tutorial/coordinates
        }
      }
    }
  },
  mounted () {},
  methods: {
    show (index) {
      // 显示特定index的图片，使用ref
      this.$refs.previewer.show(index)
    }
  }
}
</script>
