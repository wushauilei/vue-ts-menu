<template>
    <div class="navbar">
        <van-nav-bar
            :fixed="true"
            :placeholder="true"
            :title="title"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  components: {},
})
export default class WNavbar extends Vue {
  public get title() {
    return this.$store.state.navbarTitle;
  }
  public get oldNavbarTitle() {
    return this.$store.state.oldNavbarTitle;
  }
  public get oldTabbarActive() {
    return this.$store.state.oldTabbarActive;
  }
  public onClickLeft(): void {
    this.$store.commit('setNavbarTitle', this.oldNavbarTitle);
    this.$store.commit('setTabbarActive', this.oldTabbarActive);
    this.$router.go(-1);
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 5.7vh;
}
</style>
