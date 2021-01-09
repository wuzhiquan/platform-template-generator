<!--
警告：
  本源代码所有权归广州慧扬健康科技有限公司(下称“本公司”)所有，已采取保密措施加以保护。  受《中华人民共和国刑法》、
  《反不正当竞争法》和《国家工商行政管理局关于禁止侵犯商业秘密行为的若干规定》等相关法律法规的保护。未经本公司书面
  许可，任何人披露、使用或者允许他人使用本源代码，必将受到相关法律的严厉惩罚。
Warning:
  The ownership of this source code belongs to Guangzhou Wisefly Technology Co., Ltd.(hereinafter referred to as "the company"),
  which is protected by the criminal law of the People's Republic of China, the anti unfair competition law and the
  provisions of the State Administration for Industry and Commerce on prohibiting the infringement of business secrets, etc.
  Without the written permission of the company, anyone who discloses, uses or allows others to use this source code
  will be severely punished by the relevant laws.
-->
<template>
  <div class="container">
    <div class="login">
      欢迎登录
      <div class="register">注册</div>
    </div>
    <div class="avatar">
      <img src="@/assets/img/avatar.png" />
    </div>
    <div class="circle circle1"></div>
    <div class="circle circle2"></div>
    <div class="circle circle3"></div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        left-icon="manager"
        placeholder="请输入用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
        clearable
      />
      <van-field
        v-model="password"
        name="密码"
        left-icon="lock"
        :right-icon="openEye ? 'eye-o' : 'eye'"
        :type="openEye ? 'text' : 'password'"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请填写密码' }]"
        @click-right-icon="openEye = !openEye"
      />

      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit">登录</van-button>
      </div>
      <div class="find-back">
        找回密码
      </div>
    </van-form>
  </div>
</template>

<script>
import { Field, Form, Button } from 'vant';

export default {
  name: 'Login',
  components: {
    [Field.name]: Field,
    [Form.name]: Form,
    [Button.name]: Button,
  },
  data() {
    return {
      username: '',
      password: '',
      openEye: false,
    };
  },
  methods: {
    onSubmit() {
      console.log(1);
      this.$router.push('/home');
    },
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
.container {
  height: 100vh;
  background-image: linear-gradient($light-blue, $deep-blue);
  position: relative;
}
.circle {
  border-radius: 50%;
  position: absolute;
}
.circle1 {
  width: 86px;
  height: 86px;
  top: 64px;
  left: 25px;
  background-image: linear-gradient(#0e7cff, #0e7cff);
}
.circle2 {
  width: 64px;
  height: 64px;
  top: 115px;
  right: 20px;
  background-image: linear-gradient(#248dff, #248dff);
}
.circle3 {
  width: 280px;
  height: 280px;
  top: 315px;
  right: 200px;
  background-image: linear-gradient(#2f5fff, #2f5fff);
}
.login {
  font-size: 18px;
  text-align: center;
  font-weight: 400;
  padding-top: 10px;
  position: relative;
  color: rgb(255, 255, 255);
  .register {
    position: absolute;
    right: 14px;
    top: 14px;
    font-size: 14px;
    color: #fff;
  }
}
.avatar {
  width: 120px;
  height: 120px;
  border: 5px solid #519AFF;
  border-radius: 50%;
  margin: 90px auto 55px auto;
  img {
    width: 100%;
    height: 100%;
  }
}
.van-cell {
  background-color: rgba(255, 255, 255, 0.1);
  color: #0099ff;
}
.find-back{
  text-align: center;
  position: relative;
  color: #0099ff;
  font-size: 16px;
  margin-top: 40px;
}
::v-deep .van-field__control{
  color: #fff;
}
</style>
