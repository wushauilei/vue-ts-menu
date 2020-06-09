<template>
  <div class="waterfall">
      
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import RecommendData from '../../model/RecommendData';

@Component({
    components: {},
})
export default class Waterfall extends Vue {
    public waterfallImgArr!: RecommendData[];

    @Prop(Array) public imgArr!: RecommendData[];

    @Watch('imgArr')
    public onChildChangeImgArr(nVal: RecommendData[], oldVal: RecommendData[]) {
        this.waterfallImgArr = nVal;
        this.$nextTick(() => {
            this.waterFallFn();
        })
    }

    public waterFallFn(): RecommendData[] {
        for (const item of this.waterfallImgArr) {
            console.log(item);
        }
        return [];
    }
}
</script>