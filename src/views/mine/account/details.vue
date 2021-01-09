<template>
  <wrap-page>
    <person-card
      arrowIcon
      :imgSrc="patient.headIcon"
      :name="patient.name"
      :topRight="patient.phone"
      :bottomLeft="patient.address"
      @click.native="toRouter('PatientInfo')"
    />
    <div class="details_box">
      <div class="top">
        <van-image class="img" :src="patient.accountImg" />
        <div class="top_left">
          <div class="accountType">
            {{ accountType[patient.type].name }}
          </div>
          <div class="time">
            {{ accountType[patient.type].timeText }}：{{ patient.doneTime }}
          </div>
        </div>
      </div>
      <van-cell v-for="(item,index) in price" :class="item.class?item.class:''" :key="index" :title="item.name" :value="data[item.key]==='0.00'?data[item.key]:'￥'+data[item.key]" />
    </div>
    <div class="details_box">
      <div class="top">
        订单信息
      </div>
      <van-cell v-for="(item,index) in order" :key="index" :title="item.name" :value="data[item.key]" />
    </div>
  </wrap-page>
</template>
<script>
import { mapGetters } from 'vuex';
import { WrapPage, PersonCard } from '@/components';
import { Image, Cell } from 'vant';

export default {
  components: {
    WrapPage,
    PersonCard,
    'van-image': Image,
    'van-cell': Cell,
  },
  computed: {
    ...mapGetters(['patient']),
  },
  data() {
    return {
      accountType: {
        1: { name: '预约挂号', timeText: '预约时间' },
        2: { name: '在线问诊', timeText: '问诊时间' },
      },
      price: [
        { name: '服务价格', key: 'servicePrice' },
        { name: '享受优惠', key: 'preferential' },
        { name: '实付款', key: 'actualPay', class: 'actualPay' },
      ],
      order: [
        { name: '订单编号', key: 'orderId' },
        { name: '创建时间', key: 'createTime' },
        { name: '付款时间', key: 'payTime' },
      ],
      data: {
        servicePrice: '6.00',
        preferential: '0.00',
        actualPay: '6.00',
        orderId: '267344321857774736637',
        createTime: '2020.07.15 09:32:45',
        payTime: '2020.07.15 09:32:45',
      },
    };
  },
  methods: {
    toRouter(name) {
      this.$router.push({ name });
    },
  },
};
</script>
<style lang="scss" scoped>
::v-deep .person_info {
  border-bottom: 0;
  .top_right {
    float: none!important;
    margin-left: 12px;
  }
}
::v-deep .van-cell {
  padding: 3px 0;
  .van-cell__title {
    font-size: 12px;
    color: #999;
  }
  .van-cell__value {
    color: #666;
  }
  &::after {
    border: 0;
  }
  &.actualPay {
    .van-cell__title {
      color: #333;
    }
    .van-cell__value {
      color: #ffb24e;
    }
  }
}

.details_box {
  background-color: #fff;
  margin-top: 12px;
  font-size: 14px;
  padding: 12px;
  .top {
    display: flex;
    color: #333;
    margin-bottom: 15px;
  }
  .img {
    margin-right: 12px;
    height: 48px;
    width: 48px;
  }
  .top_left {
    flex-grow: 1;
  }
  .accountType {
    margin-bottom: 12px;
  }
  .time {
    font-size: 12px;
    color: #999;
    margin-bottom: 10px;
  }
}
</style>
