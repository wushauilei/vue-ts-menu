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

@Component({
    components: {
        Waterfall,
    },
})
export default class Recommend extends Vue {
    public DataHelper = new DataHelper();
    public recommonds: RecommendData[] = [];
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
                this.recommonds = this.DataHelper.clRecommendData(res.data);
            }
        }).catch((err) => {
            Toast('连接失败！');
        });
    }
    public created() {
        this.recommendReadData(2);
    }
}
</script>