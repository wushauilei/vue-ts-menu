<template>
  <div class="waterfall">
      <ul>
          <li v-for="item in waterfallImgArr1" :key="item.id * 2" @click="imgClickFn(item)">
              <img class="li-img" :src="item.albums" :alt="item.name">
          </li>
      </ul>
      <ul>
          <li v-for="item in waterfallImgArr2" :key="item.id * 3" @click="imgClickFn(item)">
              <img class="li-img" :src="item.albums" :alt="item.name">
          </li>
      </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import MenuData from '../../model/MenuDetail';

@Component({
    components: {},
})
export default class Waterfall extends Vue {
    public waterfallImgArr1: MenuData[] = [];
    public waterfallImgArr2: MenuData[] = [];

    @Prop(Array) public imgArr!: MenuData[];

    @Watch('imgArr')
    public onChildChangeImgArr(nVal: MenuData[], oldVal: MenuData[]) {
        this.clWaterfallImgArr(nVal);
    }

    public clWaterfallImgArr(imgArr: MenuData[]): void {
        for (let i = 0; i < imgArr.length; i++) {
            i % 2 ? this.waterfallImgArr2.push(imgArr[i]) : this.waterfallImgArr1.push(imgArr[i]);
        }
    }

    public imgClickFn(item: any): void {
        this.$store.commit('setNavbarTitle', item.name);
        this.$router.push({name: 'MenuDetail', query: {id: item.id}});
    }
}
</script>

<style lang="scss" scoped>
.waterfall {
    display: flex;
    flex-flow: row;
    li {
        margin-bottom: 1vh;
    }
    ul {
        &:last-child {
            margin-left: 2vw;
        }
    }
    .li-img {
        width: 45vw;
        height: 45vw;
    }
}
</style>