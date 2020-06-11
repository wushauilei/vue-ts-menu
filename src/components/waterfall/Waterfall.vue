<template>
  <div class="waterfall">
      <ul>
          <li v-for="item in waterfallImgArr1" :key="item.id" @click="imgClickFn(item.id)">
              <img class="li-img" :src="item.albums" :alt="item.name">
          </li>
      </ul>
      <ul>
          <li v-for="item in waterfallImgArr2" :key="item.id" @click="imgClickFn(item.id)">
              <img class="li-img" :src="item.albums" :alt="item.name">
          </li>
      </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import RecommendData from '../../model/RecommendData';

@Component({
    components: {},
})
export default class Waterfall extends Vue {
    public waterfallImgArr1: RecommendData[] = [];
    public waterfallImgArr2: RecommendData[] = [];

    @Prop(Array) public imgArr!: RecommendData[];

    @Watch('imgArr')
    public onChildChangeImgArr(nVal: RecommendData[], oldVal: RecommendData[]) {
        this.clWaterfallImgArr(nVal);
    }

    public clWaterfallImgArr(imgArr: RecommendData[]): void {
        for (let i = 0; i < imgArr.length; i++) {
            i % 2 ? this.waterfallImgArr2.push(imgArr[i]) : this.waterfallImgArr1.push(imgArr[i]);
        }
    }

    public imgClickFn(id: any): void {
        this.$router.push({path: '/menu-detail', query: {id}});
    }
}
</script>

<style lang="scss" scoped>
.waterfall {
    display: flex;
    flex-flow: row;
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