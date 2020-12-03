<template>
  <div class="dash-template-box">
    dash-template: {{ template }}
    <j-a-table>
      <!-- <template v-slot:action="{ text, record }">
        <span>
          <a>Invite 一 {{ record.name }}</a>
          <a-divider type="vertical" />
          <a>Delete</a>
          <a-divider type="vertical" />
          <a class="ant-dropdown-link"> More actions <down-outlined /> </a>
        </span>
      </template> -->
      <template v-slot:namec="{ text, record }">
        <span>99999</span>
      </template>		      
      <template v-slot:agec="{ text, record }">
        <span>99999</span>
      </template>		      
    </j-a-table>
  </div>
</template>
<script>
import { ref, toRefs, reactive, onMounted, watch, watchEffect, getCurrentInstance, inject } from "vue";
export default {
  name: 'DashTemplate',
  setup(props, context) {

    const ctx = getCurrentInstance()

    const template = ref('template')

    const $myGlobalVariable = inject('$myGlobalVariable')

    console.log($myGlobalVariable, "$myGlobalVariable")

    return {
      template
    }


  }
}
</script>