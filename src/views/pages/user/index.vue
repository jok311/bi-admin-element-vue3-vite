<template>
  <div class="user-box">
    66666
    <!-- <img src="/@/assets/404.svg" alt="404"> -->
    <MyIcon />
    <component v-bind:is="errorIcon"></component>
  </div>
</template>


<script>
import { ref, reactive, toRefs, getCurrentInstance, onMounted, defineAsyncComponent, computed } from 'vue'
import imgs from 'globby!/@/assets/**/*.@(jpg|png|svg)'
let name2 = '404'
import { VueComponent as MyIcon } from '/@/assets/404.svg';


// Get URL to SVG file
const img = document.createElement('img');
img.src = '/@/assets/404.svg';

console.log(img, 232323)

console.log(MyIcon, 55555)

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
      // const errorIcon = computed( () => defineAsyncComponent( () => import('/@/assets/404.svg')))
      // console.log(errorIcon, 35)
      // console.log(import('/@/assets/404.svg'), 3336666)



      const errorIcon = ref({})
      asyncComponent()



      onMounted( () => {
        get()
      })

      function asyncComponent() {
        // let iconName = "404"
        const name = '404.svg'
        const path = "/@/assets/404.svg"
        // let path = `./index.vue`

        console.log(path)
        import('/@/assets/404.svg').then( module => {
        // import('/@/assets/404.svg').then( module => {
          console.log(module, 6666)
          // errorIcon.value = module.VueComponent
        })          
      }

      // (async function importCheck() {
      //   const name = '404'
      //   const path = "import('/@/assets/404.svg)"
      //   console.log(path, 766333)
      //   console.log(eval(path))
      //   // const module = await import(path)
      //   // console.log(module, 5955959599)
      // })()

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

