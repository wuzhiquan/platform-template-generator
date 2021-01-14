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
  <wrap-page>
    <template #headerRight>
      <van-icon name="success" color="#1678FF" @click="toIndex"/>
    </template>
    <van-form @submit="onSubmit">
      <van-field v-model="title" name="标题" label="标题" placeholder="请输入标题"/>
      <van-field v-model="place" name="地点" label="地点" placeholder="请输入地点"/>
      <van-field v-model="time" name="时间" label="时间" placeholder="选择时间"/>
      <van-field v-model="remark" name="备注" label="备注" placeholder="请输入备注"/>
      <van-field name="是否提醒" label="是否提醒">
        <template #input>
          <van-switch v-model="checked" @click="onChange"/>
        </template>
      </van-field>
    </van-form>
  </wrap-page>
</template>
<script>
import { WrapPage } from '@/components';
import { Form, Field, Switch } from 'vant';

export default {
  components: {
    [WrapPage.name]: WrapPage,
    [Form.name]: Form,
    [Field.name]: Field,
    [Switch.name]: Switch,
  },
  data() {
    return {
      title: '',
      place: '',
      time: '',
      remark: '',
      checked: true,
    };
  },
  methods: {
    onSubmit() {
    },
    onChange() {
      this.checked = !this.checked;
    },
    toIndex() {
      this.$router.push('/home/visitor');
    },
  },
};
</script>
<style lang="scss" scoped>
::v-deep .van-cell__title {
  margin: 0;
  width: 70px;
}
::v-deep .van-switch{
  position: relative;
  margin-left: 220px;
}
.van-icon,.van-switch{
  font-size: 24px;
}
</style>
