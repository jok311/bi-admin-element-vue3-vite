<template>
  <div class="user-box">
    66666
    <!-- <img src="/@/assets/404.svg" alt="404"> -->
    <MyIcon />
    <!-- <errorIcon /> -->
    <!-- <component v-bind:is="errorIcon"></component> -->
  </div>
</template>


<script>
import { ref, getCurrentInstance, onMounted, defineAsyncComponent } from 'vue'
import imgs from 'globby!/@/assets/**/*.@(jpg|png|svg)'

import { VueComponent as MyIcon } from '/@/assets/404.svg';


console.log(MyIcon, 55555)


console.log(imgs, 166666)
export default {
    name: 'User',
    components: {
      MyIcon,
      // errorIcon: defineAsyncComponent( () => import('/@/assets/404.svg'))
    },
    setup() {
      const { ctx } = getCurrentInstance()
      const pageNum = ref(1)
      const pageSize = ref(10)
      const className = '404'
      const errorIcon = defineAsyncComponent( () => import('/@/assets/404.svg'))
      console.log(errorIcon, 3335555)
      onMounted( () => {
        get()
      })
      function get() {
        let data = {
          page_num: pageNum.value,
          page_size: pageSize.value
        }
        ctx.getRequest('http://localhost:9521/user/list', data).then( res => {
          console.log(res, 15555)
        })
      }

      return { get, errorIcon }
    }
}
</script>

