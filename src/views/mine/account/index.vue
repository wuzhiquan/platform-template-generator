<template>
  <wrap-page>
    <template #headerRight>
      <van-icon name="search" color="#666" @click="show=!show" />
    </template>
    <div class="main">
      <van-tabs v-model="active" swipeable>
        <van-tab
          v-for="(item, index) in tabData"
          :title="item.title"
          :key="index"
        >
        </van-tab>
      </van-tabs>
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="~~没有更多了~~"
          class="list_main"
          @load="onLoad"
        >
          <div class="account_item" v-for="(item,index) in account" :key="index">
            <div class="item_top" @click="toRouter('PatientInfo', item)">
              <div>
              <van-image round class="img" :src="item.headIcon" />
              <span class="name">{{ item.name }}</span>
              </div>
              <div class="status">
                {{ statusMap[item.status].name }}
              </div>
            </div>
            <div class="item_bottom"  @click="toRouter('AccountDetails', item)">
              <div class="img_box" :style="{background: accountType[item.type].bgc}">
                <van-image class="img" :src="accountType[item.type].img" />
              </div>
              <div class="bottom_left">
                <div class="bottom_top">
                  <span class="accountType">{{ accountType[item.type].name }}</span>
                  <span class="price">￥{{ item.price }}</span>
                </div>
                <div class="time">{{ accountType[item.type].timeText }}：{{ item.doneTime }}</div>
                <div class="time">下单时间：{{ item.orderTime }}</div>
              </div>
            </div>
          </div>
        </van-list>
      </van-pull-refresh>
      <van-popup v-model="show" position="top" :overlay="false">
        <van-field v-model="form.name" label="按姓名搜" placeholder="请输入患者姓名" />
        <van-field label="订单类型">
          <template #input>
            <van-checkbox-group v-model="form.type" direction="horizontal">
              <van-checkbox shape="square" :name="1">预约挂号</van-checkbox>
              <van-checkbox shape="square" :name="2">在线问诊</van-checkbox>
            </van-checkbox-group>
          </template>
        </van-field>
        <van-button plain hairline type="default" @click="onCancel">取消搜索</van-button>
        <van-button class="search-button" plain hairline type="default" @click="onSearch">搜索</van-button>
      </van-popup>
    </div>
  </wrap-page>
</template>
<script>
import { mapMutations } from 'vuex';
import { WrapPage } from '@/components';
import { Image, List, Tab, Tabs, PullRefresh, Popup, Field, Checkbox, CheckboxGroup, Button } from 'vant';

export default {
  components: {
    WrapPage,
    'van-button': Button,
    'van-checkbox-group': CheckboxGroup,
    'van-checkbox': Checkbox,
    'van-field': Field,
    'van-popup': Popup,
    'van-image': Image,
    'van-tab': Tab,
    'van-tabs': Tabs,
    'van-list': List,
    'van-pull-refresh': PullRefresh,
  },
  data() {
    return {
      form: {
        name: null,
        type: [],
      },
      show: false,
      active: 0,
      tabData: [
        { title: '全部' },
        { title: '待付款' },
        { title: '已付款' },
        { title: '待评价' },
      ],
      account: [
        {
          id: 6,
          name: '袁春红',
          gender: 2,
          age: 23,
          phone: '13412345678',
          address: '阳江市江城区(江城街道社区)东山路668号',
          headIcon: 'https://img.yzcdn.cn/vant/cat.jpeg',
          status: 1,
          type: 1,
          price: '6.00',
          doneTime: '2020-12-18  14:00-16:00',
          orderTime: '2020.07.15 09:32:45',
        },
        {
          id: 6,
          phone: '13412345678',
          name: '刘桂花',
          age: 23,
          gender: 2,
          address: '阳江市江城区(江城街道社区)东山路668号',
          headIcon: 'https://img.yzcdn.cn/vant/cat.jpeg',
          status: 2,
          type: 2,
          price: '6.00',
          doneTime: '2020.07.16 14:00 - 2020.07.17 13:59',
          orderTime: '2020.07.15 09:32:45',
        },
        {
          id: 6,
          name: '王雪飞',
          phone: '13412345678',
          gender: 2,
          age: 35,
          address: '阳江市江城区(江城街道社区)东山路668号',
          headIcon: 'https://img.yzcdn.cn/vant/cat.jpeg',
          status: 3,
          type: 2,
          price: '6.00',
          doneTime: '2020.07.16 14:00 - 2020.07.17 13:59',
          orderTime: '2020.07.15 09:32:45',
        },
      ],
      statusMap: {
        1: { name: '待付款' },
        2: { name: '已付款' },
        3: { name: '待评价' },
      },
      accountType: {
        1: { name: '预约挂号', timeText: '预约时间', img: require('@/assets/img/registered.png'), bgc: '#81cbff' },
        2: { name: '在线问诊', timeText: '问诊时间', img: require('@/assets/img/visits.png'), bgc: '#5fdb8f' },
        3: { name: '按方开药', timeText: '下单时间', img: require('@/assets/img/prescribing.png'), bgc: '#adb0ff' },
      },
      loading: false,
      isLoading: false,
      finished: false,
    };
  },
  methods: {
    ...mapMutations('app', ['UPDATE_PATIENT']),
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 1; i++) {
          this.account.push(this.account[0]);
          this.account.push(this.account[1]);
          this.account.push(this.account[2]);
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.account.length >= 10) {
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
    onCancel() {
      this.form = {
        name: null,
        type: [],
      };
      this.show = false;
    },
    onSearch() {
      this.show = false;
    },
    toRouter(name, info) {
      this.UPDATE_PATIENT(info);
      this.$router.push({ name });
    },
  },
};
</script>
<style lang="scss" scoped>
.main {
  position: relative;
  @include flexCol();
  .van-pull-refresh {
    flex: 1;
    overflow: auto;
  }
  .list_main {
    padding: 12px;
    .account_item {
      border-radius: 6px;
      background-color: #fff;
      margin-top: 12px;
      font-size: 12px;
      color: #333;
      &:first-child {
        margin-top: 0;
      }
      .item_top {
        display: flex;
        justify-content: space-between;
        padding: 12px;
        border-bottom: 1px solid #f2f2f2;
        .img {
          width: 24px;
          height: 24px;
          margin-right: 12px;
          vertical-align: top;
        }
        .name {
          line-height: 24px;
          font-size: 14px;
        }
        .status {
          line-height: 24px;
        }
      }
      .item_bottom {
        padding: 12px;
        display: flex;
        .img_box {
          border-radius: 4px;
          height: 48px;
          width: 48px;
          margin-right: 12px;
          text-align: center;
          padding-top: 9px;
        }
        .img {
          height: 30px;
          width: 30px;
        }
        .bottom_left {
          flex-grow: 1;
        }
        .bottom_top {
          margin-bottom: 12px;
        }
        .accountType {
          font-size: 14px;
        }
        .price {
          line-height: 16px;
          float: right;
        }
        .time {
          color: #999;
          margin-bottom: 10px;
        }
      }
    }
  }
}
::v-deep .van-popup {
  position: absolute;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);
  .van-field:last-of-type:after {
    border: 0;
  }
  .van-button {
    width: 50%;
  }
  .search-button {
    color: #0099ff;
  }
}
::v-deep .van-tabs__line {
  background-color: #1677ff;
}
.van-icon{
  font-size: 20px;
}
</style>
