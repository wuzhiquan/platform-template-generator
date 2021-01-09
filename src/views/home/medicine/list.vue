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
  <wrap-page hasSearch :searchPlaceholder="'药品名称/症状'" @querySearch="getSearch">
    <template #headerRight>
      <van-icon name="replay" size="20" color="#666" @click="refresh"/>
    </template>
    <div class="listcade" id="wrap">
      <van-cell v-for="(item, index) in items"
      :key="index" :title="item.title" is-link :to="item.path"/>
    </div>
  </wrap-page>
</template>
<script>
import { Cell, CellGroup } from 'vant';
import { WrapPage } from '@/components';

export default {
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    WrapPage,
  },
  data() {
    return {
      items: [
        { title: '玫满（盐酸米诺环素胶囊）', path: '/home/medicineDetail' },
        { title: '盐米诺环素胶囊（惠氏-百宫））' },
        { title: '美满霉素（盐酸米诺环素胶囊）' },
        { title: '四环素可的松眼膏（重庆科瑞）' },
        { title: '四环素可的松眼膏（广州白云山）' },
        { title: '盐酸多西环素片（信谊制药）' },
        { title: '人工牛黄甲硝唑胶囊（辅仁药业）' },
        { title: '安呵（氨来呫诺糊剂）' },
        { title: '思孚欣（双氯芬酸钠喷雾剂）' },
        { title: '盐酸多多西环素片（广东华南药业）' },
        { title: '甲硝唑芬布芬胶囊（河北神威）' },
        { title: '华适（甲硝唑缓释片）' },
        { title: '盐酸多多西环素片（广东华南药业）' },
        { title: '甲硝唑芬布芬胶囊（河北神威）' },
        { title: '华适（甲硝唑缓释片）' },
      ],
    };
  },
  methods: {
    getSearch(val) {
      console.log('getSearch', val);
    },
    onListen() {
      console.log('listen');
    },
    onSelect(path) {
      this.$router.push(path);
    },
    refresh() {
      // this.$toast.loading({
      //   message: '正在载入数据',
      //   className: 'toast-wran',
      //   loadingType: 'spinner',
      //   getContainer: '#wrap',
      // });
      this.$store.commit('app/UPDATE_LOADING', true);
      setTimeout(() => {
        this.$store.commit('app/UPDATE_LOADING', false);
      }, 1000);
    },
  },
};
</script>
<style lang="scss" scoped>
::v-deep .listcade {
  .wrap-page {
    position: relative;
    z-index: 2;
  }
  .van-card__title {
    font-size: 16px;
    color: #000000;
    text-align: left;
  }
  .van-card__desc {
    font-size: 12px;
    color: #999999;
    text-align: left;
  }
  .van-card__price {
    font-family: 'PingFangSC-Regular', 'PingFang SC';
    font-weight: 400;
    font-style: normal;
    font-size: 12px;
    color: #666666;
    text-align: left;
  }
  .van-tabs__line {
    height: 0;
  }
  .listcade-inner{
    flex: 1;
    overflow: auto;
  }
  height: calc(100vh-100px);
  overflow: auto;
}
</style>
<style lang="scss">
@keyframes toast {
  0% {
    top:20px;
  }
  25% {
    top:70px;
  }
  50% {
    top:70px;
  }
  75% {
    top:70px;
  }
  100% {
    top:20px;
  }
}
.toast-wran {
  top: 20px;
  min-height: 50px;
  width: 180px;
  border-radius: 25px;
  padding: 0;
  flex-direction: row;
  animation-name: toast;
  animation-duration: 1.5s;
}
.van-toast__text {
  font-size: 14px;
  margin: 0;
  padding-left: 10px;
}
</style>
