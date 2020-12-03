<template>
  <div class="user-box">
    66666
  </div>
</template>


<script>
import { ref, getCurrentInstance, onMounted } from 'vue'
import imgs from 'globby!/@/assets/**/*.@(jpg|png|svg)'
console.log(imgs, 166666)
export default {
    name: 'User',
    components: {
    },
    setup() {

      const { ctx } = getCurrentInstance()
      const pageNum = ref(1)
      const pageSize = ref(10)
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

      return { get }
    }
}
</script>

