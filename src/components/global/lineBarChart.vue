<template>
  <div class="line-bar-chart-box">
    <div :class="className" :style="{ height, width}" ref="chartBox"></div>
    <div>{{ neWtitle }}</div>
    <div v-for="(item, index) in columns" :key="index">{{ item.label }}</div>
  </div>
</template>
<script>

import { ref, toRefs, reactive, computed, onMounted, watch, watchEffect, getCurrentInstance, inject } from "vue";
import echarts from 'echarts'

export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    className: {
      type: String,
      default: "chart"
    },    
    width: {
      type: String,
      default: '100%',
    },
    height: {
      type: String,
      default: '30vh',
    },
    data: {
      type: Array,
      default: () => {
        return []
      }
    },
    columns: {
      type: Array,
      default: () => {
        return []
      }
    },

  },
  setup(props) {

    
    const columns = computed(() => {
    console.log(props.data, props.columns, 4949494949)
      return props.columns;
    });    

    const neWtitle = computed(() => {
      console.log(props.title, 5454654654)
      return props.title;
    });    
    
    watch(
      columns,
      () => {
        if (columns) {
          console.log(columns, 57)
        }
      },
      {
        immediate: true,
        deep: true
      },
    )
    watch(
      () => props.title,
      (title, preTitle) => {
        // console.log(title, preTitle, 73)
        // if (title) {
        //   console.log(title, 304)
        // }
      },
      {
        immediate: true,
        deep: true
      },
    )

    return {
      neWtitle
    }
  }
}
</script>