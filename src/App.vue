<template>
  <div id="app">
    <w-nav-bar v-show="$route.meta.navbar" />
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <w-tab-bar class="tab-bar" v-show="tabBarIsShow" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    wTabBar: () => import('@/components/wTabBar/WTabBar.vue'),
    wNavBar: () => import('@/components/wNavBar/WNavBar.vue'),
  },
})
export default class App extends Vue {
  public get tabBarIsShow() {
    const rName = this.$route.name;
    if (rName === 'Home' || rName === 'Category' || rName === 'User') {
      return true;
    } else {
      return false;
    }
  }
}
</script>

<style lang="scss">
#app {
  .tab-bar {
    position: fixed;
    bottom: 0;
    left: 0;
  }
}
</style>
