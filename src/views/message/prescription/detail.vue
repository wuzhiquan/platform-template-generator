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
  <wrap-page :headerTitle="`${patient.name}的开方申请`">
    <template #headerRight><span/></template>
    <div class="header" style="padding-bottom: 10px">
      <div class="title">
        <span>患者信息</span>
      </div>
      <div class="children-box">
        <span class="children-title">就诊人</span>
        <span class="children-title-message">{{patient.name}}，{{ patient.gender === 1 ? '男' : '女'}}，{{patient.age}}</span>
      </div>
      <div class="children-box">
        <span class="children-title">联系电话</span>
        <span class="children-title-message">13412344321</span>
      </div>
    </div>
    <div v-for="(item, index) in data.items" :key="index" class="header">
      <div class="title">
        <span>{{item.title}}</span>
      </div>
      <div :class="item.message != '' ? 'message' : 'message-img'">
        <span v-if="item.message != '' && patient.name === '刘晓月' && index === 0">{{item.message2}}</span>
        <span v-else-if="item.message != ''">{{item.message}}</span>
        <img v-else v-for="(img, index2) in item.img" :key="index2" :src="img.path" height="108" width="108" class="message-img"/>
      </div>
    </div>
    <div class="footer" v-if="patient.status === 2">
      <div class="title">
        <span>处方</span>
      </div>
      <div class="message message-text" >
        <span>1、健胃消食化，1盒，每日三次，每次2片，口服</span>
      </div>
      <div class="children-box">
        <span class="children-title">开方医生</span>
        <span class="children-title-message">陈剑秋</span>
      </div>
      <div class="children-box">
        <span class="children-title">审方医生</span>
        <span class="children-title-message">张华明</span>
      </div>
      <div class="children-box">
        <span class="children-title">开方时间</span>
        <span class="children-title-message">2020.05.12 14:41:51</span>
      </div>
    </div>
    <!-- 需要后端返回一个时间戳 -->
    <van-button v-else class="toast" @click="getMedicinal" type="info" :disabled="this.data.time.finish">
      现在开方 （剩余时间{{this.data.time.hour}}:{{this.data.time.minute}}:{{this.data.time.second}})
    </van-button>
  </wrap-page>
</template>

<script>
import { mapGetters } from 'vuex';
import { WrapPage } from '@/components';
import { Button } from 'vant';

export default {
  name: '',
  components: {
    [Button.name]: Button,
    WrapPage,
  },
  computed: {
    ...mapGetters(['patient']),
  },
  data() {
    return {
      data: {
        // 模拟获取后端时间戳
        finish: Date.parse(new Date()) + 300,
        // 模拟获取本地当前时间戳
        now: Date.parse(new Date()),
        items: [
          { title: '描述病情', message: '消化不良，胃轻微痛', message2: '喉咙痛流涕3天' },
          { title: '过敏史', message: '无过敏历史' },
          { title: '既往史', message: '无既往史' },
          { title: '处方照片', message: '', img: [{ path: require('@/assets/img/image.png') }, { path: require('@/assets/img/image.png') }] },
          { title: '用药经历及病情现状', message: '正按此方用药，病情稳定' },
          { title: '补充说明', message: '无补充说明' },
        ],
        time: {
          hour: '00',
          minute: '00',
          second: '00',
          finish: false,
        },
      },
    };
  },
  methods: {
    getMedicinal() {
      this.$router.push('/home/service/prescription');
    },
    countDown() {
      const msec = this.data.finish - this.data.now;
      this.data.time.hour = Math.floor(msec / 3600).toString();
      this.data.time.minute = Math.floor((msec % 3600) / 60).toString();
      this.data.time.second = ((msec % 3600) % 60).toString();
      this.data.finish -= 1;
      if (this.data.time.second < 10) {
        this.data.time.second = '0'.concat(this.data.time.second);
      }
      if (this.data.time.minute < 10) {
        this.data.time.minute = '0'.concat(this.data.time.minute);
      }
      if (this.data.time.hour < 10) {
        this.data.time.hour = '0'.concat(this.data.time.hour);
      }
      if (msec === 0) {
        this.data.time.finish = true;
      }
    },
  },
  mounted() {
    console.log('patient', this.patient);
    this.countDown();
    const timer = setInterval(() => {
      this.countDown();
      if (this.data.time.finish) {
        clearInterval(timer);
      }
    }, 1000);
  },
};
</script>
<style lang='scss' scoped>
.toast {
  font-size: 16px;
  text-align: center;
  margin: 0 14px 20px;
  height: 44px;
  line-height: 44px;
  border-radius: 5px;
}
.footer {
  padding: 10px 14px;
  margin: 0 0 40px 0;
  background-color: #FFFFFF;
}
.message {
  font-size: 16px;
  color: #000000;
  height: 44px;
}
.message-text {
  border-bottom: 1px $border-color solid;
  margin: 0 0 10px 0;
}
.message-img {
  height: auto;
  display: inline-block;
  padding: 0 10px 10px 0;
}
.header {
  padding: 11px 14px 0;
  margin: 0 0 10px 0px;
  background-color: #FFFFFF;
}
.title {
  font-size: 12px;
  color: #999999;
  height: 44px;
  line-height: 44px;
}
.children-box {
  display: flex;
  height: 34px;
  line-height: 20px;
}
.children-title {
  flex: 1;
  font-size: 14px;
  color: #666666;
}
.children-title-message {
  flex: 3;
  font-size: 14px;
  color: #000000;
}
</style>
