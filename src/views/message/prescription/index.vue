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
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="~~没有更多了~~"
        class="list-main"
        @load="onLoad"
      >
        <div class="list-info" v-for="(item, index) in list" :key="index">
          <!-- 列表项第一行top -->
          <div class="list-top">
            <img :src="item.headIcon" alt="">
            <span class="name">
              {{item.name}}
              <span class="tips">{{item.gender === 1 ? '男' : '女'}}，{{item.age}}</span>
            </span>
            <span class="right-status" :style="`color: ${item.status === 1 ? '#FB0200' : '#666'}`">{{item.status === 1 ? '等待开方': '已开方'}}</span>
          </div>
          <!-- 列表项内容 -->
          <div class="list-content">
            <div class="list_content_right">{{item.dec}}</div>
            <div class="list_content_right">{{item.dec2}}</div>
          </div>
          <!-- 列表项底部按钮 -->
          <van-cell title="查看详情" is-link @click="toRouter(item)"/>
        </div>
      </van-list>
    </van-pull-refresh>
  </wrap-page>
</template>

<script>
import { mapMutations } from 'vuex';
import { List, PullRefresh, Cell } from 'vant';
import { WrapPage } from '@/components';

export default {
  name: '',
  components: {
    WrapPage,
    'van-list': List,
    'van-cell': Cell,
    'van-pull-refresh': PullRefresh,
  },
  data() {
    return {
      list: [
        {
          name: '刘晓月',
          gender: 2,
          age: '24岁',
          headIcon: 'https://img.yzcdn.cn/vant/cat.jpeg',
          dec: '下单时间：2020-12-18  14:00-16:00',
          dec2: '截至时间：2020-12-18  14:10-16:00',
          status: 1,
        },
        {
          name: '余豆豆',
          gender: 1,
          age: '8岁',
          headIcon: 'https://img.yzcdn.cn/vant/cat.jpeg',
          dec: '下单时间：2020-12-18  14:00-16:00',
          dec2: '开放时间：2020-12-18  14:10-16:00',
          status: 2,
        },
      ],
      loading: false,
      isLoading: false,
      finished: false,
    };
  },
  methods: {
    ...mapMutations('app', ['UPDATE_PATIENT']),
    // 按钮路由跳转事件
    toRouter(item) {
      this.UPDATE_PATIENT(item);
      this.$router.push('/message/prescription/detail');
    },
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 1; i++) {
          this.list.push(this.list[0]);
          this.list.push(this.list[1]);
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 10) {
          this.finished = true;
        }
      }, 1000);
    },
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
      }, 1000);
    },
  },
  mounted() {},
};
</script>
<style lang='scss' scoped>
.van-pull-refresh{
  flex: 1;
  overflow: auto;
}
.list-main{
  padding: 10px 16px;
  .list-info {
    background-color: #FFFFFF;
    padding: 0px 15px;
    border-radius: 10px;
    margin-bottom: 30px;
    .van-cell{
      padding: 10px 0;
    }
    .list-top {
      font-size: 16px;
      height: 50px;
      display: flex;
      img{
        width: 24px;
        height: 24px;
        margin: 14px 6px 0 0;
      }
      .name{
        flex: 1;
        line-height: 50px;
      }
      .tips{
        font-size: 12px;
        color: $light-black2;
        margin-left: 6px;
      }
      .right-status {
        font-size: 12px;
        width: 60px;
        display: inline-block;
        text-align: right;
        line-height: 50px;
      }
    }
    .list-content {
      border-top: 1px solid #E9E9E9;
      border-bottom: 1px solid #E9E9E9;
      padding: 14px 0;
      .list_content_right {
        font-size: 12px;
        color: #909399;
        margin-bottom: 8px;
        &:last-child{
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>
