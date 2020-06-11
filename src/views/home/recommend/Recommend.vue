<template>
  <div class="recommend">
      <waterfall :imgArr="recommonds" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DataHelper from '@/utils/DataHelper';
import Api from '@/api/index';
import RecommendData from '../../../model/RecommendData';
import { Toast } from 'vant';
import Waterfall from '@/components/waterfall/Waterfall.vue';
import Common from '@/utils/Common';

@Component({
    components: {
        Waterfall,
    },
})
export default class Recommend extends Vue {
    public DataHelper = new DataHelper();
    public recommonds: RecommendData[] = [];
    public current: number = 1;
    public Common = new Common();
    private Api = new Api();
    /**
     * @function recommendReadData 读取推荐菜谱数据
     * @param pageNo 页码
     * @returns false | Array
     */
    public recommendReadData(pageNo: number): void {
        this.Api.getRecommend(pageNo).then((res) => {
            if (res.status === 400) {
                Toast('请求失败！');
            } else {
                this.current = pageNo;
                this.recommonds = this.DataHelper.clRecommendData(res.data);
            }
        }).catch((err) => {
            Toast('连接失败！');
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