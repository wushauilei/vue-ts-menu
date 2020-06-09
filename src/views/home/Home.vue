<template>
  <div id="home">
    <div class="header">
      <h1>你在看什么???</h1>
      <div class="search-entrance" @click="searchEntranceClickFn">
        <van-icon class="search-icon" name="search" />
        <span>今天想吃点什么?</span>
      </div>
    </div>
    <div class="body">
      <recommend />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Api from '@/api/index.ts';
import Recommend from './recommend/Recommend.vue';

@Component({
  components: {
    Recommend,
  },
})
export default class Home extends Vue {
  public Api = new Api();
  public searchEntranceClickFn(): void {
    this.$router.push('Search');
  }
  // public created() {}
}
</script>

<style lang="scss" scoped>
#home {
  width: 92vw;
  max-height: 90vh;
  padding: 1vh 4vw;
  letter-spacing: .5vw;
  .header {
    text-align: center;
    margin-bottom: 10vh;
    .search-entrance {
      position: relative;
      background-color: #eeeeee;
      line-height: 7vh;
      height: 7vh;
      font-size: 5vw;
      span {
        color: #999999;
      }
      .search-icon {
        position: absolute;
        top: 1.8vh;
        left: 18vw;
        font-size: 6vw;
        font-weight: bold;
      }
    }
  }
}
</style>
