<template>
  <div class="user-box">

  </div>
</template>


<script>
import { ref, getCurrentInstance, onMounted } from 'vue'
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



// <script>
// import { ref, getCurrentInstance, onCreated } from 'vue'
// export default {
//   name: 'user',
//   setup(props) {
//     const { ctx } = getCurrentInstance()

//     onCreated( () => {
//       get()
//     })
//     function get() {
//       let data = {}
//       ctx.getRequest('http://localhost:9521/user/list', data).then( res => {
//         console.log(res, 15555)
//       })
//     }

//     return { get }
//   }
// }
// </script>
