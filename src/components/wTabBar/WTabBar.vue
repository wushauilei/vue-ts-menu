<template>
  <div id="tabbar">
    <van-tabbar v-model="active" @change="tabBarChangeFn">
      <van-tabbar-item name="Home" icon="home-o" v-show="active !== 'Home'" >首页</van-tabbar-item>
      <van-tabbar-item name="Home" icon="wap-home" v-show="active === 'Home'" >首页</van-tabbar-item>
      <van-tabbar-item name="Category" icon="wap-nav" v-show="active !== 'Category'" >分类</van-tabbar-item>
      <van-tabbar-item name="Category" icon="bars" v-show="active === 'Category'" >分类</van-tabbar-item>
      <van-tabbar-item name="User" icon="user-o" v-show="active !== 'User'" >我的</van-tabbar-item>
      <van-tabbar-item name="User" icon="manager" v-show="active === 'User'" >我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';


@Component({
  components: {},
})
export default class WTabBar extends Vue {
  public active: string = 'Home';

  @Watch('tabbarActive')
  public onChildChangeTabbarActive(nVal: string, oVal: string) {
    this.active = nVal;
  }
  public get tabbarActive() {
    return this.$store.state.tabbarActive;
  }

  public tabBarChangeFn(active: string): void {
    this.$store.commit('setTabbarActive', active);
    switch (active) {
      case 'Home':
        this.$router.push({ name: 'Home' });
        break;
      case 'Category':
        this.$router.push({ name: 'Category' });
        break;
      case 'User':
        this.$router.push({ name: 'User' });
        break;
    }
  }
}
</script>

<style lang="scss" scoped>
#tabbar {
  // width: 7.5rem;
  height: 9vh;
}
</style>