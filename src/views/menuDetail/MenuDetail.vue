<template>
  <div class="menu-detail">
    <header>
      <img class="menu-albums" :src="menuDetail.albums" :alt="menuDetail.name">
      <h1 class="menu-name" v-text="menuDetail.name"></h1>
    </header>
    <main>
      <div class="menu-imtro">
        <p class="menu-item-title">
          介绍
        </p>
        <p v-text="menuDetail.imtro"></p>
      </div>
      <!-- <div class="menu-tags">
        <van-tag color="#f2826a">标签</van-tag>
      </div> -->
      <div class="menu-ingredients">
        <p class="menu-item-title">
          食材
        </p>
        <ul>
          <li class="menu-ingredients-li" v-for="(ingredientsItem,index) in menuDetail.ingredients" :key="index">
            <span v-text="ingredientsItem.ingredients"></span>
            <span v-text="ingredientsItem.number"></span>
          </li>
        </ul>
      </div>
      <div class="menu-burden">
        <p class="menu-item-title">
          配料
        </p>
        <ul>
          <li class="menu-burden-li" v-for="(burdenItem,index) in menuDetail.burden" :key="index">
            <span v-text="burdenItem.ingredients"></span>
            <span v-text="burdenItem.number"></span>
          </li>
        </ul>
      </div>
      <div class="menu-steps">
        <p class="menu-item-title">
          步骤
        </p>
        <ul>
          <li class="menu-steps-li" v-for="step in menuDetail.steps" :key="step.step">
            <p class="menu-steps-li-title">步骤{{ step.step }}</p>
            <img class="menu-steps-li-img" :src="step.img" :alt="step.step">
            <p v-text="step.description"></p>
          </li>
        </ul>
      </div>
    </main>
    <!-- <footer>
      <van-icon class="footer-icon" name="like-o" />收藏
    </footer> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Api from '@/api/index';
import DataHelper from '@/utils/DataHelper';
import MenuData from '../../model/MenuDetail';

@Component({
  components: {},
})
export default class MenuDetail extends Vue {
  public menuDetail: any = {};
  private DataHelper = new DataHelper();
  private Api = new Api();

  public created() {
    const id = this.$route.query.id;
    this.Api.getMenuDetail(Number(id)).then((res) => {
      this.menuDetail = this.DataHelper.clMenuDetail(res.data);
    });
  }
}
</script>

<style lang="scss" scoped>
.menu-detail {
  font-size: 4vw;
  .menu-item-title {
    font-size: 6vw;
    font-weight: bold;
    margin-top: 2vh;
  }
  header {
    .menu-albums {
      width: 100vw;
      height: 92vw;
    }
    .menu-name {
      text-align: center;
    }
  }
  main {
    padding: 0vh 4vw;
    margin-bottom: 4vh;
    .menu-imtro {
      p {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
      }
    }
    .menu-ingredients, .menu-burden, .menu-steps {
      li {
        line-height: 5vh;
        border-bottom: 1px solid #eeeeee;
        span {
          display: inline-block;
          width: 46vw;
        }
      }
    }
    .menu-steps {
      .menu-steps-li-title {
        font-weight: bold;
      }
      .menu-steps-li-img {
        width: 92vw;
        height: 92vw;
      }
    }
  }
  footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 4vh;
    background: #ffffff;
    border-top: #eee solid 1px;
    line-height: 4vh;
    text-align: center;
    .footer-icon {
      color: red;
      margin-right: 1vw;
    }
  }
}
</style>