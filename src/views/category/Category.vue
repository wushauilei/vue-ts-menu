<template>
  <div class="category">
    <div class="category-main-left">
      <van-sidebar v-model="activeKey" @change="sidebarChangeFn">
        <van-sidebar-item :title="item.firstName" v-for="item in firstlevelmenu" :key="item.parentId" />
      </van-sidebar>
    </div>
    <div class="category-main-right">
      <van-grid :gutter="10">
        <van-grid-item v-for="value in secondarymenu" :key="value.id" @click="gridClickFn(value)" icon="hot-sale-o" :text="value.secondaryName" />
      </van-grid>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Api from '@/api/index';

@Component({
    components: {},
})
export default class Category extends Vue {
  public activeKey: number = 0;
  public firstlevelmenu: any[] = [];
  public secondarymenu: any[] = [];
  private Api = new Api();

  public sidebarChangeFn(activeKey: any): void {
    const parentId = this.firstlevelmenu[activeKey].parentId;
    this.getSecondarymenu(parentId);
  }
  public gridClickFn(value: any): void {
    this.$store.commit('setSecondarymenuId', Number(value.id));
    this.$store.commit('setNavbarTitle', value.secondaryName);
    this.$router.push({ name: 'Threelevelcatalog', query: { secondarymenuId: value.id, secondaryName: value.secondaryName } });
  }

  /**
   * @function getSecondarymenu 请求二级菜单
   * @param parentId 一级菜单ID
   */
  public getSecondarymenu(parentId: number): void {
    this.Api.getSecondarymenu(parentId).then((res) => {
      this.secondarymenu = res.data;
    });
  }
  /**
   * @function getFirstlevelmenu 请求一级菜单
   */
  public getFirstlevelmenu(): void {
    this.Api.getFirstlevelmenu().then((res) => {
      this.firstlevelmenu = res.data;
    });
  }

  public created() {
    this.getFirstlevelmenu();
    this.getSecondarymenu(10001);
  }
}
</script>

<style lang="scss" scoped>
.category {
  display: flex;
  flex-flow: row;
  .category-main-left {
    width: 24vw;
    height: 94vh;
    overflow: auto;
  }
  .category-main-right {
    width: 76vw;
    height: 94vh;
    overflow: auto;
    color: red;
  }
}
</style>