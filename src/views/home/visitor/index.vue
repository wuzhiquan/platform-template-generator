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
  <wrap-page hasSearch :searchPlaceholder="'姓名/手机号码'" @getSearch="getSearch">
    <div class="container">
      <div class="visitor-num">
        <span class="top-font">正在随访({{info.length}})</span>
        <div class="top-newplan" @click="getNewPlan">
          <van-icon class="img-space" name="add-o" color="#1678FF"/>
          <span >新建计划</span>
        </div>
      </div>
      <div class="visitor-list">
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
          <van-list
            v-model="loading"
            :finished="finished"
            finished-text="~没有更多了~"
            :error.sync="error"
            error-text="请求失败，点击重新加载"
            @load="onLoad"
          >
            <person-card
              v-for="(item, index) in info"
              :key="index"
              :imgSrc="item.headIcon"
              :name="item.name"
              :bottomLeft="item.age + '岁，' + item.desc"
              @click.native="toDetail(item.path)"
            />
          </van-list>
        </van-pull-refresh>
      </div>
    </div>
  </wrap-page>
</template>
<script>
import { WrapPage, PersonCard } from '@/components';
import { Calendar, List, PullRefresh } from 'vant';

export default {
  components: {
    [WrapPage.name]: WrapPage,
    [Calendar.name]: Calendar,
    [List.name]: List,
    [PullRefresh.name]: PullRefresh,
    PersonCard,
  },
  data() {
    return {
      refreshing: false,
      error: false,
      loading: false,
      finished: false,
      show: false,
      info: [
        {
          headIcon: require('@/assets/img/avatar.png'),
          name: '袁春红',
          age: 32,
          desc: '高危孕妇产前随访',
          path: '/home/visitorDatail',
        },
        {
          headIcon: require('@/assets/img/avatar.png'),
          name: '刘桂花',
          age: 32,
          desc: '剖宫产产妇的术后随访',
        },
        {
          headIcon: require('@/assets/img/avatar.png'),
          name: '陈紫玉',
          age: 46,
          desc: '高龄孕妇产前随访',
        },
      ],
    };
  },
  methods: {
    toDetail(path) {
      console.log(1);
      this.$router.push(path);
    },
    getNewPlan() {
      this.$router.push('/home/visitorPlan');
    },
    getSearch(val) {
      console.log('getSearch', val);
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
    onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          this.info = [];
          this.refreshing = false;
        }
        this.info.push(
          {
            headIcon: require('@/assets/img/avatar.png'),
            name: '袁春红',
            age: 32,
            desc: '高危孕妇产前随访',
          },
          {
            headIcon: require('@/assets/img/avatar.png'),
            name: '刘桂花',
            age: 32,
            desc: '剖宫产产妇的术后随访',
          },
          {
            headIcon: require('@/assets/img/avatar.png'),
            name: '陈紫玉',
            age: 46,
            desc: '高龄孕妇产前随访',
          },
        );
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.info.length >= 20) {
          this.finished = true;
        }
      }, 1000);
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: auto;
}
.visitor-num {
  padding: 0 14px;
  position: relative;
  background: #fff;
  border-bottom: 1px solid $border-color;
}
.visitor-list{
  flex: 1;
  overflow: auto;
}
.top-font {
  font-size: 14px;
  color: $light-black2;
  text-align: left;
  line-height: 27px;
}
.top-newplan {
  float: right;
  font-size: 14px;
  color: $light-black2;
  padding-top: 8px;
  span{
    color: $blue;
  }
}
.img-space {
  width: 14px;
  height: 14px;
  position: absolute;
  right: 75px;
  top: 9px;
}
</style>
