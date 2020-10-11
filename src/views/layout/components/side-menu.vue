<template>
  <div class="side-menu-box" :style="{width: collapsed == false ? '256px' : '80px' }">
    <div class="collapsed-box">
      <span @click="toggleCollapsed">
        <MenuUnfoldOutlined v-if="collapsed" />
        <MenuFoldOutlined v-else />
      </span>
    </div>
    <div class="menu-box">
      <a-menu
        v-model:openKeys="openKeys"
        v-model:selectedKeys="selectedKeys"
        mode="inline"
        theme="dark"
        :inline-collapsed="collapsed"
      >
        <a-menu-item key="1">
          <router-link to="/dash/box">
            <PieChartOutlined />
            <span>dash-box</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="2">
          <router-link to="/dash/template">
            <DesktopOutlined />
            <span>dash-template</span>
          </router-link>          
        </a-menu-item>
        <a-menu-item key="2999">
          <router-link to="/draggable/index">
            <DesktopOutlined />
            <span>draggable-box</span>
          </router-link>          
        </a-menu-item>
        <a-menu-item key="29999">
          <router-link to="/vue-grid-out/index">
            <DesktopOutlined />
            <span>vue-grid-out-box</span>
          </router-link>          
        </a-menu-item>
        <a-menu-item key="3">
          <InboxOutlined />
          <span>Option 3</span>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <template v-slot:title>
            <span><MailOutlined /><span>Navigation One</span></span>
          </template>
          <a-menu-item key="5">Option 5</a-menu-item>
          <a-menu-item key="6">Option 6</a-menu-item>
          <a-menu-item key="7">Option 7</a-menu-item>
          <a-menu-item key="8">Option 8</a-menu-item>
          <a-menu-item key="5">Option 5</a-menu-item>
          <a-menu-item key="6">Option 6</a-menu-item>
          <a-menu-item key="7">Option 7</a-menu-item>
          <a-menu-item key="8">Option 8</a-menu-item>
          <a-menu-item key="5">Option 5</a-menu-item>
          <a-menu-item key="6">Option 6</a-menu-item>
          <a-menu-item key="7">Option 7</a-menu-item>
          <a-menu-item key="8">Option 8</a-menu-item>
          <a-menu-item key="5">Option 5</a-menu-item>
          <a-menu-item key="6">Option 6</a-menu-item>
          <a-menu-item key="7">Option 7</a-menu-item>
          <a-menu-item key="8">Option 8</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <template v-slot:title>
            <span><AppstoreOutlined /><span>Navigation Two</span></span>
          </template>
          <a-menu-item key="9">Option 9</a-menu-item>
          <a-menu-item key="10">Option 10</a-menu-item>
          <a-sub-menu key="sub3" title="Submenu">
            <a-menu-item key="11">
              Option 11
            </a-menu-item>
            <a-menu-item key="12">
              Option 12
            </a-menu-item>
          </a-sub-menu>
        </a-sub-menu>
      </a-menu>
    </div>
  </div>
</template>

<script>
import {
MenuFoldOutlined,
MenuUnfoldOutlined,
PieChartOutlined,
MailOutlined,
DesktopOutlined,
InboxOutlined,
AppstoreOutlined,
} from '@ant-design/icons-vue';
export default {
  components: {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
    MailOutlined,
    DesktopOutlined,
    InboxOutlined,
    AppstoreOutlined,
  },
  data() {
    return {
      collapsed: false,
      selectedKeys: [],
      openKeys: [],
      preOpenKeys: [],
    };
  },
  watch: {
    openKeys(val, oldVal) {
      this.preOpenKeys = oldVal;
    },
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
      this.openKeys = this.collapsed ? [] : this.preOpenKeys;
    },
  },
};
</script>
<style lang="stylus" scoped>
.side-menu-box
  background #041527
  height 100vh
  user-select none
  overflow-y hidden
  .collapsed-box
    width 100%
    padding 16px 0
    background #041527
    color #ffffff
    display flex
    justify-content center
    align-items center
    span
      // font-size 24px
  .menu-box
    height 96vh
    overflow-y scroll
</style>