<template>
  <div class="register">
    <main class="login-main">
      <van-cell-group>
        <van-field
          v-model="username"
          clearable
          :error="checkFn('username')"
          :error-message="checkFn('username', true)"
          required
          label="用户名"
          placeholder="请输入用户名"
        />
        <van-field
          v-model="password"
          clearable
          :error="checkFn('password')"
          :error-message="checkFn('password', true)"
          required
          type="password"
          label="密码"
          placeholder="请输入密码"
        />
        <van-button
          @click="loginBtnClickFn"
          :disabled="checkFn('btn')"
          class="login-main-btn"
          size="large"
          color="linear-gradient(to right, #4bb0ff, #6149f6)"
        >确认注册</van-button>
      </van-cell-group>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Encryption from '../../utils/Encryption';
import LoginApi from '../../api/login';
import Regular from '@/utils/Regular';
import { Toast } from 'vant';

@Component({
  components: {},
})
export default class Register extends Vue {
  public username: string = '';
  public password: string = '';
  private Encryption = new Encryption();
  private LoginApi = new LoginApi();
  private Regular = new Regular();

  public get checkFn() {
    return (str: any, msg: boolean = false) => {
      const username = !this.Regular.isUsernameLegitimate(this.username);
      const password = !this.Regular.isPasswordLegitimate(this.password);
      switch (str) {
        case 'username':
          return !msg ? username : (username ? '用户名字母开头，允许5-16字节，允许字母数字下划线' : '');
        case 'password':
          return !msg ? password : (password ? '密码必须包含大小写字母和数字的组合，不能使用特殊字符，长度在 8-10 之间' : '');
        case 'btn':
          return !username && !password ? false : true;
        default:
          return true;
      }
    };
  }
  public loginBtnClickFn(): void {
    const userInfo = {
      username: this.username,
      password: this.Encryption.encryptionMd5(this.password),
    };
    this.LoginApi.register(userInfo).then((res: any) => {
      Toast(res.msg);
      this.$store.commit('setNavbarTitle', '登录');
      this.$router.go(-1);
    });
  }
}
</script>

<style lang="scss" scoped>
.register {
  .login-main {
    .login-main-btn {
      margin-top: 2vh;
    }
  }
}
</style>