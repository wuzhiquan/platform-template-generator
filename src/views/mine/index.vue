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
    <div class="mine-page">
      <div class="header">
        <van-row class="header-child" type="flex" justify="space-between">
          <div style="overflow:hidden">
            <div class="avatar" style="float:left">
              <img src="@/assets/img/avatar.png">
            </div>
            <div class="information" style="float:left">
              <div class="doctor-name">李香兰</div>
              <div class="doctor-well"><span>妇科</span>&nbsp;&nbsp;<span>主任医师</span></div>
            </div>
          </div>
          <div><van-button class="logout-btn" plain size="small" round>退出</van-button></div>
        </van-row>
        <van-row type="flex">
          <van-col span="8">
            <div class="center money">99.9%</div>
            <div class="center account">好评率</div>
          </van-col>
          <van-col span="8">
            <div class="center money">329</div>
            <div class="center account">评价数</div>
          </van-col>
          <van-col span="8">
            <div class="center money">106</div>
            <div class="center account">服务数</div>
          </van-col>
       </van-row>
      </div>
      <!-- <div class="order">
        <van-row type="flex">
          <van-col class="center" span="12">
            <van-icon class="order-icon" class-prefix="my-icon" name="chufang"></van-icon>
            <div class="order-text">我的订单</div>
          </van-col>
          <van-col class="center" span="12">
            <van-icon class="order-icon" class-prefix="my-icon" name="kanzhenjilu"></van-icon>
            <div class="order-text">患教中心</div>
          </van-col>
        </van-row>
      </div> -->
      <div style="flex: 1;overflow: auto;">
        <template v-for="(item, index) in menuList">
          <cell-list :key="index" :list="item" @cellClick="linkFn"/>
        </template>
      </div>
    </div>
  </wrap-page>
</template>

<script>
import { WrapPage, CellList } from '@/components';
import { Row, Col, Button } from 'vant';
import { mineMenu } from '@/common/js/constants';

export default {
  name: 'Home',
  components: {
    WrapPage,
    CellList,
    [Row.name]: Row,
    [Col.name]: Col,
    [Button.name]: Button,
  },
  data() {
    return {
      menuList: mineMenu,
    };
  },
  methods: {
    linkFn(name) {
      if (name === 'collection') {
        this.$router.push('/mine/collection');
      } else if (name === 'evaluate') {
        this.$router.push('/mine/evaluate');
      } else if (name === 'personal') {
        this.$router.push('/mine/personal');
      } else if (name === 'account') {
        this.$router.push('/mine/account');
      }
    },
  },
  mounted() {},
};
</script>
<style lang='scss' scoped>
.center{
  text-align: center;
}
.mine-page{
  height: 100%;
  display: flex;
  flex-direction: column;
  .header{
    padding: 16px;
    background-image: linear-gradient(to right, $deep-blue, $light-blue);
    .header-child{
      padding-bottom:20px;
      .logout-btn{
        color:white;
        background-color:transparent;
        height: 26px;
        padding: 0 16px;
      }
    }
    .avatar {
      width: 80px;
      height: 80px;
      border: 3px solid #6277FF;
      border-radius: 50%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .information{
      padding-left:10px;
      color:white;
      .doctor-name{
        font-size: 18px;
        padding:15px 0 15px;
      }
      .doctor-well{
        font-size: 13px;
      }
    }
    .money{
      font-size:18px;
      color:white;
      font-weight:400;
    }
    .account{
      font-size:12px;
      color:white;
      font-weight:400;
      opacity: 0.8;
      margin-top: 3px;
    }
  }
  .order{
    padding: 15px 0px;
    background-color: white;
    margin-bottom:10px;
    .order-icon{
      font-size:30px;
    }
    .order-text{
      font-size:12px;
      opacity: 0.7;
      padding-top:10px;
    }
  }
}
</style>
