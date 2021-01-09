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
  <wrap-page hasSearch :searchPlaceholder="'病例/病例集'" @querySearch="getSearch">
    <template #headerRight>
      <van-icon name="replay" size="20" color="#666"/>
    </template>
    <div class="listcase">
      <van-tabs v-model="active">
        <van-tab v-for="(item, index) in items"
        :key="index"
        :title="item.text"
        >
          <template #title>
            <div class="tab"  @click="filter">
              <span :style="{ color: item.color }">{{ item.text }}</span>
              <van-icon
              :name="item.Icon"
              class-prefix="my-icon"
              size="12"/>
            </div>
          </template>
        </van-tab>
      </van-tabs>
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh" class="case-list-box">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="~没有更多了~"
          :error.sync="error"
          error-text="请求失败，点击重新加载"
          @load="onLoad"
        >
          <div class="listcade-inner">
            <van-card v-for="(item, index) in caseItems"
            :key="index"
            :price="item.price"
            currency=""
            :desc="item.desc"
            :title="item.title"
            :thumb="item.pic"
            @click="onSelect(item.path)"
            />
          </div>
        </van-list>
      </van-pull-refresh>
    </div>
  </wrap-page>
</template>
<script>
import { Tabs, Tab, Card, List, PullRefresh } from 'vant';
import { WrapPage } from '@/components';

export default {
  components: {
    [Tabs.name]: Tabs,
    [Tab.name]: Tab,
    [Card.name]: Card,
    [List.name]: List,
    [PullRefresh.name]: PullRefresh,
    WrapPage,
  },
  data() {
    return {
      refreshing: false,
      error: false,
      loading: false,
      finished: false,
      active: 1,
      items: [
        { text: '综合', color: '#1678FF' },
        { text: '浏览数' },
        { text: '评论数' },
        { text: '筛选', Icon: 'shaixuan' },
      ],
      caseItems: [
        {
          title: 'HTV病毒',
          desc: '发现HPV53阳性数天',
          price: '阳江市人民医院',
          pic: require('@/assets/img/case.png'),
          path: '/home/recordsDetail',
        },
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
      console.log(2);
      this.$router.push(path);
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
          this.caseItems = [];
          this.refreshing = false;
        }
        this.caseItems.push(
          {
            title: 'HTV病毒',
            desc: '发现HPV53阳性数天',
            price: '阳江市人民医院',
            pic: require('@/assets/img/case.png'),
            path: '/home/recordsDetail',
          },
        );
        // 加载状态结束
        this.loading = false;
        // 数据全部加载完成
        if (this.caseItems.length >= 10) {
          this.finished = true;
        }
      }, 1000);
    },
    filter() {
      console.log('筛选');
      this.items[0].color = '';
    },
  },
};
</script>
<style lang="scss" scoped>
::v-deep .listcase {
  .van-tabs{
    border-bottom: 1px solid $border-color;
  }
  .van-card{
    background: #fff;
    padding: 12px 16px;
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
  .van-card__price-integer {
    font-size: 14px;
  }
  .van-tabs__line {
    height: 0;
  }
  .listcade-inner{
    flex: 1;
    overflow: auto;
  }
  .case-list-box {
    height: calc(100vh - 140px);
    overflow: auto;
  }
  .tab:hover {
    color: $blue;
  }
}
</style>
