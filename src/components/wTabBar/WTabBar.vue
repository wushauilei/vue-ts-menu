<template>
  <div id="tabbar">
    <van-tabbar v-model="active" @change="tabBarChangeFn">
      <van-tabbar-item name="home" icon="home-o" v-show="active !== 'home'" >首页</van-tabbar-item>
      <van-tabbar-item name="home" icon="wap-home" v-show="active === 'home'" >首页</van-tabbar-item>
      <van-tabbar-item name="category" icon="wap-nav" v-show="active !== 'category'" >分类</van-tabbar-item>
      <van-tabbar-item name="category" icon="bars" v-show="active === 'category'" >分类</van-tabbar-item>
      <van-tabbar-item name="user" icon="user-o" v-show="active !== 'user'" >我的</van-tabbar-item>
      <van-tabbar-item name="user" icon="manager" v-show="active === 'user'" >我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';


@Component({
  components: {},
})
export default class WTabBar extends Vue {
  public active: string = 'home';

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
      case 'home':
        this.$router.push({ name: 'Home' });
        break;
      case 'category':
        this.$router.push({ name: 'Category' });
        break;
      case 'user':
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