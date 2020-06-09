<template>
  <div id="search">
    <form action="/">
      <van-search
        v-model="value"
        show-action
        :autofocus="true"
        placeholder="请输入搜索关键词"
        @search="searchFn"
        @input="searchInputFn"
        @cancel="searchCancelFn"
      />
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class Search extends Vue {
  public value: string = '';
  public searchInputFn(value: string): void {}
  public searchCancelFn(value: string): void {
    this.$router.go(-1);
  }
  public searchFn(value: string): void {}
}
</script>