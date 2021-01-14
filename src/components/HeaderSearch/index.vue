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
  <div class="header-search">
    <div class="header">
      <p>{{title}}</p>
      <div class="right" v-if="message">
        <van-icon name="delete-o"/>
        <van-icon name="setting-o" @click="$router.push('/message/setting')"/>
      </div>
    </div>
    <van-search v-model="searchValue" placeholder="搜索" />
  </div>
</template>

<script>
import { Search } from 'vant';

export default {
  name: '',
  components: {
    [Search.name]: Search,
  },
  props: {
    message: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      searchValue: '',
    };
  },
  methods: {},
  mounted() {},
};
</script>
<style lang='scss' scoped>
.header{
  color: #fff;
  font-size: 18px;
  text-align: center;
  background-image: linear-gradient(to right, $deep-blue, $light-blue);
  position: relative;
  p{
    margin: 0;
    height: 44px;
    line-height: 44px;
  }
  .right{
    position: absolute;
    right: 0;
    top: 11px;
    .van-icon{
      margin-right: 16px;
      font-size: 22px;
    }
  }
}
::v-deep .van-search{
  background: $background-color;
  .van-search__content{
    background: #fff;
    border-radius: 6px;
    height: 28px;
    .van-icon-search,
    .van-field__body{
      height: 20px;
      line-height: 20px;
    }
  }
}
</style>
