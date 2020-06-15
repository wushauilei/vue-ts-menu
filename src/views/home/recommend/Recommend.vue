<template>
  <div class="recommend">
      <waterfall :imgArr="recommonds" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DataHelper from '@/utils/DataHelper';
import Api from '@/api/index';
import { Toast } from 'vant';
import Waterfall from '@/components/waterfall/Waterfall.vue';
import Common from '@/utils/Common';
import MenuData from '../../../model/MenuDetail';

@Component({
    components: {
        Waterfall,
    },
})
export default class Recommend extends Vue {
    public recommonds: MenuData[] = [];
    public current: number = 1;
    private Common = new Common();
    private DataHelper = new DataHelper();
    private Api = new Api();
    /**
     * @function recommendReadData 读取推荐菜谱数据
     * @param pageNo 页码
     * @returns false | Array
     */
    public recommendReadData(pageNo: number): void {
        this.Api.getRecommend(pageNo).then((res) => {
            this.current = pageNo;
            this.recommonds = this.DataHelper.clRecommendData(res.data);
        });
    }

    /**
     * @function handleScroll 滚动条监听事件
     */
    public handleScroll(e: any): void {
        const scrollTop = this.Common.getScrollTop();
        const scrollHeight = this.Common.getScrollHeight();
        const windowHeight = this.Common.getWindowHeight();
        if (scrollTop + windowHeight === scrollHeight) {
            this.recommendReadData(this.current + 1);
        }
    }

    public created() {
        this.recommendReadData(1);
    }
    public mounted() {
        window.addEventListener('scroll', this.handleScroll, true);
    }
}
</script>