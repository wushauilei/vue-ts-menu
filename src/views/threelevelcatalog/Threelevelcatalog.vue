<template>
    <div class="threelevelcatalog">
        <ul>
            <li class="threelevelcatalog-li" v-for="item in threelevelcatalog" :key="item.id" @click="threelevelcatalogClickFn(item)">
                <div class="threelevelcatalog-li-left">
                    <img class="threelevelcatalog-img" :src="item.albums" alt="">
                </div>
                <div class="threelevelcatalog-li-right">
                    <p class="threelevelcatalog-name" v-text="item.name"></p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import Api from '@/api/index';
import Common from '@/utils/Common';
import { Toast } from 'vant';

@Component({
    components: {},
})
export default class Threelevelcatalog extends Vue {
    public threelevelcatalog: any[] = [];
    public secondaryName: any = '';
    public current: number = 1;
    public isDaodiLe: boolean = false;
    private Api = new Api();
    private Common = new Common();

    @Watch('secondarymenuId')
    public onChildChangeImgArr(nVal: number, oldVal: number) {
        this.secondaryName = this.$route.query.secondaryName;
        this.isDaodiLe = false;
        this.current = 1;
        this.threelevelcatalog = [];
        this.getThreelevelcatalog(nVal);
    }

    /**
     * @function handleScroll 滚动条监听事件
     */
    public handleScroll(e: any): void {
        if (!this.isDaodiLe) {
            const scrollTop = this.Common.getScrollTop();
            const scrollHeight = this.Common.getScrollHeight();
            const windowHeight = this.Common.getWindowHeight();
            if (scrollTop + windowHeight === scrollHeight) {
                this.current++;
                this.getThreelevelcatalog(this.secondarymenuId);
            }
        }
    }

    public get secondarymenuId() {
        return this.$store.state.secondarymenuId;
    }
    public getThreelevelcatalog(secondarymenuId: number): void {
        this.Api.getThreelevelcatalog(secondarymenuId, this.current).then((res) => {
            if (res.data.length <= 0) {
                Toast('已经到底了！！！');
                this.isDaodiLe = true;
            } else {
                this.threelevelcatalog = [ ...this.threelevelcatalog, ...res.data ];
            }
        });
    }
    public threelevelcatalogClickFn(item: any): void {
        this.$store.commit('setNavbarTitle', item.name);
        this.$router.push({name: 'MenuDetail', query: {id: item.id}});
    }

    public created() {
        const secondarymenuId = this.$route.query.secondarymenuId;
        this.secondaryName = this.$route.query.secondaryName;
        this.getThreelevelcatalog(Number(secondarymenuId));
    }
    public mounted() {
        window.addEventListener('scroll', this.handleScroll, true);
    }
}
</script>

<style lang="scss" scoped>
.threelevelcatalog {
    padding: 1vh 4vw;
    .threelevelcatalog-li {
        display: flex;
        flex-flow: row;
        margin-bottom: 1vh;
        padding-bottom: 1vh;
        border-bottom: 1px solid #eeeeee;
    }
    .threelevelcatalog-img {
        width: 50vw;
        height: 50vw;
    }
    .threelevelcatalog-li-right {
        width: 40vw;
        height: 50vw;
        margin-left: 2vw;
    }
    .threelevelcatalog-name {
        font-size: 5vw;
        text-align: center;
    }
}
</style>