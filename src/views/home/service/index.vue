<template>
  <wrap-page hasSearch :searchPlaceholder="'姓名/手机号码'" @querySearch="getSearch">
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
          v-for="(item, index) in data"
          :key="index"
          :badge="item.unread !== 0 ? item.unread : null"
          :imgSrc="item.headIcon"
          :name="item.name"
          :topRight="item.time"
          :bottomLeft="item.lastMsg"
          @cardClick="cardClick(item)"
        />
      </van-list>
    </van-pull-refresh>
  </wrap-page>
</template>
<script>
import { WrapPage, PersonCard } from '@/components';
import { PullRefresh, List } from 'vant';

export default {
  components: {
    'van-pull-refresh': PullRefresh,
    'van-list': List,
    WrapPage,
    PersonCard,
  },
  data() {
    return {
      refreshing: false,
      error: false,
      loading: false,
      finished: false,
      show: false,
      conditions: {
        keyword: null,
      },
      data: [
        {
          headIcon: 'https://img.yzcdn.cn/vant/cat.jpeg',
          name: '袁春红',
          lastMsg: '谢谢医生！',
          time: '15.21',
          unread: 2,
        },
        {
          headIcon: 'https://img.yzcdn.cn/vant/cat.jpeg',
          name: '张曼华',
          lastMsg:
            '好的好的，已收到，非常感谢吴医生这几天对我的细心照顾！万分感谢！',
          time: '12.34',
          unread: 2,
        },
        {
          headIcon: 'https://img.yzcdn.cn/vant/cat.jpeg',
          name: '冯桂芳',
          lastMsg: '祝您早日康复！',
          time: '11.45',
          unread: 0,
        },
        {
          headIcon: 'https://img.yzcdn.cn/vant/cat.jpeg',
          name: '张美珍',
          lastMsg: '收到！！',
          time: '2020.01.03',
          unread: 0,
        },
      ],
    };
  },
  methods: {
    getSearch(val) {
      console.log('getSearch', val);
    },
    onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          this.data = [];
          this.refreshing = false;
        }
        this.data.push(
          {
            headIcon: 'https://img.yzcdn.cn/vant/cat.jpeg',
            name: '袁春红',
            lastMsg: '谢谢医生！',
            time: '15.21',
            unread: 2,
          },
          {
            headIcon: 'https://img.yzcdn.cn/vant/cat.jpeg',
            name: '张曼华',
            lastMsg:
              '好的好的，已收到，非常感谢吴医生这几天对我的细心照顾！万分感谢！',
            time: '12.34',
            unread: 2,
          },
          {
            headIcon: 'https://img.yzcdn.cn/vant/cat.jpeg',
            name: '冯桂芳',
            lastMsg: '祝您早日康复！',
            time: '11.45',
            unread: 0,
          },
          {
            headIcon: 'https://img.yzcdn.cn/vant/cat.jpeg',
            name: '张美珍',
            lastMsg: '收到！！',
            time: '2020.01.03',
            unread: 0,
          },
        );
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.data.length >= 10) {
          this.finished = true;
        }
      }, 1000);
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
    cardClick(item) {
      this.$router.push({
        name: 'ServiceDetails',
        query: {
          contact: item.name,
        },
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.van-pull-refresh {
  flex: 1;
  overflow: auto;
}
</style>
