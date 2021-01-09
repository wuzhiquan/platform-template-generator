<template>
  <wrap-page hasSearch :searchPlaceholder="'姓名/手机号码'" @querySearch="getSearch">
    <div class="top">
      <span @click="show = true">
        {{ date }}
        <van-icon
          class="top_icon"
          :class="{ top_icon_open: show }"
          name="arrow-down"
        />
      </span>
      <div class="top_right">
        <span>挂号总数{{ data.total }}人</span>
        <span>已报道{{ data.done }}人</span>
      </div>
    </div>
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
          v-for="(item, index) in data.info"
          :key="index"
          :imgSrc="item.headIcon"
          :name="item.name"
          :stateContent="item.state === 2 ? '已报道' : ''"
          :bottomLeft="gender[item.gender] + '，' + item.age + '岁'"
          :bottomRight="item.numeral ? '排号 ' + item.numeral : ''"
          @click.native="goInfo(item)"
        />
      </van-list>
    </van-pull-refresh>
    <van-calendar
      v-model="show"
      :show-title="false"
      color="#1678FF"
      :show-confirm="false"
      @confirm="onConfirm"
    />
  </wrap-page>
</template>
<script>
import { mapMutations } from 'vuex';
import { WrapPage, PersonCard } from '@/components';
import { Calendar, List, PullRefresh } from 'vant';

export default {
  components: {
    'van-pull-refresh': PullRefresh,
    'van-list': List,
    'van-calendar': Calendar,
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
      date: '今天',
      data: {
        total: 124,
        done: 4,
        info: [
          {
            headIcon: 'https://img.yzcdn.cn/vant/cat.jpeg',
            name: '袁春红',
            state: 2,
            gender: 1,
            age: 32,
            numeral: 'A31',
          },
          {
            headIcon: 'https://img.yzcdn.cn/vant/cat.jpeg',
            name: '张曼华',
            state: 2,
            gender: 2,
            age: 27,
            numeral: 'A32',
          },
          {
            headIcon: 'https://img.yzcdn.cn/vant/cat.jpeg',
            name: '冯桂芳',
            state: 2,
            gender: 2,
            age: 46,
            numeral: 'A33',
          },
          {
            headIcon: 'https://img.yzcdn.cn/vant/cat.jpeg',
            name: '张美珍',
            state: 2,
            gender: 1,
            age: 56,
            numeral: 'A34',
          },
        ],
      },
      gender: {
        1: '男',
        2: '女',
      },
    };
  },
  methods: {
    ...mapMutations('app', ['UPDATE_PATIENT']),
    goInfo(item) {
      this.UPDATE_PATIENT(item);
      this.$router.push({ name: 'PatientInfo' });
    },
    getSearch(val) {
      console.log('getSearch', val);
    },
    formatDate(date) {
      const today = new Date();
      if (
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear()
      ) {
        if (date.getDate() === today.getDate()) {
          return '今天';
        } else if (date.getDate() === today.getDate() + 1) {
          return '明天';
        }
      }
      return `${date.getMonth() + 1}月${date.getDate()}日`;
    },
    onConfirm(date) {
      this.show = false;
      this.date = this.formatDate(date);
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
          this.data.info = [];
          this.refreshing = false;
        }
        this.data.info.push(
          {
            headIcon: 'https://img.yzcdn.cn/vant/cat.jpeg',
            name: '刘桂花',
            state: 1,
            gender: 2,
            age: 32,
          },
          {
            headIcon: 'https://img.yzcdn.cn/vant/cat.jpeg',
            name: '余冬梅',
            state: 1,
            gender: 2,
            age: 34,
          },
          {
            headIcon: 'https://img.yzcdn.cn/vant/cat.jpeg',
            name: '陈紫雪',
            state: 1,
            gender: 2,
            age: 45,
          },
        );
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.data.info.length >= 10) {
          this.finished = true;
        }
      }, 1000);
    },
  },
};
</script>
<style lang="scss" scoped>
.van-pull-refresh{
  flex: 1;
  overflow: auto;
}
.top {
  background-color: #fff;
  padding: 12px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #666;
  border-top: 1px solid #ebedf0;
  border-bottom: 1px solid #ebedf0;
  .top_right {
    span {
      margin-left: 10px;
    }
  }
  .top_icon {
    vertical-align: middle;
  }
}
</style>
