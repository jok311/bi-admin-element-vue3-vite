<template>
<div class="app-main-box" style="min-height: 100%">
    <router-view v-slot="{ Component }">
        <keep-alive>
            <component :is="Component" />
        </keep-alive>
    </router-view>
</div>
</template>

<script>
export default {
    name: 'AppMain',
}
</script>

<style lang="stylus">
.app-main-box
	height 56px
</style>
