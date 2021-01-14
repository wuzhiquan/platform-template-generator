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
    <van-cell>
      <div class="text-box">
        <p class="title">消息免打扰</p>
        <p class="tips">设置后，所有通知将用红点显示，不再显示未读数字</p>
      </div>
      <template #right-icon>
        <van-switch v-model="checked" />
      </template>
    </van-cell>
    <div class="setting-bottom">
      <van-cell center title="接收检验报告提醒">
        <template #right-icon>
          <van-switch v-model="checked2" @change="changeInspectionReport" />
        </template>
      </van-cell>
      <van-cell center title="接收报告危机值提醒">
        <template #right-icon>
          <van-switch v-model="checked3" @change="changeCriticalValue" />
        </template>
      </van-cell>
    </div>
  </wrap-page>
</template>

<script>
import { WrapPage } from '@/components';
import { Cell, Switch } from 'vant';

export default {
  name: 'MessageSetting',
  components: {
    [Cell.name]: Cell,
    [Switch.name]: Switch,
    WrapPage,
  },
  data() {
    return {
      checked: true,
      checked1: true,
      checked2: true,
      checked3: true,
      checked4: true,
    };
  },
  methods: {
    // 接收付款消息提醒状态切换时触发
    changePayment(i) {
      console.log(i);
      console.log('xx');
    },
    // 接受检验报告提醒状态切换时触发
    changeInspectionReport(i) {
      console.log(i);
    },
    // 接受报告危急值提醒状态切换时触发
    changeCriticalValue(i) {
      console.log(i);
    },
    // 接受健康咨询推荐状态切换时触发
    changeHealthInformation(i) {
      console.log(i);
    },
  },
  mounted() {},
};
</script>
<style lang='scss' scoped>
.text-box {
  .title {
    font-size: 14px;
    margin: 0;
  }
  .tips {
    font-size: 12px;
    color: $light-black2;
    margin: 0;
  }
}
.setting-bottom {
  padding-top: 10px;
}
.van-switch{
  font-size: 24px;
}
</style>
