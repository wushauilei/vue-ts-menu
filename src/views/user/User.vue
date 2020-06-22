<template>
  <div id="user">
    <header class="user-header">
      <van-row>
        <van-col span="16" class="user-header-left">
          <div class="user-header-left-username" v-text="userinfo.username"></div>
          <div class="user-header-left-created">创建时间：{{ userinfo.createdTime }}</div>
        </van-col>
        <van-col span="8" class="user-header-right">
          <div class="user-header-right-img">
            <img :src="userinfo.portrait" alt />
          </div>
        </van-col>
      </van-row>
    </header>
    <main class="user-main"></main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import UserApi from '@/api/user';

@Component({
  components: {},
})
export default class User extends Vue {
  public userinfo: any = {};
  private UserApi = new UserApi();

  public created(): void {
    this.UserApi.getUserinfo(localStorage.getItem('username')).then((res) => {
      this.userinfo = res.data;
    });
  }
}
</script>

<style lang="scss" scoped>
#user {
  width: 92vw;
  max-height: 90vh;
  padding: 1vh 4vw;
  .user-header {
    .user-header-left {
      padding-right: 1vw;
      height: 100%;
      .user-header-left-username {
        text-align: center;
        font-size: 10vw;
      }
    }
    .user-header-right {
      .user-header-right-img {
        width: 30vw;
        height: 30vw;
        border-radius: 50%;
        border: 1px solid #eeeeee;
      }
    }
  }
}
</style>