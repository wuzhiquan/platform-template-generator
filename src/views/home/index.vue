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
  <wrap-page isIndex>
    <div class="home-page">
      <div class="top-area">
        <img src="@/assets/img/avatar.png" class="avatar"/>
        <div>
          <p class="name">李香兰</p>
          <p class="dept">妇科 主任医师</p>
          <p class="num">
            <span>患者总量：106</span>
            <span>今日患者：+24</span>
          </p>
        </div>
      </div>
      <ul class="quick">
        <li v-for="item in quickList" :key="item.label" @click="openQuick(item.value)">
          <div :style="`background: ${item.bg};`" class="icon">
            <van-icon class-prefix="my-icon" :name="item.icon" />
          </div>
          <p class="text">{{item.label}}</p>
        </li>
      </ul>
      <div style="flex: 1; overflow: auto;padding-bottom: 10px;">
        <div class="application" v-for="item in appList" :key="item.title">
          <p class="title">
            <span :style="`background: ${item.bg}`"><van-icon class-prefix="my-icon" :name="item.icon" /></span>
            {{item.title}}
          </p>
          <ul class="app-list">
            <li v-for="i in item.list" :key="i.value" :style="`opacity: ${i.disable ? 0.3 : 1};`" @click="openApp(i.value)">
              <van-icon class-prefix="my-icon" :name="i.icon" :color="i.color"/>
              {{i.label}}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </wrap-page>
</template>

<script>
import { WrapPage } from '@/components';

export default {
  name: 'Home',
  components: {
    WrapPage,
  },
  data() {
    return {
      quickList: [
        { label: '预约管理', value: 'order', icon: 'yuyue3', bg: '#5EDC90' },
        { label: '在线问诊', value: 'service', icon: '20_zaixianwenzhen', bg: '#8AD0FF' },
        { label: '服务设置', value: 'setting', icon: 'fuwushezhi', bg: '#FFB85D' },
      ],
      appList: [
        {
          title: '工作台',
          icon: 'gongzuotai',
          bg: '#8AD0FF',
          list: [
            { label: '我的排班', value: 'scheduling', icon: 'paiban', color: '#5EDC90', disable: false },
            { label: '请假管理', value: 'leave', icon: 'qingjia', color: '#1677FF', disable: true },
            { label: '出差管理', value: 'travel', icon: 'chuchaguanli', color: '#B4B6FF', disable: true },
            { label: '审批管理', value: 'approval', icon: 'shenpi', color: '#5EDC90', disable: true },
            { label: '随访管理', value: 'followUp', icon: 'suifangguanli', color: '#B4B6FF', disable: false },
            { label: '转诊管理', value: 'referral', icon: 'zhuanzhen', color: '#5EDC90', disable: true },
            { label: '中医治未病', value: 'treatment', icon: 'zhongyi', color: '#1677FF', disable: true },
          ],
        },
        {
          title: '知识库',
          icon: 'ku',
          bg: '#FFB85D',
          list: [
            { label: '医案库', value: 'records', icon: 'yianku', color: '#5EDC90', disable: false },
            { label: '药品库', value: 'medicine', icon: 'yaopinku', color: '#1677FF', disable: false },
            { label: '膳食库', value: 'diet', icon: 'shanshi', color: '#FFB85D', disable: true },
          ],
        },
      ],
    };
  },
  methods: {
    openQuick(val) {
      this.$router.push({
        path: `/home/${val}`,
      });
    },
    openApp(val) {
      console.log(val);
      if (val === 'records') {
        this.$router.push('/home/records');
      } else if (val === 'scheduling') {
        this.$router.push('/home/roster');
      } else if (val === 'medicine') {
        this.$router.push('/home/medicine');
      } else if (val === 'followUp') {
        this.$router.push('/home/visitor');
      }
    },
  },
  mounted() {},
};
</script>
<style lang='scss' scoped>
.home-page{
  height: 100%;
  @include flexCol;
}
.top-area{
  height: 117px;
  padding: 16px;
  background-image: linear-gradient(to right, $deep-blue, $light-blue);
  display: flex;
  .avatar {
    width: 74px;
    height: 74px;
    border: 3px solid #6277FF;
    border-radius: 50%;
    margin-right: 16px;
  }
  >div{
    padding-top: 6px;
    color: #fff;
    font-size: 18px;
    >p{
      margin: 0;
    }
    .dept{
      font-size: 14px;
      margin: 12px 0 10px;
    }
    .num{
      font-size: 12px;
      color: $light-black2;
    }
  }
}
.quick{
  display: grid;
  background: #fff;
  padding: 20px 0;
  grid-template-columns: repeat(3, 33.33%);
  li{
    font-size: 12px;
    color: $light-black;
    display: flex;
    flex-direction: column;
    align-items: center;
    .my-icon{
      color: #fff;
      font-size: 26px;
    }
    .icon{
      height: 48px;
      width: 48px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
    }
    .text{
      margin: 12px 0 0 0;
    }
  }
}
.application{
  background: #fff;
  margin-top: 10px;
  padding: 14px 16px 20px;
  .title{
    margin: 0;
    font-size: 16px;
    display: flex;
    align-items: center;
    span{
      color: #fff;
      display: inline-block;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      text-align: center;
      margin-right: 10px;
      .my-icon{
        font-size: 13px;
        width: 14px;
        height: 14px;
        position: relative;
        top: 1px;
      }
    }
  }
  .app-list{
    font-size: 12px;
    display: grid;
    grid-template-columns: repeat(4, 25%);
    li{
      color: #666;
      display: flex;
      flex-direction: column;
      align-items: center;
      .my-icon{
        font-size: 24px;
        margin-bottom: 3px;
      }
      margin-top: 20px;
    }
  }
}
</style>
